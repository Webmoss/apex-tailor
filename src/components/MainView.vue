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
          <div class="image-box">
            <div style="width: 380px; height: 380px; overflow: auto" id="canvasStage"></div>
          </div>
        </div>
        <div class="two-quarter mobile-hidden">
          <div class="input-row">
              <button :disabled="!tailorApe.body" class="icon-button-round" @click="setGmApe()">
                GM
              </button>
              <button class="green-button" @click="downloadCanvas()">Download</button>
              <button :disabled="!tailorApe.body" class="icon-button-round" @click="setJayApe()">
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
  import Konva from "konva";

  import IconPlay from '../assets/svgs/icons/IconPlay.vue';
  import IconRestart from '../assets/svgs/icons/IconRestart.vue';
  import IconLeft from '../assets/svgs/icons/IconLeft.vue';
  import IconRight from '../assets/svgs/icons/IconRight.vue';

  import apexApe from "/apes/0.png";

  /* Init Pinia Store Values and Methods */
  const store = useStore();
  const { tailorApe } = storeToRefs(store);

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

  async function setGmApe() {
    state.jayApe = !state.jayApe;
    state.gmApe = !state.gmApe;
    await drawApe();
  }

  async function setJayApe() {
    state.gmApe = !state.gmApe;  
    state.jayApe = !state.jayApe;
    await drawApe();
  }  

  function stripSpaces(str: string) {
    return str.split(' ').join('_');
  }

  async function drawApe() {
    var stage = new Konva.Stage({
      container: "canvasStage",
      width: 380,
      height: 380
    });

    var layer = new Konva.Layer();
    stage.add(layer);

    console.log("Body",tailorApe.value.body);
    console.log("Skin", tailorApe.value.skin);

    if(tailorApe.value.body) {
      var bgBodyImage = new Image();
      bgBodyImage.src = `/body/${stripSpaces(tailorApe.value.body)}_${tailorApe.value.skin}.png`;
      bgBodyImage.onload = function () {
        var defaultApe = new Konva.Image({
          x: 0,
          y: 0,
          image: bgBodyImage,
          width: 380,
          height: 380,
        });
        layer.add(defaultApe);
      };      
    }
      
    console.log("Clothes", tailorApe.value.clothes);

    if(tailorApe.value.clothes !== 'None') {
      var clothesLayer = new Konva.Layer();
      stage.add(clothesLayer);

      var bgClothesImage = new Image();
      bgClothesImage.src = `/clothes/${stripSpaces(tailorApe.value.clothes)}.png`;
      bgClothesImage.onload = function () {
        var defaultApe = new Konva.Image({
          x: 0,
          y: 0,
          image: bgClothesImage,
          width: 380,
          height: 380,
        });
        clothesLayer.add(defaultApe);
      }; 
    }
    
    console.log("Eyes", tailorApe.value.eyes);
    if(tailorApe.value.eyes !== 'None') {
      
      var eyesLayer = new Konva.Layer();
      stage.add(eyesLayer);

      var bgEyesImage = new Image();
      bgEyesImage.src = `/eyes/${stripSpaces(tailorApe.value.eyes)}_${tailorApe.value.skin}.png`;
      bgEyesImage.onload = function () {
        var defaultApe = new Konva.Image({
          x: 0,
          y: 0,
          image: bgEyesImage,
          width: 380,
          height: 380,
        });
        eyesLayer.add(defaultApe);
      }; 
    }
    
    console.log("Glasses", tailorApe.value.glasses);
    if(tailorApe.value.glasses !== 'None') {
      var glassesLayer = new Konva.Layer();
      stage.add(glassesLayer);

      var bgGlassesImage = new Image();
      bgGlassesImage.src = `/glasses/${stripSpaces(tailorApe.value.glasses)}_${tailorApe.value.skin}.png`;
      bgGlassesImage.onload = function () {
        var defaultApe = new Konva.Image({
          x: 0,
          y: 0,
          image: bgGlassesImage,
          width: 380,
          height: 380,
        });
        glassesLayer.add(defaultApe);
      }; 
    }
    
    console.log("Hat", tailorApe.value.hat);
    if(tailorApe.value.hat !== 'None') {
      var hatLayer = new Konva.Layer();
      stage.add(hatLayer);

      var bgHatImage = new Image();
      bgHatImage.src = `/hats/${stripSpaces(tailorApe.value.hat)}.png`;
      bgHatImage.onload = function () {
        var defaultApe = new Konva.Image({
          x: 0,
          y: 0,
          image: bgHatImage,
          width: 380,
          height: 380,
        });
        hatLayer.add(defaultApe);
      };
    }

    console.log("Mouth", tailorApe.value.mouth);
    if(tailorApe.value.mouth !== 'None') {
      var mouthLayer = new Konva.Layer();
      stage.add(mouthLayer);

      var bgMouthImage = new Image();
      bgMouthImage.src = `/mouthes/${stripSpaces(tailorApe.value.mouth)}_${tailorApe.value.skin}.png`;
      bgMouthImage.onload = function () {
        var defaultApe = new Konva.Image({
          x: 0,
          y: 0,
          image: bgMouthImage,
          width: 380,
          height: 380,
        });
        mouthLayer.add(defaultApe);
      };
    }

    console.log("Piercing", tailorApe.value.piercing);
    if(tailorApe.value.piercing !== 'None') {
      var piercingLayer = new Konva.Layer();
      stage.add(piercingLayer);

      var bgPiercingImage = new Image();
      bgPiercingImage.src = `/piercings/${stripSpaces(tailorApe.value.piercing)}.png`;
      bgPiercingImage.onload = function () {
        var defaultApe = new Konva.Image({
          x: 0,
          y: 0,
          image: bgPiercingImage,
          width: 380,
          height: 380,
        });
        piercingLayer.add(defaultApe);
      };
    }

    console.log("GM", state.gmApe === true);
    if(state.gmApe === true) {
      var gmLayer = new Konva.Layer();
      stage.add(gmLayer);

      var bgGMImage = new Image();
      bgGMImage.src = `/gmSkins/${tailorApe.value.skin}-Skin/GM_${tailorApe.value.skin}_${tailorApe.value.body}.png`;
      bgGMImage.onload = function () {
        var defaultApe = new Konva.Image({
          x: 0,
          y: 0,
          image: bgGMImage,
          width: 380,
          height: 380,
        });
        gmLayer.add(defaultApe);
      };
    }

    console.log("Jay", state.jayApe === true);
    if(state.jayApe === true) {
      var jayLayer = new Konva.Layer();
      stage.add(jayLayer);

      var bgJayImage = new Image();
      bgJayImage.src = `/jays/${tailorApe.value.skin}-Skin/GM_${tailorApe.value.skin}_${tailorApe.value.body}.png`;
      bgJayImage.onload = function () {
        var defaultApe = new Konva.Image({
          x: 0,
          y: 0,
          image: bgJayImage,
          width: 380,
          height: 380,
        });
        jayLayer.add(defaultApe);
      };
    }
  }

  async function searchApe( apeId: string ) {
    
    // console.log('Search Ape', apeId);
    let ape = await fetch(`/apescriptions/${apeId}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error
            (`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .catch((error) => {
        console.error("Unable to fetch Ape data:", error)
      });
    
    // console.log('Found Ape', ape);
    // console.log('Ape Id', ape.collectionId);
    // console.log('Ape Body', ape.attributes[3].value);
    // console.log('Ape Skin', ape.attributes[7].value);

    let skin = "";
    switch(ape.attributes[7].value) {
      case "PNEII":
        skin = 'Medium';
        break;
      case "INENP":
        skin = 'Medium';
        break;
      case "NIIIN":
        skin = 'Dark';
        break;
      case "NAAPN":
        skin = 'Dark';
        break;
      case "NAAIP":
        skin = 'Light';
        break;
      case "APIPE":
        skin = 'Light';
        break;  
      case "NIPEP":
        skin = 'Dark';
        break;
      case "AENAN":
        skin = 'Medium';
        break;
      case "EANNP":
        skin = 'Dark';
        break;
      case "IEIPA":
        skin = 'Medium';
        break;
      case "PAINI":
        skin = 'Medium';
        break;
      case "IAIAA":
        skin = 'Medium';
        break;
      case "IENIA":
        skin = 'Medium';
        break;
      default:
      skin = 'Light';
    }
    // console.log('Ape Clothes', ape.attributes[6].value);
    // console.log('Ape Eyes', ape.attributes[8].value);
    // console.log('Ape Glasses', ape.attributes[9].value);
    // console.log('Ape Hat', ape.attributes[12].value);
    // console.log('Ape Mouth', ape.attributes[13].value);
    // console.log('Ape Piercing', ape.attributes[14].value);
    // console.log('Ape Image', ape.image);

    const myApe = {
      id: ape.collectionId,
      body: ape.attributes[3].value,
      skin: skin,
      clothes: ape.attributes[6].value,
      eyes: ape.attributes[8].value,
      glasses: ape.attributes[9].value,
      hat: ape.attributes[12].value,
      mouth: ape.attributes[13].value,
      piercing: ape.attributes[14].value,
      image: ape.image,
    }

    await store.setTailorApe(myApe);
    await drawApe();
  }

  async function resetApe() {
    apeId.value = null;
    await store.setTailorApe({
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
    await setDefaultApe();
  }

  async function setDefaultApe() {
    var stage = new Konva.Stage({
      container: "canvasStage",
      width: 380,
      height: 380
    });

    var layer = new Konva.Layer();
    stage.add(layer);

    var imageObj = new Image();
    imageObj.onload = function () {
      var defaultApe = new Konva.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: 380,
        height: 380,
      });
      layer.add(defaultApe);
    };
    imageObj.src = apexApe;    
  }

  onMounted(async () => {
    await setDefaultApe();        
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
      width: 380px;
      height: 380px;
      background: $apex-grey;
      border-radius: 12px;
      margin: 0;
      padding: 0;
      transition: all 0.5s linear;
      overflow: hidden;
    }

    #apeTailor {
      display: block;
      max-width: 380px;
      max-height: 380px;
      margin: 0;
      padding: 0;
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
    flex-direction: row;
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
    color: $apex-grey;
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
