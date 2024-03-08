<template>
  <main id="apewear" class="container">
    <div class="tailor-container">

      <!-- Attributes Row #1 -->
      <div class="column mobile-hidden">
        <div class="one-quarter">
          <div class="attribute-box">
            <button class="icon-button-left" @click="previousApeAttr('clothes')">
              <IconLeft />
            </button>
            <img src="../assets/images/apes/1.png" alt="ApeX" @click="nextApeAttr('clothes')" />
            <button class="icon-button-right" @click="nextApeAttr('clothes')">
              <IconRight />
            </button>
          </div>
        </div>
        <div class="one-quarter">
          <div class="attribute-box">
            <button class="icon-button-left" @click="previousApeAttr('eyes')">
              <IconLeft />
            </button>
            <img src="../assets/images/apes/1.png" alt="ApeX" @click="nextApeAttr('eyes')" />
            <button class="icon-button-right" @click="nextApeAttr('eyes')">
              <IconRight />
            </button>
          </div>
        </div>
        <div class="one-quarter">
          <div class="attribute-box">
            <button class="icon-button-left" @click="previousApeAttr('glasses')">
              <IconLeft />
            </button>
            <img src="../assets/images/apes/1.png" alt="ApeX" @click="nextApeAttr('glasses')" />
            <button class="icon-button-right" @click="nextApeAttr('glasses')">
              <IconRight />
            </button>
          </div>
        </div>
      </div>
      <!-- END Attributes Row #1 -->

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

      <!-- Attributes Row #2 -->
      <div class="column mobile-hidden">
        <div class="one-quarter">
          <div class="attribute-box">
            <button class="icon-button-left" @click="previousApeAttr('hat')">
              <IconLeft />
            </button>
            <img src="../assets/images/apes/1.png" alt="ApeX" @click="nextApeAttr('hat')" />
            <button class="icon-button-right" @click="nextApeAttr('hat')">
              <IconRight />
            </button>
          </div>
        </div>
        <div class="one-quarter">
          <div class="attribute-box">
            <button class="icon-button-left" @click="previousApeAttr('mouth')">
              <IconLeft />
            </button>
            <img src="../assets/images/apes/1.png" alt="ApeX" @click="nextApeAttr('mouth')" />
            <button class="icon-button-right" @click="nextApeAttr('mouth')">
              <IconRight />
            </button>
          </div>
        </div>
        <div class="one-quarter">
          <div class="attribute-box">
            <button class="icon-button-left" @click="previousApeAttr('piercing')">
              <IconLeft />
            </button>
            <img src="../assets/images/apes/1.png" alt="ApeX" @click="nextApeAttr('piercing')" />
            <button class="icon-button-right" @click="nextApeAttr('piercing')">
              <IconRight />
            </button>
          </div>
        </div>
      </div>
      <!-- END Attributes Row #1 -->

      <!-- Mobile Versions -->
      <div class="mobile-show">

        <!-- Attributes Row #1 -->
        <div class="column">
          <div class="one-quarter">
            <div class="attribute-box">
              <button class="icon-button-left" @click="previousApeAttr('clothes')">
                <IconLeft />
              </button>
              <img src="../assets/images/apes/1.png" alt="ApeX" @click="nextApeAttr('clothes')" />
              <button class="icon-button-right" @click="nextApeAttr('clothes')">
                <IconRight />
              </button>
            </div>
          </div>
          <div class="one-quarter">
            <div class="attribute-box">
              <button class="icon-button-left" @click="previousApeAttr('eyes')">
                <IconLeft />
              </button>
              <img src="../assets/images/apes/1.png" alt="ApeX" @click="nextApeAttr('eyes')" />
              <button class="icon-button-right" @click="nextApeAttr('eyes')">
                <IconRight />
              </button>
            </div>
          </div>
          <div class="one-quarter">
            <div class="attribute-box">
              <button class="icon-button-left" @click="previousApeAttr('glasses')">
                <IconLeft />
              </button>
              <img src="../assets/images/apes/1.png" alt="ApeX" @click="nextApeAttr('glasses')" />
              <button class="icon-button-right" @click="nextApeAttr('glasses')">
                <IconRight />
              </button>
            </div>
          </div>
        </div>
        <!-- END Attributes Row #1 -->
        <!-- Attributes Row #2 -->
        <div class="column">
          <div class="one-quarter">
            <div class="attribute-box">
              <button class="icon-button-left" @click="previousApeAttr('hat')">
                <IconLeft />
              </button>
              <img src="../assets/images/apes/1.png" alt="ApeX" @click="nextApeAttr('hat')" />
              <button class="icon-button-right" @click="nextApeAttr('hat')">
                <IconRight />
              </button>
            </div>
          </div>
          <div class="one-quarter">
            <div class="attribute-box">
              <button class="icon-button-left" @click="previousApeAttr('mouth')">
                <IconLeft />
              </button>
              <img src="../assets/images/apes/1.png" alt="ApeX" @click="nextApeAttr('mouth')" />
              <button class="icon-button-right" @click="nextApeAttr('mouth')">
                <IconRight />
              </button>
            </div>
          </div>
          <div class="one-quarter">
            <div class="attribute-box">
              <button class="icon-button-left" @click="previousApeAttr('piercing')">
                <IconLeft />
              </button>
              <img src="../assets/images/apes/1.png" alt="ApeX" @click="nextApeAttr('piercing')" />
              <button class="icon-button-right" @click="nextApeAttr('piercing')">
                <IconRight />
              </button>
            </div>
          </div>
        </div>
        <!-- END Attributes Row #2 -->

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
  import IconLeft from '../assets/svgs/icons/IconLeft.vue';
  import IconRight from '../assets/svgs/icons/IconRight.vue';

  const apeId = ref(null);

  function searchApe() {
    console.log('Search Ape', this.apeId);
  }

  function resetApe() {
    console.log("Ape ID:", this.apeId);
    this.apeId = null;
  }
  
  function previousApeAttr( attr: string ) {
    console.log("Previous Attr:", attr);
  }

  function nextApeAttr( attr: string ) {
    console.log("Next Attr:", attr);
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

    @include breakpoint($break-sm) {
      width: 100%;
      padding: 4px;
      border-radius: 0;
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
      padding: 10px;
    }
    @include breakpoint($break-ssm) {
      width: 100%;
      padding: 5px;
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
    position: relative;
    width: 160px;
    height: 160px;
    background: #f4f4f4;
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

    .icon-button-left {
      position: absolute;
      top: 0;
      left: 0;
      color: $white;
      background-color: transparent;
      border: none;
      width: 20px;
      height: inherit;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
      transition: transform 600ms cubic-bezier(0.23, 1, 0.32, 1);
      cursor: pointer;

      &:hover {
        color: $apex-green;
      }
      &:focus,
      &:focus-visible {
        outline: none;
      }
    }

    .icon-button-right {
      position: absolute;
      top: 0;
      right: 0;
      color: $white;
      background-color: transparent;
      border: none;
      width: 20px;
      height: inherit;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
      transition: transform 600ms cubic-bezier(0.23, 1, 0.32, 1);
      cursor: pointer;

      &:hover {
        color: $apex-green;
      }
      &:focus,
      &:focus-visible {
        outline: none;
      }
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
