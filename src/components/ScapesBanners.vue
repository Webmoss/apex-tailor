<template>
  <div id="banners" class="container">
    <div class="intro">
      <div class="left-side">
        <div id="banners" class="card">
        </div>
      </div>
      <div class="right-side">
        <div class="description">
          <h2>PFP Banners</h2>
          <p>
            1. Connect your wallet<br />
            2. Select your X banner<br />
            3. Use ApeCoin for transactions<br />
            4. Share on social media  →
          </p>
          <p>
            <a class="link" href="#" target="_blank" alt="Share Banner"
              >Share
            </a>
            <br />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

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
    width: calc(100% - 360px);
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;

    @include breakpoint($break-sm) {
      width: 100%;
    }

    .card {
      width: calc(100% - 4rem);
      height: 800px;
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
      justify-content: flex-start;
      padding: 2em 2em 0;
      border-radius: 14px;
      border: 0.5px solid $apex-green;
      color: $white;
      background: $apex-grey;
      
      @include breakpoint($break-sm) {
        width: calc(100% - 1rem);
        align-content: flex-start;
        align-items: center;
        justify-content: flex-start;
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
