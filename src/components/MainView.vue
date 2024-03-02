<template>
  <main id="apewear" class="container">
    <div class="tailor-container">
      <div class="column">
        <div class="one-quarter">
          <div class="attribute-box">
            <img src="../assets/images/apes/1.png" alt="ApeX" width="150px" />
          </div>
        </div>
        <div class="one-quarter">
          <div class="attribute-box">
            <img src="../assets/images/apes/1.png" alt="ApeX" width="150px" />
          </div>
        </div>
        <div class="one-quarter">
          <div class="attribute-box">
            <img src="../assets/images/apes/1.png" alt="ApeX" width="150px" />
          </div>
        </div>
      </div>
      <div class="column">
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
            <img src="../assets/images/apes/1.png" alt="ApeX" width="400" />          
          </div>
        </div>
        <div class="two-quarter">
          <button
            class="download-button"
            @click="download()"
          >
            Download
          </button>
        </div>
      </div>
      <div class="column">
        <div class="one-quarter">
          <div class="attribute-box">
            <img src="../assets/images/apes/1.png" alt="ApeX" width="150px" />
          </div>
        </div>
        <div class="one-quarter">
          <div class="attribute-box">
            <img src="../assets/images/apes/1.png" alt="ApeX" width="150px" />
          </div>
        </div>
        <div class="one-quarter">
          <div class="attribute-box">
            <img src="../assets/images/apes/1.png" alt="ApeX" width="150px" />
          </div>
        </div>
      </div>
    </div>
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
      padding: 32px 30px 55px 30px;
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

    @include breakpoint($break-sm) {
      width: 100%;
      flex-direction: column;
      padding-top: 50px;
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
    }
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

    .image-box{
      width: 400px;
      height: 400px;
      background: #f4f4f4;
      border: 2px solid #f4f4f4;
      border-radius: 12px;
      margin: 0;
      padding: 0;
      transition: all 0.5s linear;
      overflow: hidden;
    }
  }

  .attribute-box {
    width: 150px;
    height: 150px;
    background: #f4f4f4;
    border: 2px solid #f4f4f4;
    border-radius: 12px;
    margin: 0;
    padding: 0;
    transition: all 0.5s linear;
    overflow: hidden;
    cursor: pointer;
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
      height: 40px;
      color: $black;
      background-color: #fdfdfd;
      border: 1px solid $apex-dark-grey;
      border-radius: 12px;
      letter-spacing: 1px;
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 5px;
      padding: 6px 10px;
      text-align: left;
    }
  }

  .download-button {
    width: 260px;
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
    transition: all 0.2s linear;
    cursor: pointer;

    &:hover,
    &:focus
    &:focus-visible {
      color: $apex-dark-grey;
      border: 1px solid $apex-dark-grey;
    }
    @include breakpoint($break-ssm) {
      margin: 15px auto;
    }
  }
</style>
