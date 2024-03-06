<template>
  <header id="header">
    <nav class="top-nav">
      <router-link to="/" class="logo-link" @click="state.toggleMenu = false">
        <img src="../assets/images/logos/ApeX_Green_Logo.png" alt="ApeX" height="50" />
      </router-link>
      <input id="menu-toggle" v-model="state.toggleMenu" type="checkbox" />
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button-black menu-button"></div>
      </label>
      <ul class="menu-white menu">
        <li class="link-white" @click="navigateAndScroll('apewear')">ApeWear</li>
        <li class="link-white" @click="navigateAndScroll('faqs')">ApeScapes</li>
      </ul>
    </nav>
  </header>
</template>
<script setup lang="ts">
  import { reactive } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const state = reactive({
    toggleMenu: false
  });

  function scrollPageToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  function scrolltoId(to: string) {
    const access = document.getElementById(to);
    if (access) access.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  function navigateAndScroll(to: string) {
    if (route.name === to) {
      scrollPageToTop();
    } else {
      scrolltoId(to);
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/mixins.scss';
  header {
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: $apex-dark-grey;
  }
  .top-nav {
    width: 100%;
    max-width: $max-width;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin: 0 auto;

    @include breakpoint($break-ssm) {
      padding: 5px 10px 0;
    }
    @include breakpoint($break-md) {
      max-width: 839px;
      width: 100%;
      padding: 5px 10px 0;
    }
  }

  .logo-link {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-left: 20px;
    @include breakpoint($break-sm) {
      margin: -5px 0 0 0;
    }
  }

  .menu {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
    z-index: 999999;
    li.link-black {
      color: $apex-dark-grey;
      cursor: pointer;
    }
    li.link-white {
      color: $white;
      cursor: pointer;
    }
  }
  .menu > li {
    margin: 0 1rem;
    overflow: hidden;
    text-decoration: none;
    font-family: 'TWKEverett';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
  }
  .menu-button-container {
    display: none;
    height: 100%;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #menu-toggle {
    display: none;
  }

  .menu-button-black,
  .menu-button-black::before,
  .menu-button-black::after {
    background-color: $apex-dark-grey;
  }

  .menu-button,
  .menu-button::before,
  .menu-button::after {
    display: block;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
  }

  .menu-button::before {
    content: '';
    margin-top: -8px;
  }

  .menu-button::after {
    content: '';
    margin-top: 8px;
  }

  #menu-toggle:checked + .menu-button-container .menu-button {
    background: rgba(255, 255, 255, 0);
  }

  #menu-toggle:checked + .menu-button-container .menu-button::before {
    margin-top: 0px;
    transform: rotate(405deg);
  }

  #menu-toggle:checked + .menu-button-container .menu-button::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  }

  @media (max-width: 700px) {
    .menu-button-container {
      display: flex;
    }

    .menu {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 54px;
    }

    #menu-toggle ~ .menu li {
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    #menu-toggle:checked ~ .menu li {
      display: flex;
      align-items: center;
      height: 3em;
      padding: 0.5em;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    // #menu-toggle:checked ~ .menu-white li {
    //   border-top: 1px solid $grey-20;
    // }

    // #menu-toggle:checked ~ .menu-black li {
    //   border-top: 1px solid $black;
    // }

    .menu > li {
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0.5em 0;
      width: 100%;
    }

    .menu-black {
      background-color: $apex-dark-grey;
      // border-bottom: 1px solid $black;
    }
    .menu-white {
      background-color: $apex-dark-grey;
      // border-bottom: 1px solid $white;
    }
  }
</style>
