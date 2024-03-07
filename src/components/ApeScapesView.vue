<template>
  <div id="apescapes" class="banner-container">
    <div class="scroll-container">
      <div class="grey-div"></div>
      <div class="scroll-tracker"></div>
    </div>
    <div class="row">
      <div class="container">
        <div class="intro-row">
          <div class="column">
            <div class="title">
              Apes<br />
              Gone<br />
              Wild
            </div>
          </div>
          <div class="column">
            <div class="promo-ape">
              <img src="../assets/images/promos/PromoApe.png" alt="Hoodie Gang" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="slogan">
            Create custom banners<br class="mobile-hidden" />
            for<br class="mobile-show" /> your Ape NFTs
          </div>
          <div class="button-container-start">
              <button class="green-button" @click="goBanners()">ApeScapes</button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script setup>
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  function goBanners() {
    router.push({ name: 'apescapes' });
  }

  onMounted(async () => {
    const scrollTracker = document.querySelector('.scroll-tracker');
    const scrollTrackingTimeline = new ScrollTimeline({
      source: document.scrollingElement,
      orientation: 'block',
      scrollOffsets: [CSS.percent(0), CSS.px(800)]
    });
    if (scrollTracker) {
      scrollTracker.animate(
        { transform: ['scaleX(0)', 'scaleX(1)'] },
        { duration: 1, timeline: scrollTrackingTimeline }
      );
    }
  });
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/mixins.scss';
  .banner-container {
    position: relative;
    width: 100%;
    height: 50rem; 
    top: 0;
    padding: 0;
    margin: 0 auto;
    background-color: $white;
    background-image: url('../assets/images/tiles/Tileable_Green.png');
    background-size: 300px;
    background-repeat: repeat;
    background-position: top right;
    transform-origin: left;

    @include breakpoint($break-sm) {
      height: 60%;
      min-height: 850px;
      background-image: none;
    }
    @include breakpoint($break-md) {
      height: 100%;
      min-height: 760px;
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
    background: $apex-grey;
    transform-origin: left;
    height: 100%;
    width: 60%;
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
    width: 60%;
    @include breakpoint($break-sm) {
      width: 100%;
    }
  }
  

  .container {
    width: 100%;
    justify-content: space-evenly;
    position: absolute;
    top: 0;
  }

  .intro-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: flex-start;

    @include breakpoint($break-md) {
      width: 100%;
      flex-direction: row;
    }
    @include breakpoint($break-sm) {
      width: 100%;
      flex-direction: column;
    }
  }

  .column {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
  }

  .promo-ape{
    width: 240px;
    height: auto;
    border-radius: 12px;
    overflow: hidden;
    margin: 120px 0 0 80px;

    @include breakpoint($break-md) {
      width: 220px;
    }
    @include breakpoint($break-sm) {
      width: 180px;
      margin: 10px auto 0;
    }
    
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .title {
    color: $grey-100;
    font-family: 'TWKEverett';
    font-style: normal;
    text-align: left;
    font-size: 84px;
    line-height: 84px;
    text-align: left;
    margin: 120px 0 0 60px;
    
    @include breakpoint($break-sm) {
      font-size: 34px;
      line-height: 40px;
      margin: 40px 0 0 10px;
    }

    @include breakpoint($break-md) {
      font-size: 70px;
      line-height: 70px;
    }
  }

  .slogan {
    color: $grey-100;
    font-family: 'TWKEverett';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 42px;
    text-align: left;
    margin: 50px 50px 40px 50px;

    @include breakpoint($break-sm) {
      font-size: 20px;
      line-height: 28px;
      margin: 10px 0 0 0;
    }

    @include breakpoint($break-md) {
      font-size: 30px;
      line-height: 36px;
      max-width: 550px;
      margin: 40px 10px 0 20px;
    }
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
      margin: 40px auto 0;
      padding: 0;
    }
  }

  .mobile-br-hidden {
    display: block;
    @include breakpoint($break-sm) {
      display: none;
    }
  }
  .mobile-br-show {
    display: none;
    @include breakpoint($break-sm) {
      display: block;
    }
  }
</style>
