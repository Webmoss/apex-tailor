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
    apeAttributes: <apeObject>{},
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
    getApeAttributes(state) {
      return state.apeAttributes;
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
    },
    setApeAttributes(attributes: apeObject) {
      this.apeAttributes = attributes;
    },
    setApeAttributesBody(value: string) {
      this.apeAttributes.body = value;
    },
    setApeAttributesSkin(value: string) {
      this.apeAttributes.skin = value;
    },
    setApeAttributesClothes(value: string) {
      this.apeAttributes.clothes = value;
    },
    setApeAttributesEyes(value: string) {
      this.apeAttributes.eyes = value;
    },
    setApeAttributesGlasses(value: string) {
      this.apeAttributes.glasses = value;
    },
    setApeAttributesHat(value: string) {
      this.apeAttributes.hat = value;
    },
    setApeAttributesMouth(value: string) {
      this.apeAttributes.mouth = value;
    },
    setApeAttributesPiercing(value: string) {
      this.apeAttributes.piercing = value;
    },
    setApeAttributesImage(value: string) {
      this.apeAttributes.image = value;
    }
  }
});
