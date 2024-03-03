<template>
  <div id="apescapes" class="main-container">
    <div class="scroll-container">
      <div class="grey-div"></div>
      <div class="scroll-tracker"></div>
    </div>
    <div class="row">
      <div class="container">
        <div>
          <div class="title">
            Apes<br />
            Gone<br />
            Wild
          </div>
        </div>
        <div>
          <div class="slogan">
            Create custom banners<br class="mobile-hidden"> for your Ape NFTs
            <br>
            <br>
            <div class="button-container-start">
              <button
                class="green-button"
                @click="goBanners()"
              >
                ApeScapes
              </button>
            </div>
          </div>
        </div>
        <div>
      </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { onMounted } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();

  function goBanners() {
    router.push({ name: "apescapes" });
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
    height: 45rem;
    top: 0;
    padding: 0;
    margin: 0 auto;
    background-image: url("../assets/images/tiles/Tileable_Green.png");
    background-size: 300px;
    background-repeat: repeat;
    background-position: top right;
    transform-origin: left;
    
    @include breakpoint($break-sm) {
      height: 85dvh;
      background-image: none;
    }
    @include breakpoint($break-md) {
      height: 85dvh;
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
    width: 80%;
    @include breakpoint($break-sm) {
      display: none;
    }
  }

  .grey-div {
    background: $white;
    // background-image: url("../assets/images/tiles/Tileable_Grey.png");
    // background-size: 300px;
    // background-repeat: repeat;
    // background-position: left 0 top 51%;
    width: 55%;
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
    font-family: "TWKEverett";
    font-style: normal;
    text-align: left;
    max-width: 900px;
    font-size: 84px;
    line-height: 86px;
    text-align: left;
    margin: 120px 0 0 60px;
    color: $grey-100;

    @include breakpoint($break-sm) {
      font-weight: 400;
      font-size: 34px;
      line-height: 40px;
      margin: 40px 0 0 10px;
    }

    @include breakpoint($break-md) {
      font-size: 48px;
      line-height: 54px;
      max-width: 650px;
    }
  }
  .slogan {
    max-width: 700px;
    color: $grey-100;
    font-family: "TWKEverett";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 42px;
    text-align: left;
    margin: 50px 50px 196px 50px;

    @include breakpoint($break-sm) {
      font-size: 20px;
      line-height: 28px;
      margin: 15px 0 0 0;
    }

    @include breakpoint($break-md) {
      font-size: 30px;
      line-height: 36px;
      max-width: 550px;
      margin: 30px 10px 0 10px;
    }
  }

  .download-button {
    width: 300px;
    height: 40px;
    display: flex;
    flex-direction: row nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    color: $white;
    background-color: $apex-green;
    font-size: 18px;
    font-weight: 600;
    border: 0.5px solid $apex-dark-grey;
    border-radius: 12px;
    padding-left: 20px;
    padding-right: 20px;
    transition: all 0.3s linear;
    cursor: pointer;

    &:hover,
    &:focus
    &:focus-visible {
      color: $apex-grey;
      border: 1px solid $apex-dark-grey;
    }
    @include breakpoint($break-ssm) {
      margin: 15px auto;
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
