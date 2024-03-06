<template>
  <div id="banners" class="container">
    <div class="intro">
      <div class="left-side">
        <div class="card">
          <div class="banner-image">
            <button class="download-icon-button" @click="download(1)">
              <IconDownload />
            </button>
            <img src="../assets/images/banners/banner0.png" alt="Banner" />
          </div>
          <div class="banner-image">
            <button class="download-icon-button" @click="download(2)">
              <IconDownload />
            </button>
            <img src="../assets/images/banners/banner1.png" alt="Banner" />
          </div>
          <div class="banner-image">
            <button class="download-icon-button" @click="download(3)">
              <IconDownload />
            </button>
            <img src="../assets/images/banners/banner2.png" alt="Banner" />
          </div>
          <div class="banner-image">
            <button class="download-icon-button" @click="download(4)">
              <IconDownload />
            </button>
            <img src="../assets/images/banners/banner3.png" alt="Banner" />
          </div>
        </div>
      </div>
      <div class="right-side">
        <div class="description">
          <h2>PFP Banners</h2>
          <p>
            1. Connect your wallet<br />
            2. Select your X banner<br />
            3. Use ApeCoin for transactions<br />
            4. Share on social media →
          </p>
          <p>
            <a class="link" href="#" target="_blank" alt="Share Banner">Share </a>
            <br />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  import IconDownload from '../assets/svgs/icons/IconDownload.vue';

  const downloadId = ref(null);

  function download() {
    console.log('Download Image',downloadId);
  }
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/mixins.scss";
.container {
  display: flex;
  flex-direction: column;
  height: 57rem;
  color: $white;
  background: $apex-dark-grey;
  // background-image: url("../assets/images/large_blue_graphic.png"),
  //   url("../assets/images/GreySwirlBG.png");
  // background-size: auto, contain;
  // background-repeat: no-repeat, no-repeat;
  // background-position: top 10em left -3em, right 0 top 0;
  padding: 5% 0 0 0;

  @include breakpoint($break-sm) {
    height: auto;
    flex-direction: column;
    // background-image: url("../assets/images/large_blue_graphic.png");
    // background-size: auto;
    // background-repeat: no-repeat;
    // background-position: top 5em left;
    // padding: 32px 30px 55px 30px;
    padding: 5% 0;
  }
}

.intro {
  display: flex;
  flex-direction: row;
  @include breakpoint($break-sm) {
    width: 100%;
    flex-direction: column-reverse;
  }
}
.left-side {
  width: calc(100% - 560px);
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;

  @include breakpoint($break-sm) {
    width: 100%;
  }

  .card {
    max-width: 840px;
    // width: calc(80% - 4rem);
    height: 800px;
    overflow: scroll;
    padding: 2rem;
    border-radius: 14px;
    color: $white;
    background: $apex-grey;

    @include breakpoint($break-sm) {
      width: calc(100% - 1rem);
      align-content: flex-start;
      align-items: center;
      justify-content: flex-start;
    }

    .banner-image {
      display: block;
      position: relative;
      max-width: 660px;
      height: 220px;
      background: #f4f4f4;
      border-radius: 12px;
      margin: 0 0 20px 0;
      padding: 0;
      transition: all 0.5s linear;
      overflow: hidden;

      img {
        max-width: 100%;
        height: auto;
      }

      @include breakpoint($break-sm) {
        width: 100%;
        height: auto;
        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }

      @include breakpoint($break-ssm) {
        width: 100%;
        height: auto;
        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }

      .download-icon-button {
        position: absolute;
        bottom: 5px;
        right: 5px;
        color: $grey-40;
        background-color: transparent;
        border: none;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        transition: transform 600ms cubic-bezier(0.23, 1, 0.32, 1);
        cursor: pointer;

        &:hover {
          color: $white;
        }
        &:focus,
        &:focus-visible {
          outline: none;
        }
      }
    }
  }
}

.right-side {
  min-width: 360px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;

  @include breakpoint($break-sm) {
    width: 100%;
  }
}

.description {
  margin: 0;
  padding: 0;

  @include breakpoint($break-sm) {
    padding: 0 0 20px 20px;
  }

  h2 {
    font-family: "TWKEverett";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    text-align: left;
    margin: 0 0 20px 0;
    @include breakpoint($break-sm) {
      font-size: 22px;
      line-height: 32px;
      margin: 0 0 10px;
    }
    @include breakpoint($break-md) {
      font-size: 30px;
      line-height: 38px;
      margin: 0 0 15px 0;
    }
  }

  p {
    font-size: 20px;
    line-height: 28px;
    text-align: left;
    margin: 0 0 30px 0;

    @include breakpoint($break-sm) {
      font-size: 16px;
      line-height: 20px;
      margin: 0 0 10px 0;
    }
  }
}
</style>
