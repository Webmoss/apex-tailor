<template>
  <div v-if="loading" class="loader-container">
    <div class="loader"></div>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import { onMounted } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useStore } from '@/stores';

  /* Factories & Services */
  import authNFT from '@/services/authNFT';

  /* Store */
  const store = useStore();
  const { account, loading } = storeToRefs(store);

  /**
   * Check if our Wallet is Connected to 🦊 Metamask and Get ETH Balance
   */
  async function checkIfWalletIsConnected() {
    if (account.value === '') {
      const authAccount = new authNFT();
      await authAccount.checkIfWalletIsConnected();
    }
  }

  onMounted(async () => {
    await checkIfWalletIsConnected();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
</script>

<style lang="scss" scoped>
  .loader-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: grid;
    place-items: center;
    z-index: 999;

    .loader {
      border: 16px solid #f3f3f3; /* Light grey */
      border-top: 16px solid #3498db; /* Blue */
      border-radius: 50%;
      width: 80px;
      height: 80px;
      animation: spin 2s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
</style>
