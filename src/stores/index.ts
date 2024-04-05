import { defineStore } from 'pinia';
import { type apeObject } from '@/models/ape';

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    loading: false,
    chainId: '',
    account: '',
    ethBalance: '',
    apes: [] as apeObject[],
    tailorApe: <apeObject>{},
  }),
  getters: {
    getLoading(state) {
      return state.loading;
    },
    getChainId(state) {
      return state.chainId;
    },
    getAccount(state) {
      return state.account;
    },
    getEthBalance(state) {
      return state.ethBalance;
    },
    getApes(state) {
      return state.apes;
    },
    getTailorApe(state) {
      return state.tailorApe;
    }
  },
  actions: {
    setLoading(value: boolean) {
      this.loading = value;
    },
    setChainId(chainId: string) {
      this.chainId = chainId;
    },
    setAccount(account: string) {
      this.account = account;
    },
    setEthBalance(balance: string) {
      this.ethBalance = balance;
    },
    setApes(apes: apeObject[]) {
      this.apes = apes;
    },
    setTailorApe(ape: apeObject) {
      this.tailorApe = ape;
    },
    setTailorApeBody(value: string) {
      this.tailorApe.body = value;
    },
    setTailorApeSkin(value: string) {
      this.tailorApe.skin = value;
    },
    setTailorApeClothes(value: string) {
      this.tailorApe.clothes = value;
    },
    setTailorApeEyes(value: string) {
      this.tailorApe.eyes = value;
    },
    setTailorApeGlasses(value: string) {
      this.tailorApe.glasses = value;
    },
    setTailorApeHat(value: string) {
      this.tailorApe.hat = value;
    },
    setTailorApeMouth(value: string) {
      this.tailorApe.mouth = value;
    },
    setTailorApePiercing(value: string) {
      this.tailorApe.piercing = value;
    },
    setTailorApeImage(value: string) {
      this.tailorApe.image = value;
    }
  }
});
