import axios from "axios";
import { ethers } from "ethers";
import { useStore } from "@/stores";


/* Ape Token Contract Addresses */
const apexAddress = import.meta.env.VITE_APECOIN_CONTRACT_ADDRESS;

/* Services api keys */
const etherScapAPI = import.meta.env.VITE_ETHERSCAN_API_KEY;

/* Blockchain ID */
const chainID = import.meta.env.VITE_NODE_ENV === "development" ? 5 : 1;

export default class authNFT {
  /**
   * @param {String} accountAddress
   * @param {String} tokenId
   * @returns {Promise<String|Error>}
   */
  async authAccountAddress(accountAddress = "", tokenIds = null) {
    // We need to specifically check for the OpenSea contract
    // this contract doesn't show up on etherscan
    // OpenSea used 1 contract for all NFTs minted on their site
    // so we need to do an extra check for a specific token id as well
    if (
      accountAddress === "0x495f947276749Ce646f68AC8c248420045cb7b5e" &&
      tokenIds
    ) {
      const response = await axios.get("https://api.opensea.io/api/v1/assets", {
        headers: {
          "X-API-KEY": "",
        },
        params: {
          owner: accountAddress,
          asset_contract_address: apexAddress,
          token_ids: tokenIds,
        },
      });
      const data = response.data;
      console.log("Opensea Response Data: ", data);
      return { isAuthenticated: data.assets && data.assets.length > 0 };
    } else {
      /**
       * @dev TODO: Need to add a check here for the chain and switch the api
       */
      console.log("etherScapAPI", etherScapAPI);
      const response = await axios.get("https://api.etherscan.io/api", {
        params: {
          module: "account",
          action: "tokenbalance",
          contractaddress: apexAddress,
          address: accountAddress,
          tag: "latest",
          apikey: etherScapAPI,
        },
      });
      const data = response.data;
      console.log("Etherscan Response Data: ", data);
      console.log("Etherscan Response Data Result: ", data.result);

      return data.result > 0 ? true : false;
    }
  }

  /**
   * Switch to correct Network
   */
  async checkNetwork(chainHex: string) {
    /* If we deving local then switch to Goerli */
    if (chainID === 5 && chainHex !== "0x5") {
      try {
        const { ethereum } = window;
        if (!ethereum) {
          console.log(`Please connect 🦊 Metamask to continue!`);
          return;
        }
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x5" }],
        });
        console.log(
          "You have switched to the Goerli Test Network, happy deving Moose!",
          "0x5"
        );
        const store = useStore();
        store.setChainId("0x5");
      } catch (error) {
        console.log(error);
        console.log("Cannot switch to the network");
        // The network has not been added to MetaMask
        // if (error.code === 4902) {
        //   console.log("Please add the Polygon network to MetaMask");
        // }
      }
    } else if (chainID === 1 && chainHex !== "0x1") {
      try {
        const { ethereum } = window;
        if (!ethereum) {
          console.log(`Please connect 🦊 Metamask to continue!`);
          return;
        }
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x1" }],
        });
        console.log("You have switched to the Ethereum Main Network", "0x1");
        const store = useStore();
        store.setChainId("0x1");
      } catch (error) {
        console.log(error);
        console.log("Cannot switch to the network");
        // The network has not been added to MetaMask
        // if (error.code === 4902) {
        //   console.log("Please add the Polygon network to MetaMask");
        // }
      }
    }
  }
  /**
   * Check if our Wallet is Connected to 🦊 Metamask
   */
  async checkIfWalletIsConnected() {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log(`Please connect 🦊 Metamask to continue!`);
        return;
      }
      /* Get our Current Account */
      const accounts = await ethereum.request({ method: "eth_accounts" });

      /* Update our Current Account in the Store */
      if (accounts.length !== 0) {
        const store = useStore();
        store.setAccount(accounts[0]);

        /* Get our Account Balance */
        await this.checkETHBalance(accounts[0]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Get Account ETH Balance
   */
  async checkETHBalance(account: string) {
    try {
      const { ethereum } = window as any;
      if (!ethereum) {
        console.log(`Please connect 🦊 Metamask to continue!`);
        return;
      }
      const provider = new ethers.BrowserProvider(ethereum);
      const wei = await provider.getBalance(account);
      const ethBalance = ethers.formatEther(wei);
      
      const store = useStore();
      store.setEthBalance(ethBalance);
    } catch (error) {
      console.log(error);
    }
  }
}
