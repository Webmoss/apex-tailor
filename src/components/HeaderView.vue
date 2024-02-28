<template>
  <header>
    <nav>
      <!-- <RouterLink to="/">
        <img src="../assets//images/logos/ApeX_Green_Logo.png" alt="ApeX" height="100" />
      </RouterLink> -->
      <img src="../assets/images/logos/ApeX_Green_Logo.png" alt="ApeX" height="100" />
    </nav>
  </header>
</template>

<script setup lang="ts">
// import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";
  @import "@/assets/styles/mixins.scss";

  header {
    width: 100%;
    height: 140px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  nav {
    width: 100%;
    max-width: $max-width;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
  }

  // nav a.router-link-exact-active {
  //   color: var(--color-text);
  // }

  // nav a.router-link-exact-active:hover {
  //   background-color: transparent;
  // }

  // nav a {
  //   display: inline-block;
  //   padding: 0 1rem;
  //   border-left: 1px solid var(--color-border);
  // }

  // nav a:first-of-type {
  //   border: 0;
  // }
</style>
