<template>
  <main id="apewear" class="container">
    <div class="tailor-container">
      <div class="column mobile-hidden">
        <div class="one-quarter">
          <div class="attribute-box">
            <img src="../assets/images/apes/1.png" alt="ApeX" />
          </div>
        </div>
        <div class="one-quarter">
          <div class="attribute-box">
            <img src="../assets/images/apes/1.png" alt="ApeX" />
          </div>
        </div>
        <div class="one-quarter">
          <div class="attribute-box">
            <img src="../assets/images/apes/1.png" alt="ApeX" />
          </div>
        </div>
      </div>

      <div class="main-column">
        <div class="two-quarter">
          <div class="input-row">
            <button class="icon-button" @click="resetApe()">
              <IconRestart />
            </button>
            <input v-model="apeId" name="apeId" type="text" placeholder="Ape ID #" />
            <button class="icon-button" @click="searchApe()">
              <IconPlay />
            </button>
          </div>
        </div>
        <div class="two-quarter">
          <div class="image-box">
            <img src="../assets/images/apes/0.png" alt="ApeX" />
          </div>
        </div>
        <div class="two-quarter mobile-hidden">
          <button class="green-button" @click="downloadCanvas()">Download</button>
        </div>
      </div>
      <div class="column mobile-hidden">
        <div class="one-quarter">
          <div class="attribute-box">
            <img src="../assets/images/apes/1.png" alt="ApeX" />
          </div>
        </div>
        <div class="one-quarter">
          <div class="attribute-box">
            <img src="../assets/images/apes/1.png" alt="ApeX" />
          </div>
        </div>
        <div class="one-quarter">
          <div class="attribute-box">
            <img src="../assets/images/apes/1.png" alt="ApeX" />
          </div>
        </div>
      </div>

      <!-- Mobile Versions -->
      <div class="mobile-show">
        <div class="column">
          <div class="one-quarter">
            <div class="attribute-box">
              <img src="../assets/images/apes/1.png" alt="ApeX" />
            </div>
          </div>
          <div class="one-quarter">
            <div class="attribute-box">
              <img src="../assets/images/apes/1.png" alt="ApeX" />
            </div>
          </div>
          <div class="one-quarter">
            <div class="attribute-box">
              <img src="../assets/images/apes/1.png" alt="ApeX" />
            </div>
          </div>
        </div>
        <div class="column">
          <div class="one-quarter">
            <div class="attribute-box">
              <img src="../assets/images/apes/1.png" alt="ApeX" />
            </div>
          </div>
          <div class="one-quarter">
            <div class="attribute-box">
              <img src="../assets/images/apes/1.png" alt="ApeX" />
            </div>
          </div>
          <div class="one-quarter">
            <div class="attribute-box">
              <img src="../assets/images/apes/1.png" alt="ApeX" />
            </div>
          </div>
        </div>
        <div class="column">
          <div class="two-quarter">
            <button class="green-button" @click="downloadCanvas()">Download</button>
          </div>
        </div>
      </div>
    </div>
    <!-- END Mobile Versions -->
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import IconPlay from '../assets/svgs/icons/IconPlay.vue';
  import IconRestart from '../assets/svgs/icons/IconRestart.vue';

  const apeId = ref(null);

  function searchApe() {
    console.log('Search Ape', this.apeId);
  }
  function resetApe() {
    console.log("Ape ID:", this.apeId);
    this.apeId = null;
  }
  function downloadCanvas() {
    console.log('Download Image');
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/mixins.scss';

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 50rem;
    color: $black;
    // background: $grey-20;
    // background-image: url("../assets/images/large_blue_graphic.png"),
    // url("../assets/images/GreySwirlBG.png");
    // background-size: auto, contain;
    // background-repeat: no-repeat, no-repeat;
    // background-position: top 10em left -3em, right 0 top 0;
    padding: 0;

    @include breakpoint($break-sm) {
      height: auto;
      flex-direction: column;
      // background-image: url("../assets/images/large_blue_graphic.png");
      // background-size: auto;
      // background-repeat: no-repeat;
      // background-position: top 5em left;
      // padding: 32px 30px 55px 30px;
      padding: 0;
    }
  }

  .tailor-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 10px;
    border-radius: 12px;
    background-color: $apex-dark-grey;
    // border: 0.5px solid $apex-green;

    @include breakpoint($break-ssm) {
      width: 100%;
      padding: 4px;
      flex-direction: column;
    }
  }

  .column {
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    margin: 0;

    @include breakpoint($break-sm) {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-content: flex-start;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }

  .main-column {
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    margin: 0;
  }

  .one-quarter {
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 20px;

    @include breakpoint($break-sm) {
      width: 100%;
      padding: 10px 0;
    }
  }

  .two-quarter {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 20px;

    @include breakpoint($break-sm) {
      width: 100%;
      padding: 10px;
    }

    .image-box {
      display: block;
      width: 400px;
      height: 400px;
      background: #f4f4f4;
      border-radius: 12px;
      margin: 0;
      padding: 0;
      transition: all 0.5s linear;
      overflow: hidden;

      img {
        width: 400px;
        height: 400px;
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
    }
  }

  .attribute-box {
    width: 160px;
    height: 160px;
    background: #f4f4f4;
    // border: 1px solid #f4f4f4;
    border-radius: 12px;
    margin: 0;
    padding: 0;
    transition: all 0.5s linear;
    overflow: hidden;
    cursor: pointer;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }

    @include breakpoint($break-md) {
      width: 120px;
      height: 120px;
    }

    @include breakpoint($break-sm) {
      width: 105px;
      height: 105px;
    }

    @include breakpoint($break-ssm) {
      width: 90px;
      height: 90px;
    }
  }

  .input-row {
    width: 100%;
    display: flex;
    flex-direction: roww;
    justify-content: center;
    align-content: center;
    align-items: center;

    input {
      width: 100%;
      max-width: 300px;
      height: 48px;
      color: $black;
      background-color: #fdfdfd;
      border: 1px solid $apex-dark-grey;
      border-radius: 8px;
      letter-spacing: 1px;
      font-size: 16px;
      line-height: 22px;
      margin: 0 8px;
      padding: 6px 10px;
      text-align: left;

      @include breakpoint($break-sm) {
        margin-bottom: 0;
      }
    }

    input::placeholder {
      color: $black;
      letter-spacing: 1px;
    }

    input:read-only {
      color: #1a1a1a;
      border: 1px dashed #e0e0e0;
      letter-spacing: 1px;
      cursor: not-allowed;
    }

    input:focus {
      border: 1px solid $apex-green;
      outline: none;
    }
  }
</style>
