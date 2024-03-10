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
            <img src="/apes/1.png" alt="ApeX" @click="nextApeAttr('clothes')" />
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
            <img src="/apes/1.png" alt="ApeX" @click="nextApeAttr('eyes')" />
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
            <img src="/apes/1.png" alt="ApeX" @click="nextApeAttr('glasses')" />
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
            <input 
              v-model="apeId" 
              name="apeId" 
              type="text" 
              placeholder="Ape ID #" 
              @keyup.enter="searchApe(apeId)"
            />
            <button class="icon-button" @click="searchApe(apeId)" :disabled="!apeId">
              <IconPlay />
            </button>
          </div>
        </div>
        <div class="two-quarter">
          <!-- <div v-if="tailorApe.image" class="image-box">
            <img :src="`./apes/${tailorApe.image}`" alt="ApeX" />
            <img v-if="gmApe" class="gm-image-overlay" :src="`./skins/${tailorApe.skin}-Skin/GM_${tailorApe.skin}_${tailorApe.body}.png`" alt="ApeX" />
          </div>
          <div v-else class="image-box">
            <img src="/apes/0.png" alt="ApeX" />
          </div> -->
          <canvas id="apeTailor" ref="canvasBox" />
        </div>
        <div class="two-quarter mobile-hidden">
          <div class="input-row">
              <button :disabled="!tailorApe.image" class="icon-button-round" @click="setGmApe()">
                GM
              </button>
              <button class="green-button" @click="downloadCanvas()">Download</button>
              <button :disabled="!tailorApe.image" class="icon-button-round" @click="setJayApe()">
                J
              </button>
          </div>
        </div>
      </div>

      <!-- Attributes Row #2 -->
      <div class="column mobile-hidden">
        <div class="one-quarter">
          <div class="attribute-box">
            <button class="icon-button-left" @click="previousApeAttr('hat')">
              <IconLeft />
            </button>
            <img src="/apes/1.png" alt="ApeX" @click="nextApeAttr('hat')" />
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
            <img src="/apes/1.png" alt="ApeX" @click="nextApeAttr('mouth')" />
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
            <img src="/apes/1.png" alt="ApeX" @click="nextApeAttr('piercing')" />
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
              <img src="/apes/1.png" alt="ApeX" @click="nextApeAttr('clothes')" />
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
              <img src="/apes/1.png" alt="ApeX" @click="nextApeAttr('eyes')" />
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
              <img src="/apes/1.png" alt="ApeX" @click="nextApeAttr('glasses')" />
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
              <img src="/apes/1.png" alt="ApeX" @click="nextApeAttr('hat')" />
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
              <img src="/apes/1.png" alt="ApeX" @click="nextApeAttr('mouth')" />
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
              <img src="/apes/1.png" alt="ApeX" @click="nextApeAttr('piercing')" />
              <button class="icon-button-right" @click="nextApeAttr('piercing')">
                <IconRight />
              </button>
            </div>
          </div>
        </div>
        <!-- END Attributes Row #2 -->

        <div class="column">
          <div class="two-quarter">
            <div class="input-row">
              <button :disabled="!tailorApe.image" class="icon-button-round" @click="setGmApe()">
                GM
              </button>
              <button class="green-button" @click="downloadCanvas()">Download</button>
              <button :disabled="!tailorApe.image" class="icon-button-round" @click="setJayApe()">
                J
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- END Mobile Versions -->
  </main>
</template>

