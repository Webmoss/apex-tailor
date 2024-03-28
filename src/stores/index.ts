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
    searchApeId: 'all',
    searchResults: [] as apeObject[],
    myStage: null as any,
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
    },
    getMyStage(state) {
      return state.myStage;
    },
    getSearchApeId(state) {
      return state.searchApeId;
    },
    getSearchResults(state) {
      return state.searchResults;
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
    setMyStage(stage: any) {
      this.myStage = stage;
    },
    updateSearchApeId(apeId: string) {
      this.searchApeId = apeId;
    },
    addSearchResults(apes: apeObject[]) {
      this.searchResults = apes;
    },
    clearSearchResults() {
      this.searchApeId = 'all';
      this.searchResults = [];
    }
  }
});
