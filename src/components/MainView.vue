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
            <input
              v-model="apeId"
              name="apeId"
              type="text"
              placeholder="Ape ID #"
            />
          </div>
        </div>
        <div class="two-quarter">
          <div class="image-box">
            <img src="../assets/images/apes/0.png" alt="ApeX" />          
          </div>
        </div>
        <div class="two-quarter mobile-hidden">
          <button
            class="green-button"
            @click="download()"
          >
            Download
          </button>
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
            <button
                class="green-button"
                @click="download()"
              >
                Download
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- END Mobile Versions -->

  </main>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const apeId = ref(null);

  function download() {
    console.log("Download Image");
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";
  @import "@/assets/styles/mixins.scss";

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
      padding: 0
    }
  }

  .tailor-container {
    background-color: $apex-grey;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 10px;
    border-radius: 12px;

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
      padding: 10px;
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
    border: 2px solid #f4f4f4;
    border-radius: 12px;
    margin: 0;
    padding: 0;
    transition: all 0.5s linear;
    overflow: hidden;
    cursor: pointer;

    img {
      display: block;
      width: 160px;
      height: 160px;
    }

    @include breakpoint($break-sm) {
      width: 84px;
      height: 84px;
      img {
        display: block;
        width: 84px;
        height: 84px;
      }
    }

    @include breakpoint($break-ssm) {
      width: 70px;
      height: 70px;
      img {
        display: block;
        width: 70px;
        height: 70px;
      }
    }
  }

  .input-row {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;

    input {
      width: 100%;
      max-width: 300px;
      height: 50px;
      color: $black;
      background-color: #fdfdfd;
      border: 1px solid $apex-dark-grey;
      border-radius: 8px;
      letter-spacing: 1px;
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 5px;
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