<script setup lang="ts">
  import { ref, reactive, onMounted } from "vue";
  import { storeToRefs } from "pinia";
  import { useStore } from "@/stores";

  import IconPlay from '../assets/svgs/icons/IconPlay.vue';
  import IconRestart from '../assets/svgs/icons/IconRestart.vue';
  import IconLeft from '../assets/svgs/icons/IconLeft.vue';
  import IconRight from '../assets/svgs/icons/IconRight.vue';

  import apexApe from "/apes/0.png";

  import data from '../data/ape-metadata.json';

  /* Init Pinia Store Values and Methods */
  const store = useStore();
  const { apes, tailorApe } = storeToRefs(store);

  const canvasBox = ref();
  const apeId = ref();
  
  const state = reactive({
    gmApe: false,
    jayApe: false
  });

  function previousApeAttr( attr: string ) {
    console.log("Previous Attr:", attr);
  }

  function nextApeAttr( attr: string ) {
    console.log("Next Attr:", attr);
  }
  
  function downloadCanvas() {
    
    const canvasElement = document.getElementById('apeTailor') as HTMLCanvasElement | null;

    if(canvasElement != null) {
      let MIME_TYPE = "image/png";
      let imgURL = canvasElement.toDataURL(MIME_TYPE, 1.0) 
      
      let dlLink = document.createElement('a');
      dlLink.download = `ApeWear-Ape${tailorApe.value.id}`;
      dlLink.href = imgURL;
      dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

      document.body.appendChild(dlLink);
      dlLink.click();
      document.body.removeChild(dlLink);
    }
  }

  function setGmApe() {
    console.log("jayApe.value Before", state.jayApe);
    console.log("gmApe.value Before", state.gmApe);
    
    state.jayApe = !state.jayApe;
    state.gmApe = !state.gmApe;
    
    console.log("jayApe.value Before", state.jayApe);
    console.log("gmApe.value After", state.gmApe);

    drawApe(`/apes/${tailorApe.value.image}`, 5);
  }

  function setJayApe() {
    console.log("gmApe.value Before", state.gmApe);
    console.log("jayApe.value Before", state.jayApe);  
    
    state.gmApe = !state.gmApe;  
    state.jayApe = !state.jayApe;    
    
    console.log("gmApe.value After", state.gmApe);
    console.log("jayApe.value After", state.jayApe);
    
    drawApe(`/apes/${tailorApe.value.image}`, 5);
  }  

  function drawApe( src: string, scale: number ) {

    const displayWidth = 400;
    const displayHeight = 400;
    const cvn = canvasBox.value;

    cvn.fillStyle = "#2e2e2e";
    cvn.style.width = displayWidth + 'px';
    cvn.style.height = displayHeight + 'px';
    cvn.width = displayWidth * scale;
    cvn.height = displayHeight * scale;

    let ctx = cvn.getContext("2d");  
    let bg = new Image();
    // let bgBody = new Image();
    // let bgClothes = new Image();
    // let bgEyes = new Image();
    // let bgGlasses = new Image();
    // let bgHat = new Image();
    // let bgMouth = new Image();
    // let bgPiercing = new Image();
    let bgGM = new Image();
    // let bgJay = new Image();

    bg.src = src;
    // bgBody.src = tailorApe.value.body ? `./body/${tailorApe.value.skin}-Skin/GM_${tailorApe.value.skin}_${tailorApe.value.body}.png`: '';
    // bgClothes.src = tailorApe.value.clothes ? `./clothes/${tailorApe.value.skin}-Skin/GM_${tailorApe.value.skin}_${tailorApe.value.clothes}.png`: '';
    // bgEyes.src = tailorApe.value.eyes ? `./eyes/${tailorApe.value.skin}-Skin/GM_${tailorApe.value.skin}_${tailorApe.value.eyes}.png`: '';
    // bgGlasses.src = tailorApe.value.glasses ? `./glasses/${tailorApe.value.skin}-Skin/GM_${tailorApe.value.skin}_${tailorApe.value.glasses}.png`: '';
    // bgHat.src = tailorApe.value.hat ? `./hats/${tailorApe.value.skin}-Skin/GM_${tailorApe.value.skin}_${tailorApe.value.hat}.png`: '';
    // bgMouth.src = tailorApe.value.mouth ? `./mouthes/${tailorApe.value.skin}-Skin/GM_${tailorApe.value.skin}_${tailorApe.value.mouth}.png`: '';
    // bgPiercing.src = tailorApe.value.piercing ? `./piercings/${tailorApe.value.skin}-Skin/GM_${tailorApe.value.skin}_${tailorApe.value.piercing}.png`: '';
    bgGM.src = state.gmApe === true ? `./gmSkins/${tailorApe.value.skin}-Skin/GM_${tailorApe.value.skin}_${tailorApe.value.body}.png`: '';
    // bgJay.src = state.jayApe === true ? `./jays/${tailorApe.value.skin}-Skin/GM_${tailorApe.value.skin}_${tailorApe.value.body}.png`: '';

    bg.onload = function() {
      ctx.drawImage(bg, 0 , 0);
      // ctx.drawImage(bgBody, 0 , 0);
      // ctx.drawImage(bgClothes, 0 , 0);
      // ctx.drawImage(bgEyes, 0 , 0);
      // ctx.drawImage(bgGlasses, 0 , 0);
      // ctx.drawImage(bgHat, 0 , 0);
      // ctx.drawImage(bgMouth, 0 , 0);
      // ctx.drawImage(bgPiercing, 0 , 0);
      ctx.drawImage(bgGM, 0 , 0);
      // ctx.drawImage(bgJay, 0 , 0);
    }
  }

  async function searchApe( apeId: string ) {
    console.log('Search Ape', apeId);

    let ape = apes.value.filter(a => a.id === apeId)

    console.log('Found Ape', ape[0]);
    console.log('Ape Id', ape[0].id);
    console.log('Ape Body', ape[0].body);
    console.log('Ape Skin', ape[0].skin);
    console.log('Ape Clothes', ape[0].clothes);
    console.log('Ape Eyes', ape[0].eyes);
    console.log('Ape Glasses', ape[0].glasses);
    console.log('Ape Hat', ape[0].hat);
    console.log('Ape Mouth', ape[0].mouth);
    console.log('Ape Piercing', ape[0].piercing);
    console.log('Ape Image', ape[0].image);

    await store.setTailorApe(ape[0]);
    drawApe(`/apes/${tailorApe.value.image}`, 5);
  }

  function resetApe() {
    apeId.value = null;
    store.setTailorApe({
      id: "",
      body: "",
      skin: "",
      clothes: "",
      eyes: "",
      glasses: "",
      hat: "",
      mouth: "",
      piercing: "",
      image: "",
    });
    setDefaultApe();
  }

  function setDefaultApe() {
    drawApe(apexApe, 1.5);
  }

  /* Get Apes JSON Data */
  async function fetchApes() {
    try {
      await store.setApes(data.apes);
    } catch (error) {
      console.log("Error :", error);
    }
  }

  onMounted(async () => {
    await fetchApes();
    setDefaultApe();
  });
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
      margin: 0;
      padding: 0 0 20px 0;
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
      padding: 10px 0 0 0;
    }

    .image-box {
      position: relative;
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

    #apeTailor {
      background: #f4f4f4;
      border-radius: 12px;
      margin: 0;
      padding: 0;
      transition: all 0.5s linear;
      overflow: hidden;
    }

    .gm-image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999999;
      display: block;
      // width: 400px;
      // height: 400px;
      // background: #f4f4f4;
      border-radius: 12px;
      margin: 0;
      padding: 0;
      // transition: all 0.5s linear;
      // overflow: hidden;

      // img {
      //   width: 400px;
      //   height: 400px;
      // }

      // @include breakpoint($break-sm) {
      //   width: 100%;
      //   height: auto;

      //   img {
      //     display: block;
      //     width: 100%;
      //     height: auto;
      //   }
      // }
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
      transition: background-color 0.2s cubic-bezier(0.05, 0, 0.2, 1);
      cursor: pointer;

      &:hover {
        color: $grey-30;
        background-color: rgba(20, 20, 20, 0.5); 
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
      transition: background-color 0.2s cubic-bezier(0.05, 0, 0.2, 1);
      cursor: pointer;

      &:hover {
        color: $grey-30;
        background-color: rgba(20, 20, 20, 0.5); 
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

  .icon-button-round {
    color: $white;
    background-color: $apex-green;
    border: none;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    transition: transform 600ms cubic-bezier(0.23, 1, 0.32, 1);
    margin: 0 15px;
    cursor: pointer;

    &:hover {
      color: $black;
    }
    &:focus,
    &:focus-visible {
      outline: none;
    }
  }

  .icon-button-round:disabled {
    background: #c6c6c6;
    color: $white;
    cursor: not-allowed;
  }
</style>
