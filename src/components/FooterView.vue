<template>
  <footer id="faqs" class="footer">
    <div class="footer-container">
      <div class="row">
        <div class="footer-card">
          <div class="footer-left">
            <p>
              <img src="../assets/images/logos/ApeX_Green_Logo.png" alt="Ape[x]" height="80" />
            </p>
          </div>
        </div>
        <div class="footer-card">
          <div class="footer-right">
            <ul class="social-links">
              <li>
                <a href="https://discord.gg/apescriptions" alt="Discord" target="_blank"
                  >Discord →</a
                >
              </li>
              <li>
                <a href="https://twitter.com/apescriptions" alt="Twitter" target="_blank"
                  >Twitter →</a
                >
              </li>
              <li>
                <a href="https://ordex.io/collection/eth/apescriptions" alt="Ordex" target="_blank"
                  >Ordex →</a
                >
              </li>
              <li>
                <a href="https://www.apescriptions.xyz/" alt="Apescriptions" target="_blank"
                  >Website →</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-card">
          <ul class="site-links mobile-hidden">
            <li @click="navigateAndScroll('apewear')">ApeWear →</li>
            <li @click="navigateAndScroll('about')">ApeScapes →</li>
          </ul>
        </div>
        <div class="footer-card">
          <button class="scroll-to-top" @click.prevent="scrollPageToTop">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 0 24 24"
              width="20px"
              fill="#000000"
              class="arrow-up"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
            </svg>
          </button>
          <button class="mobile-button" @click.prevent="scrollPageToTop">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 0 24 24"
              width="20px"
              fill="#000000"
              class="arrow-up"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const navigateAndScroll = (to: string) => {
    if (route.name === to) {
      scrollPageToTop();
    } else {
      scrolltoId(to);
    }
  };

  const scrolltoId = (to: string) => {
    const access = document.getElementById(to);
    if (access) access.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollPageToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/mixins.scss';

  .footer {
    height: auto;
    font-family: 'TWKEverett';
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    text-decoration: none;
    background-color: $apex-dark-grey;
    color: $white;
    a {
      color: $white;
      text-decoration: none;
    }
  }

  .footer-container {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    text-align: left;
    max-width: $max-width;
    padding: 4rem 0 2rem;
    margin: 0 auto;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;

    // background-image: url("../assets/images/YellowCircle.png");
    // background-size: 200px;
    // background-repeat: no-repeat;
    // background-position: right 150px top 0;
    @include breakpoint($break-sm) {
      min-height: 280px;
      flex-direction: column;
      padding: 20px;
    }
    @include breakpoint($break-md) {
      flex-direction: row;
      padding: 20px;
    }
  }
  .footer-left {
    p {
      font-family: 'TWKEverett';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      text-align: left;
      margin: 0 0 20px;
    }
  }
  ul {
    margin: 0;
  }
  .footer-right {
    display: flex;
    flex-direction: column;
  }

  .container {
    color: $black;
    background: $white;
    margin: 0 auto;
    padding: 0 100px 50px;

    @include breakpoint($break-md) {
      padding: 0 30px 30px 30px;
    }
    @include breakpoint($break-lg) {
      padding: 0 100px 55px;
    }
    @include breakpoint($break-xl) {
      padding: 0 0 50px;
    }
  }
  .row {
    display: flex;
    width: 100%;
    margin: 0;
    justify-content: space-between;
    @include breakpoint($break-sm) {
      display: block;
    }
  }
  .row .footer-card {
    text-align: left;
    width: 20%;
    @include breakpoint($break-sm) {
      width: 100%;
    }
  }

  .social-links {
    padding-left: 30px;
    list-style: none;
    font-family: 'TWKEverett';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    cursor: pointer;
  }

  .social-links li {
    padding-bottom: 0.5rem;
    @include breakpoint($break-md) {
      padding-right: 20px;
    }
    @include breakpoint($break-lg) {
      padding-right: 0;
    }
  }

  .site-links {
    list-style: none;
    font-family: 'TWKEverett';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    cursor: pointer;
  }
  .site-links li {
    padding-bottom: 0.5rem;
    @include breakpoint($break-md) {
      padding-right: 20px;
    }
    @include breakpoint($break-lg) {
      padding-right: 0;
    }
  }

  .footer .scroll-to-top {
    background-color: $white;
    width: 60px;
    height: 60px;
    border-radius: 8px;
    padding: 20px;
    border: 1px solid $grey-20;

    &:hover &:focus &:focus-visible {
      border-color: $apex-green;
    }
  }
  .footer .scroll-to-top .arrow-up {
    fill: $black;
  }
  .scroll-to-top {
    margin-left: unset;
    display: flex;
    cursor: pointer;
    @include breakpoint($break-sm) {
      display: none;
      border: none;
      height: 50px;
      width: 50px;
      border-radius: 4px;
      margin-left: auto;
      align-items: center;
      justify-content: center;
    }
  }

  .mobile-hidden {
    display: block;
    font-weight: bold;
    a {
      text-decoration: none;
    }
    @include breakpoint($break-sm) {
      display: none;
    }
  }

  .mobile-button {
    display: none;
    margin-left: unset;
    @include breakpoint($break-sm) {
      background-color: $grey-30;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      height: 60px;
      width: 60px;
      border-radius: 4px;
      margin: -85px 0 0 auto;
      cursor: pointer;
    }
  }
</style>
