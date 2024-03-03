<template>
  <div id="apescapes" class="main-container">
    <div class="scroll-container">
      <div class="grey-div"></div>
      <div class="scroll-tracker"></div>
    </div>
    <div class="row">
      <div class="container">
        <div class="title">
          Apes<br />
          Gone<br />
          Wild
        </div>
        <div class="slogan">
          Create custom banners<br class="mobile-hidden"> for your Ape NFTs
        </div>        
        <div class="button-container-start">
          <button
            class="green-button"
            @click="goHome()"
          >
            ApeWear
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { onMounted } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();

  function goHome() {
    router.push({ name: "apewear" });
  }

  onMounted(async () => {
    const scrollTracker = document.querySelector(".scroll-tracker");
    const scrollTrackingTimeline = new ScrollTimeline({
      source: document.scrollingElement,
      orientation: "block",
      scrollOffsets: [CSS.percent(0), CSS.px(900)],
    });
    if (scrollTracker) {
      scrollTracker.animate(
        { transform: ["scaleX(0)", "scaleX(1)"] },
        { duration: 1, timeline: scrollTrackingTimeline }
      );
    }
  });
</script>
<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";
  @import "@/assets/styles/mixins.scss";

  .main-container {
    position: relative;
    width: 100%;
    height: calc(100% - 88px);
    top: 0;
    padding: 0;
    margin: 0 auto;
    background-image: url("../assets/images/tiles/Tileable_Grey.png");
    background-size: 300px;
    background-repeat: repeat;
    background-position: top right;
    transform-origin: left;

    @include breakpoint($break-sm) {
      height: 60%;
      min-height: 380px;
      background-image: none;
    }
  }

  .scroll-container {
    display: flex;
    position: relative;
    height: 100%;
    width: 100%;
  }

  .scroll-tracker {
    background: $apex-dark-grey;
    transform-origin: left;
    height: 100%;
    width: 60%;
    @include breakpoint($break-sm) {
      display: none;
    }
  }

  .grey-div {
    background: $apex-dark-grey;
    // background-image: url("../assets/images/tiles/Tileable_Grey.png");
    // background-size: 300px;
    // background-repeat: repeat;
    // background-position: left 0 top 51%;
    width: 45%;
    @include breakpoint($break-sm) {
      width: 100%;
    }
  }
  .container {
    justify-content: space-evenly;
    position: absolute;
    top: 0;
  }

  .title {
    width: 100%;
    color: $white;
    font-family: "TWKEverett";
    font-style: normal;
    text-align: left;
    font-size: 120px;
    line-height: 120px;
    text-align: left;
    margin: 20% 0 0 20%;

    @include breakpoint($break-sm) {
      font-weight: 400;
      font-size: 40px;
      line-height: 44px;
      margin: 30px 0 20px 20px;
    }

    @include breakpoint($break-md) {
      font-size: 48px;
      line-height: 54px;
      max-width: 650px;
    }
  }
  .slogan {
    width: 100%;
    color: $white;
    
    // font-family: "TWKEverett";
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 48px;
    text-align: left;
    margin: 6% 0 5% 20%;

    @include breakpoint($break-sm) {
      font-size: 20px;
      line-height: 28px;
      margin: 10px 0;
      padding-left: 20px;
    }
  }

  .button-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-between;
  }
  .button-container-start {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    margin-left: 20%;
    @include breakpoint($break-sm) {
      margin: 0;
      padding: 0;
    }
  }
  .button-container-center {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;
  }
  .button-container-end {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: flex-end;
  }

  .mobile-hidden {
    display: block;
    @include breakpoint($break-sm) {
      display: none;
    }
  }
</style>
