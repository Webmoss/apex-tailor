<template>
  <main id="apewear" class="container">
    <div class="tailor-container">
      <!-- Attributes Row #1 -->
      <Transition name="fade-left">
        <div v-if="tailorApe.body" class="column mobile-hidden">
          <div class="one-quarter">
            <div v-if="tailorApe.body && tailorApe.hat === 'None'" class="attribute-box">
              <button
                class="icon-button-left"
                @click="previousApeAttr('hats', stripSpaces(apeAttributes.hat))"
              >
                <IconLeft />
              </button>
              <img
                :src="`/hats/${stripSpaces(apeAttributes.hat)}.png`"
                alt="ApeX"
                @click="nextApeAttr('hats', stripSpaces(apeAttributes.hat))"
              />
              <button
                class="icon-button-right"
                @click="nextApeAttr('hats', stripSpaces(apeAttributes.hat))"
              >
                <IconRight />
              </button>
            </div>
            <div
              v-else-if="tailorApe.body && tailorApe.hat !== 'None'"
              class="attribute-box"
            >
              <button
                class="icon-button-left"
                @click="previousApeAttr('hats', stripSpaces(tailorApe.hat))"
              >
                <IconLeft />
              </button>
              <img
                v-if="tailorApe.body === 'Zombie'"
                :src="`/hats/${tailorApe.hat}_Zombie.png`"
                alt="ApeX"
                @click="nextApeAttr('hats', stripSpaces(tailorApe.hat))"
              />
              <img
                v-else-if="tailorApe.body === 'Robot' && tailorApe.hat === 'MFPURR_Charcoal' || tailorApe.hat === 'MFPURR_Cream'"
                :src="`/hats/${stripSpaces(tailorApe.hat)}_Robot.png`"
                alt="ApeX"
                @click="nextApeAttr('hats', stripSpaces(tailorApe.hat))"
              />
              <img
                v-else
                :src="`/hats/${stripSpaces(tailorApe.hat)}.png`"
                alt="ApeX"
                @click="nextApeAttr('hats', stripSpaces(tailorApe.hat))"
              />
              <button class="icon-button-right" @click="nextApeAttr('hats', stripSpaces(tailorApe.hat))">
                <IconRight />
              </button>
            </div>
            <div v-else class="attribute-box">
              <img src="/bgs/Green_Stage.png" alt="ApeX" />
            </div>
          </div>

          <div class="one-quarter">
            <div
              v-if="tailorApe.body && tailorApe.glasses === 'None'"
              class="attribute-box"
            >
              <button
                class="icon-button-left"
                @click="previousApeAttr('glasses', stripSpaces(apeAttributes.glasses))"
              >
                <IconLeft />
              </button>
              <img
                :src="`/glasses/${stripSpaces(apeAttributes.glasses)}_${apeAttributes.skin}.png`"
                alt="ApeX"
                @click="nextApeAttr('glasses', stripSpaces(apeAttributes.glasses))"
              />
              <button
                class="icon-button-right"
                @click="nextApeAttr('glasses', stripSpaces(apeAttributes.glasses))"
              >
                <IconRight />
              </button>
            </div>
            <div
              v-else-if="tailorApe.body && tailorApe.glasses !== 'None'"
              class="attribute-box"
            >
              <button
                class="icon-button-left"
                @click="previousApeAttr('glasses', stripSpaces(tailorApe.glasses))"
              >
                <IconLeft />
              </button>
              <img
                :src="`/glasses/${stripSpaces(tailorApe.glasses)}_${tailorApe.skin}.png`"
                alt="ApeX"
                @click="nextApeAttr('glasses', stripSpaces(tailorApe.glasses))"
              />
              <button
                class="icon-button-right"
                @click="nextApeAttr('glasses', stripSpaces(tailorApe.glasses))"
              >
                <IconRight />
              </button>
            </div>
            <div v-else class="attribute-box">
              <img src="/bgs/Green_Stage.png" alt="ApeX" />
            </div>
          </div>

          <div class="one-quarter">
            <div
              v-if="tailorApe.body && tailorApe.piercing === 'None'"
              class="attribute-box"
            >
              <button
                class="icon-button-left"
                @click="previousApeAttr('piercings', stripSpaces(apeAttributes.piercing))"
              >
                <IconLeft />
              </button>
              <img
                :src="`/piercings/${stripSpaces(apeAttributes.piercing)}.png`"
                alt="ApeX"
                @click="nextApeAttr('piercings', stripSpaces(apeAttributes.piercing))"
              />
              <button
                class="icon-button-right"
                @click="nextApeAttr('piercings', stripSpaces(apeAttributes.piercing))"
              >
                <IconRight />
              </button>
            </div>
            <div
              v-else-if="tailorApe.body && tailorApe.piercing !== 'None'"
              class="attribute-box"
            >
              <button
                class="icon-button-left"
                @click="previousApeAttr('piercings', stripSpaces(tailorApe.piercing))"
              >
                <IconLeft />
              </button>
              <img
                :src="`/piercings/${stripSpaces(tailorApe.piercing)}.png`"
                alt="ApeX"
                @click="nextApeAttr('piercings', stripSpaces(tailorApe.piercing))"
              />
              <button
                class="icon-button-right"
                @click="nextApeAttr('piercings', stripSpaces(tailorApe.piercing))"
              >
                <IconRight />
              </button>
            </div>
            <div v-else class="attribute-box">
              <img src="/bgs/Green_Stage.png" alt="ApeX" />
            </div>
          </div>
        </div>
      </Transition>
      <!-- END Attributes Row #1 -->

      <div class="main-column">
        <div class="two-quarter">
          <div class="input-row">
            <button class="icon-button" @click="resetApe()" :disabled="!apeId">
              <IconRestart />
            </button>
            <input
              v-model="apeId"
              name="apeId"
              type="text"
              placeholder="Ape #000"
              @keyup.enter="searchApe(apeId)"
            />
            <button class="icon-button" @click="searchApe(apeId)" :disabled="!apeId">
              <IconPlay />
            </button>
          </div>
        </div>
        <div class="two-quarter">
          <div v-if="!loading" class="image-box">
            <button
              v-if="tailorApe.body && tailorApe.image !== ''"
              class="icon-button-left"
              @click="previousApeAttr('bgs', stripSpaces(tailorApe.image))"
            >
              <IconLeft />
            </button>
            <div
              style="width: 380px; height: 380px;"
              id="apeTailor"
            ></div>
            <button
              v-if="tailorApe.body && tailorApe.image !== ''"
              class="icon-button-right"
              @click="nextApeAttr('bgs', stripSpaces(tailorApe.image))"
            >
              <IconRight />
            </button>
          </div>
          <div v-else class="loading-box">
            <div class="loading-msg">Loading...</div>
          </div>
        </div>
        <div class="two-quarter mobile-hidden">
          <div class="input-row">
            <button
              :disabled="!tailorApe.body"
              class="green-button"
              @click="drawApe(true)"
            >
              Download
            </button>
            <button
              :disabled="!tailorApe.body"
              class="icon-button-round"
              @click="setGmApe()"
            >
              GM
            </button>
            <!-- <button :disabled="!tailorApe.body" class="icon-button-round" @click="setJayApe()">
                J
              </button> -->
          </div>
        </div>
      </div>

      <!-- Attributes Column Right  -->
      <Transition name="fade-right">
        <div v-if="tailorApe.body" class="column mobile-hidden">
          <div class="one-quarter">
            <div v-if="tailorApe.body && tailorApe.eyes === 'None'" class="attribute-box">
              <button
                class="icon-button-left"
                @click="previousApeAttr('eyes', stripSpaces(apeAttributes.eyes))"
              >
                <IconLeft />
              </button>
              <img
                :src="`/eyes/${stripSpaces(apeAttributes.eyes)}_${apeAttributes.skin}.png`"
                alt="ApeX"
                @click="nextApeAttr('eyes', stripSpaces(apeAttributes.eyes))"
              />
              <button
                class="icon-button-right"
                @click="nextApeAttr('eyes', stripSpaces(apeAttributes.eyes))"
              >
                <IconRight />
              </button>
            </div>
            <div
              v-else-if="tailorApe.body && tailorApe.eyes !== 'None'"
              class="attribute-box"
            >
              <button
                class="icon-button-left"
                @click="previousApeAttr('eyes', stripSpaces(tailorApe.eyes))"
              >
                <IconLeft />
              </button>
              <img
                :src="`/eyes/${stripSpaces(tailorApe.eyes)}_${tailorApe.skin}.png`"
                alt="ApeX"
                @click="nextApeAttr('eyes', stripSpaces(tailorApe.eyes))"
              />
              <button
                class="icon-button-right"
                @click="nextApeAttr('eyes', stripSpaces(tailorApe.eyes))"
              >
                <IconRight />
              </button>
            </div>
            <div v-else class="attribute-box">
              <img src="/bgs/Green_Stage.png" alt="ApeX" />
            </div>
          </div>
          <div class="one-quarter">
            <div v-if="tailorApe.body && tailorApe.mouth === 'None'" class="attribute-box">
              <button
                class="icon-button-left"
                @click="previousApeAttr('mouthes', stripSpaces(apeAttributes.mouth))"
              >
                <IconLeft />
              </button>
              <img
                :src="`/mouthes/${stripSpaces(apeAttributes.mouth)}_${tailorApe.skin}.png`"
                alt="ApeX"
                @click="nextApeAttr('mouthes', stripSpaces(apeAttributes.mouth))"
              />
              <button
                class="icon-button-right"
                @click="nextApeAttr('mouthes', stripSpaces(apeAttributes.mouth))"
              >
                <IconRight />
              </button>
            </div>
            <div
              v-else-if="tailorApe.body && tailorApe.mouth !== 'None'"
              class="attribute-box"
            >
              <button
                class="icon-button-left"
                @click="previousApeAttr('mouthes', stripSpaces(tailorApe.mouth))"
              >
                <IconLeft />
              </button>
              <img
                :src="`/mouthes/${stripSpaces(tailorApe.mouth)}_${tailorApe.skin}.png`"
                alt="ApeX"
                @click="nextApeAttr('mouthes', stripSpaces(tailorApe.mouth))"
              />
              <button
                class="icon-button-right"
                @click="nextApeAttr('mouthes', stripSpaces(tailorApe.mouth))"
              >
                <IconRight />
              </button>
            </div>
            <div v-else class="attribute-box">
              <img src="/bgs/Green_Stage.png" alt="ApeX" />
            </div>
          </div>
          <div class="one-quarter">
            <div
              v-if="tailorApe.body && tailorApe.clothes === 'None'"
              class="attribute-box"
            >
              <button
                class="icon-button-left"
                @click="previousApeAttr('clothes', stripSpaces(apeAttributes.clothes))"
              >
                <IconLeft />
              </button>
              <img
                :src="`/clothes/${stripSpaces(apeAttributes.clothes)}.png`"
                alt="ApeX"
                @click="nextApeAttr('clothes', stripSpaces(apeAttributes.clothes))"
              />
              <button
                class="icon-button-right"
                @click="nextApeAttr('clothes', stripSpaces(apeAttributes.clothes))"
              >
                <IconRight />
              </button>
            </div>
            <div
              v-else-if="tailorApe.body && tailorApe.clothes !== 'None'"
              class="attribute-box"
            >
              <button
                class="icon-button-left"
                @click="previousApeAttr('clothes', stripSpaces(tailorApe.clothes))"
              >
                <IconLeft />
              </button>
              <img
                v-if="
                  (tailorApe.body === 'Robot' && tailorApe.clothes === 'Hoodie') ||
                  tailorApe.clothes === 'Leather_Jacket'
                "
                :src="`/clothes/${stripSpaces(tailorApe.clothes)}.png`"
                alt="ApeX"
                @click="nextApeAttr('clothes', stripSpaces(tailorApe.clothes))"
              />    
              <img
                v-else
                :src="`/clothes/${stripSpaces(tailorApe.clothes)}.png`"
                alt="ApeX"
                @click="nextApeAttr('clothes', stripSpaces(tailorApe.clothes))"
              />
              <button
                class="icon-button-right"
                @click="nextApeAttr('clothes', stripSpaces(tailorApe.clothes))"
              >
                <IconRight />
              </button>
            </div>
            <div v-else class="attribute-box">
              <img src="/bgs/Green_Stage.png" alt="ApeX" />
            </div>
          </div>
        </div>
      </Transition>
      <!-- END Attributes Column Right -->

      <!-- Mobile Versions -->
      <Transition name="fade">
        <div v-if="tailorApe.body" class="mobile-show">
          <!-- Attributes Row #1 -->
          <div class="column">
            <div class="one-quarter">
              <div v-if="tailorApe.body && tailorApe.hat === 'None'" class="attribute-box">
                <button
                  class="icon-button-left"
                  @click="previousApeAttr('hats', stripSpaces(apeAttributes.hat))"
                >
                  <IconLeft />
                </button>
                <img
                  :src="`/hats/${stripSpaces(apeAttributes.hat)}.png`"
                  alt="ApeX"
                  @click="nextApeAttr('hats', stripSpaces(apeAttributes.hat))"
                />
                <button
                  class="icon-button-right"
                  @click="nextApeAttr('hats', stripSpaces(apeAttributes.hat))"
                >
                  <IconRight />
                </button>
              </div>
              <div
                v-else-if="tailorApe.body && tailorApe.hat !== 'None'"
                class="attribute-box"
              >
                <button
                  class="icon-button-left"
                  @click="previousApeAttr('hats', stripSpaces(tailorApe.hat))"
                >
                  <IconLeft />
                </button>
                <img
                  v-if="tailorApe.body === 'Zombie'"
                  :src="`/hats/${stripSpaces(tailorApe.hat)}_Zombie.png`"
                  alt="ApeX"
                  @click="nextApeAttr('hats', stripSpaces(tailorApe.hat))"
                />
                <img
                  v-else-if="tailorApe.body === 'Robot' && stripSpaces(tailorApe.hat) === 'MFPURR_Charcoal' || stripSpaces(tailorApe.hat) === 'MFPURR_Cream'"
                  :src="`/hats/${stripSpaces(tailorApe.hat)}_Robot.png`"
                  alt="ApeX"
                  @click="nextApeAttr('hats', stripSpaces(tailorApe.hat))"
                />
                <img
                  v-else
                  :src="`/hats/${stripSpaces(tailorApe.hat)}.png`"
                  alt="ApeX"
                  @click="nextApeAttr('hats', stripSpaces(tailorApe.hat))"
                />
                <button
                  class="icon-button-right"
                  @click="nextApeAttr('hats', stripSpaces(tailorApe.hat))"
                >
                  <IconRight />
                </button>
              </div>
              <div v-else class="attribute-box">
                <img src="/bgs/Green_Stage.png" alt="ApeX" />
              </div>
            </div>
            <div class="one-quarter">
              <div
                v-if="tailorApe.body && tailorApe.glasses === 'None'"
                class="attribute-box"
              >
                <button
                  class="icon-button-left"
                  @click="previousApeAttr('glasses', stripSpaces(apeAttributes.glasses))"
                >
                  <IconLeft />
                </button>
                <img
                  :src="`/glasses/${stripSpaces(apeAttributes.glasses)}_${apeAttributes.skin}.png`"
                  alt="ApeX"
                  @click="nextApeAttr('glasses', stripSpaces(apeAttributes.glasses))"
                />
                <button
                  class="icon-button-right"
                  @click="nextApeAttr('glasses', stripSpaces(apeAttributes.glasses))"
                >
                  <IconRight />
                </button>
              </div>
              <div
                v-else-if="tailorApe.body && tailorApe.glasses !== 'None'"
                class="attribute-box"
              >
                <button
                  class="icon-button-left"
                  @click="previousApeAttr('glasses', stripSpaces(tailorApe.glasses))"
                >
                  <IconLeft />
                </button>
                <img
                  :src="`/glasses/${stripSpaces(tailorApe.glasses)}_${tailorApe.skin}.png`"
                  alt="ApeX"
                  @click="nextApeAttr('glasses', stripSpaces(tailorApe.glasses))"
                />
                <button
                  class="icon-button-right"
                  @click="nextApeAttr('glasses', stripSpaces(tailorApe.glasses))"
                >
                  <IconRight />
                </button>
              </div>
              <div v-else class="attribute-box">
                <img src="/bgs/Green_Stage.png" alt="ApeX" />
              </div>
            </div>
            <div class="one-quarter">
              <div
                v-if="tailorApe.body && tailorApe.piercing === 'None'"
                class="attribute-box"
              >
                <button
                  class="icon-button-left"
                  @click="previousApeAttr('piercings', stripSpaces(apeAttributes.piercing))"
                >
                  <IconLeft />
                </button>
                <img
                  :src="`/piercings/${stripSpaces(apeAttributes.piercing)}.png`"
                  alt="ApeX"
                  @click="nextApeAttr('piercings', stripSpaces(apeAttributes.piercing))"
                />
                <button
                  class="icon-button-right"
                  @click="nextApeAttr('piercings', stripSpaces(apeAttributes.piercing))"
                >
                  <IconRight />
                </button>
              </div>
              <div
                v-else-if="tailorApe.body && tailorApe.piercing !== 'None'"
                class="attribute-box"
              >
                <button
                  class="icon-button-left"
                  @click="previousApeAttr('piercings', stripSpaces(tailorApe.piercing))"
                >
                  <IconLeft />
                </button>
                <img
                  :src="`/piercings/${stripSpaces(tailorApe.piercing)}.png`"
                  alt="ApeX"
                  @click="nextApeAttr('piercings', stripSpaces(tailorApe.piercing))"
                />
                <button
                  class="icon-button-right"
                  @click="nextApeAttr('piercings', stripSpaces(tailorApe.piercing))"
                >
                  <IconRight />
                </button>
              </div>
              <div v-else class="attribute-box">
                <img src="/bgs/Green_Stage.png" alt="ApeX" />
              </div>
            </div>
          </div>
          <!-- END Attributes Row #1 -->
          <!-- Attributes Row #2 -->
          <div class="column">
            <div class="one-quarter">
              <div v-if="tailorApe.body && tailorApe.eyes === 'None'" class="attribute-box">
                <button
                  class="icon-button-left"
                  @click="previousApeAttr('eyes', stripSpaces(apeAttributes.eyes))"
                >
                  <IconLeft />
                </button>
                <img
                  :src="`/eyes/${stripSpaces(apeAttributes.eyes)}_${apeAttributes.skin}.png`"
                  alt="ApeX"
                  @click="nextApeAttr('eyes', stripSpaces(apeAttributes.eyes))"
                />
                <button
                  class="icon-button-right"
                  @click="nextApeAttr('eyes', stripSpaces(apeAttributes.eyes))"
                >
                  <IconRight />
                </button>
              </div>
              <div
                v-else-if="tailorApe.body && tailorApe.eyes !== 'None'"
                class="attribute-box"
              >
                <button
                  class="icon-button-left"
                  @click="previousApeAttr('eyes', stripSpaces(tailorApe.eyes))"
                >
                  <IconLeft />
                </button>
                <img
                  :src="`/eyes/${stripSpaces(tailorApe.eyes)}_${tailorApe.skin}.png`"
                  alt="ApeX"
                  @click="nextApeAttr('eyes', stripSpaces(tailorApe.eyes))"
                />
                <button
                  class="icon-button-right"
                  @click="nextApeAttr('eyes', stripSpaces(tailorApe.eyes))"
                >
                  <IconRight />
                </button>
              </div>
              <div v-else class="attribute-box">
                <img src="/bgs/Green_Stage.png" alt="ApeX" />
              </div>
            </div>
            <div class="one-quarter">
              <div
                v-if="tailorApe.body && tailorApe.mouth === 'None'"
                class="attribute-box"
              >
                <button
                  class="icon-button-left"
                  @click="previousApeAttr('mouthes', stripSpaces(apeAttributes.mouth))"
                >
                  <IconLeft />
                </button>
                <img
                  :src="`/mouthes/${stripSpaces(apeAttributes.mouth)}_${tailorApe.skin}.png`"
                  alt="ApeX"
                  @click="nextApeAttr('mouthes', stripSpaces(apeAttributes.mouth))"
                />
                <button
                  class="icon-button-right"
                  @click="nextApeAttr('mouthes', stripSpaces(apeAttributes.mouth))"
                >
                  <IconRight />
                </button>
              </div>
              <div
                v-else-if="tailorApe.body && tailorApe.mouth !== 'None'"
                class="attribute-box"
              >
                <button
                  class="icon-button-left"
                  @click="previousApeAttr('mouthes', stripSpaces(tailorApe.mouth))"
                >
                  <IconLeft />
                </button>
                <img
                  :src="`/mouthes/${stripSpaces(tailorApe.mouth)}_${tailorApe.skin}.png`"
                  alt="ApeX"
                  @click="nextApeAttr('mouthes', stripSpaces(tailorApe.mouth))"
                />
                <button
                  class="icon-button-right"
                  @click="nextApeAttr('mouthes', stripSpaces(tailorApe.mouth))"
                >
                  <IconRight />
                </button>
              </div>
              <div v-else class="attribute-box">
                <img src="/bgs/Green_Stage.png" alt="ApeX" />
              </div>
            </div>
            <div class="one-quarter">
              <div
                v-if="tailorApe.body && tailorApe.clothes === 'None'"
                class="attribute-box"
              >
                <button
                  class="icon-button-left"
                  @click="previousApeAttr('clothes', stripSpaces(apeAttributes.clothes))"
                >
                  <IconLeft />
                </button>
                <img
                  :src="`/clothes/${stripSpaces(apeAttributes.clothes)}.png`"
                  alt="ApeX"
                  @click="nextApeAttr('clothes', stripSpaces(apeAttributes.clothes))"
                />
                <button
                  class="icon-button-right"
                  @click="nextApeAttr('clothes', stripSpaces(apeAttributes.clothes))"
                >
                  <IconRight />
                </button>
              </div>
              <div
                v-else-if="tailorApe.body && tailorApe.clothes !== 'None'"
                class="attribute-box"
              >
                <button
                  class="icon-button-left"
                  @click="previousApeAttr('clothes', stripSpaces(tailorApe.clothes))"
                >
                  <IconLeft />
                </button>
                <img
                  v-if="
                    (tailorApe.body === 'Robot' && tailorApe.clothes === 'Hoodie') ||
                    tailorApe.clothes === 'Leather_Jacket'
                  "
                  :src="`/clothes/${stripSpaces(tailorApe.clothes)}.png`"
                  alt="ApeX"
                  @click="nextApeAttr('clothes', stripSpaces(tailorApe.clothes))"
                />
                <img
                  v-else
                  :src="`/clothes/${stripSpaces(tailorApe.clothes)}.png`"
                  alt="ApeX"
                  @click="nextApeAttr('clothes', stripSpaces(tailorApe.clothes))"
                />
                <button
                  class="icon-button-right"
                  @click="nextApeAttr('clothes', stripSpaces(tailorApe.clothes))"
                >
                  <IconRight />
                </button>
              </div>
              <div v-else class="attribute-box">
                <img src="/bgs/Green_Stage.png" alt="ApeX" />
              </div>
            </div>
          </div>
          <!-- END Attributes Row #2 -->

          <div class="column">
            <div class="two-quarter">
              <div class="input-row">
                <button
                  :disabled="!tailorApe.body"
                  class="green-button"
                  @click="drawApe(true)"
                >
                  Download
                </button>
                <button
                  :disabled="!tailorApe.body"
                  class="icon-button-round"
                  @click="setGmApe()"
                >
                  GM
                </button>
                <!-- <button :disabled="!tailorApe.image" class="icon-button-round" @click="setJayApe()">
                  J
                </button> -->
              </div>
            </div>
          </div>
        </div>
      </Transition>
      <!-- END Mobile Versions -->
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores";
import Konva from "konva";

import IconPlay from "../assets/svgs/icons/IconPlay.vue";
import IconRestart from "../assets/svgs/icons/IconRestart.vue";
import IconLeft from "../assets/svgs/icons/IconLeft.vue";
import IconRight from "../assets/svgs/icons/IconRight.vue";

import { bgs } from "@/data/bgs.json";
import { hats } from "@/data/hats.json";
import { eyes } from "@/data/eyes.json";
import { clothes } from "@/data/clothes.json";
import { glasses } from "@/data/glasses.json";
import { piercings } from "@/data/piercings.json";
import { mouthes } from "@/data/mouthes.json";

import apexApe from "/apes/0.png";

const store = useStore();
const { loading, tailorApe, apeAttributes } = storeToRefs(store);

const apeId = ref();

const bgsTotal = bgs.length;
const hatsTotal = hats.length;
const eyesTotal = eyes.length;
const clothesTotal = clothes.length;
const glassesTotal = glasses.length;
const piercingsTotal = piercings.length;
const mouthesTotal = mouthes.length;

const state = reactive({
  gmApe: false,
  jayApe: false,
});

function stripSpaces(str: string) {
  return str.split(" ").join("_");
}

async function previousApeAttr(attr: string, value: string) {
  let trait = null;
  if (attr === "bgs") {
    trait = bgs.filter((item) => item.type === stripSpaces(value));
    let currentIndex = trait[0].index;
    if (currentIndex === 1) {
      let previousTrait = bgs.filter((item) => item.index === bgsTotal);
      store.setTailorApeImage(previousTrait[0].type);
      store.setApeAttributesImage(previousTrait[0].type);
    } else {
      let previousTrait = bgs.filter((item) => item.index === currentIndex - 1);
      store.setTailorApeImage(previousTrait[0].type);
      store.setApeAttributesImage(previousTrait[0].type);
    }
  } else if (attr === "hats") {
    trait = hats.filter((item) => item.type === value);
    let currentIndex = trait[0].index;
    if (currentIndex === 1) {
      let previousTrait = hats.filter((item) => item.index === hatsTotal);
      store.setTailorApeHat(previousTrait[0].type);
      store.setApeAttributesHat(previousTrait[0].type);
    } else {
      let previousTrait = hats.filter((item) => item.index === currentIndex - 1);
      store.setTailorApeHat(previousTrait[0].type);
      store.setApeAttributesHat(previousTrait[0].type);
    }
  } else if (attr === "eyes") {
    if(value === 'Crazy'){
      store.setTailorApeEyes("Closed");
      store.setTailorApeGlasses("None");
      store.setApeAttributesEyes("Closed");
      store.setApeAttributesGlasses("Beams");      
    } else {
      trait = eyes.filter((item) => item.type === value);
      let currentIndex = trait[0].index;
      if (currentIndex === 1) {
        let previousTrait = eyes.filter((item) => item.index === eyesTotal);
        store.setTailorApeEyes(previousTrait[0].type);
        store.setApeAttributesEyes(previousTrait[0].type);
      } else {
        let previousTrait = eyes.filter((item) => item.index === currentIndex - 1);
        store.setTailorApeEyes(previousTrait[0].type);
        store.setApeAttributesEyes(previousTrait[0].type);
      }
    }
  } else if (attr === "clothes") {
    trait = clothes.filter((item) => item.type === value);
    let currentIndex = trait[0].index;
    if (currentIndex === 1) {
      let previousTrait = clothes.filter((item) => item.index === clothesTotal);
      if (previousTrait[0].type === "Hoodie") {
        store.setTailorApeHat("None");
        store.setApeAttributesHat("Apescription_Beanie");
      }
      store.setTailorApeClothes(previousTrait[0].type);
      store.setApeAttributesClothes(previousTrait[0].type);
    } else {
      let previousTrait = clothes.filter((item) => item.index === currentIndex - 1);
      if (previousTrait[0].type === "Hoodie") {
        store.setTailorApeHat("None");
        store.setApeAttributesHat("Apescription_Beanie");
      }
      store.setTailorApeClothes(previousTrait[0].type);
      store.setApeAttributesClothes(previousTrait[0].type);
    }
  } else if (attr === "glasses") {
    if (value === 'Crazy'){
      store.setTailorApeEyes("Angry");
      store.setTailorApeGlasses("None");
      store.setApeAttributesEyes("Angry");
      store.setApeAttributesGlasses("Beams"); 
    } else if (value === 'Laser'){
      store.setTailorApeEyes("Hypno");
      store.setTailorApeGlasses("Horn_Rimmed");
      store.setApeAttributesEyes("Hypno");
      store.setApeAttributesGlasses("Horn_Rimmed"); 
    } else {
      trait = glasses.filter((item) => item.type === value);
      let currentIndex = trait[0].index;
      if (currentIndex === 1) {
        let previousTrait = glasses.filter((item) => item.index === glassesTotal);
        if (previousTrait[0].type === "Crazy") {
          store.setTailorApeEyes("Crazy");
          store.setApeAttributesEyes("Crazy");
        } else if (previousTrait[0].type === "Laser") {
          store.setTailorApeEyes("Laser");
          store.setTailorApeGlasses("Laser");
          store.setApeAttributesEyes("Laser");
          store.setApeAttributesEyes("Laser");
        } else {
          store.setTailorApeGlasses(previousTrait[0].type);
          store.setApeAttributesGlasses(previousTrait[0].type);
        }
      } else {
        let previousTrait = glasses.filter((item) => item.index === currentIndex - 1);
        if (previousTrait[0].type === "Crazy") {
          store.setTailorApeEyes("Crazy");
          store.setApeAttributesEyes("Crazy");
        } else if (previousTrait[0].type === "Laser") {
          store.setTailorApeEyes("Laser");
          store.setTailorApeGlasses("Laser");
          store.setApeAttributesEyes("Laser");
          store.setApeAttributesEyes("Laser");
        } else {
          store.setTailorApeGlasses(previousTrait[0].type);
          store.setApeAttributesGlasses(previousTrait[0].type);
        }        
      }
    }
  } else if (attr === "piercings") {
    trait = piercings.filter((item) => item.type === value);
    let currentIndex = trait[0].index;
    if (currentIndex === 1) {
      let previousTrait = piercings.filter((item) => item.index === piercingsTotal);
      store.setTailorApePiercing(previousTrait[0].type);
      store.setApeAttributesPiercing(previousTrait[0].type);
    } else {
      let previousTrait = piercings.filter((item) => item.index === currentIndex - 1);
      store.setTailorApePiercing(previousTrait[0].type);
      store.setApeAttributesPiercing(previousTrait[0].type);
    }
  } else if (attr === "mouthes") {
    trait = mouthes.filter((item) => item.type === value);
    let currentIndex = trait[0].index;
    if (currentIndex === 1) {
      let previousTrait = mouthes.filter((item) => item.index === mouthesTotal);
      store.setTailorApeMouth(previousTrait[0].type);
      store.setApeAttributesMouth(previousTrait[0].type);
    } else {
      let previousTrait = mouthes.filter((item) => item.index === currentIndex - 1);
      store.setTailorApeMouth(previousTrait[0].type);
      store.setApeAttributesMouth(previousTrait[0].type);
    }
  } else {
    trait = null;
  }
  await drawApe();
}

async function nextApeAttr(attr: string, value: string) {
  let trait = null;
  if (attr === "bgs") {
    trait = bgs.filter((item) => item.type === stripSpaces(value));
    let currentIndex = trait[0].index;
    if (currentIndex === bgsTotal) {
      let nextTrait = bgs.filter((item) => item.index === 1);
      store.setTailorApeImage(nextTrait[0].type);
      store.setApeAttributesImage(nextTrait[0].type);
    } else {
      let nextTrait = bgs.filter((item) => item.index === currentIndex + 1);
      store.setTailorApeImage(nextTrait[0].type);
      store.setApeAttributesImage(nextTrait[0].type);
    }
  } else if (attr === "hats") {
    trait = hats.filter((item) => item.type === value);
    let currentIndex = trait[0].index;
    if (currentIndex === hatsTotal) {
      let nextTrait = hats.filter((item) => item.index === 1);
      store.setTailorApeHat(nextTrait[0].type);
      store.setApeAttributesHat(nextTrait[0].type);
    } else {
      let nextTrait = hats.filter((item) => item.index === currentIndex + 1);
      store.setTailorApeHat(nextTrait[0].type);
      store.setApeAttributesHat(nextTrait[0].type);
    }
  } else if (attr === "eyes") {
    if(value === 'Crazy'){
      store.setTailorApeEyes("Cyborg");
      store.setTailorApeGlasses("None");
      store.setApeAttributesEyes("Cyborg");
      store.setApeAttributesGlasses("Beams");
    } else {
      trait = eyes.filter((item) => item.type === value);
      let currentIndex = trait[0].index;
      if (currentIndex === eyesTotal) {
        let nextTrait = eyes.filter((item) => item.index === 1);
        store.setTailorApeEyes(nextTrait[0].type);
        store.setApeAttributesEyes(nextTrait[0].type);
      } else {
        let nextTrait = eyes.filter((item) => item.index === currentIndex + 1);
        store.setTailorApeEyes(nextTrait[0].type);
        store.setApeAttributesEyes(nextTrait[0].type);
      }
    }
  } else if (attr === "clothes") {
    trait = clothes.filter((item) => item.type === value);
    let currentIndex = trait[0].index;
    if (currentIndex === clothesTotal) {
      let nextTrait = clothes.filter((item) => item.index === 1);
      if (nextTrait[0].type === "Hoodie") {
        store.setTailorApeHat("None");
        store.setApeAttributesHat("Apescription_Beanie");
      } else {
        store.setTailorApeClothes(nextTrait[0].type);
        store.setApeAttributesClothes(nextTrait[0].type);
      }
    } else {
      let nextTrait = clothes.filter((item) => item.index === currentIndex + 1);
      if (nextTrait[0].type === "Hoodie") {
        store.setTailorApeHat("None");
        store.setApeAttributesHat("Apescription_Beanie");
      }
      store.setTailorApeClothes(nextTrait[0].type);
      store.setApeAttributesClothes(nextTrait[0].type);
    }
  } else if (attr === "glasses") {
    if(value === 'Crazy'){
      store.setTailorApeEyes("Cyborg");
      store.setTailorApeGlasses("None");
      store.setApeAttributesEyes("Cyborg");
      store.setApeAttributesGlasses("Beams"); 
    } else if(value === 'Laser'){
      store.setTailorApeEyes("Sad");
      store.setTailorApeGlasses("None");
      store.setApeAttributesEyes("Sad");
      store.setApeAttributesGlasses("Beams"); 
    } else {
      trait = glasses.filter((item) => item.type === value);
      let currentIndex = trait[0].index;
      if (currentIndex === glassesTotal) {
        let nextTrait = glasses.filter((item) => item.index === 1);
        if (nextTrait[0].type === "Crazy") {
          store.setTailorApeEyes("Crazy");
          store.setApeAttributesEyes("Crazy");
        } else if (nextTrait[0].type === "Laser") {
          store.setTailorApeEyes("Laser");
          store.setTailorApeGlasses("Laser");
          store.setApeAttributesEyes("Laser");
          store.setApeAttributesEyes("Laser");
        } else {
          store.setTailorApeGlasses(nextTrait[0].type);
          store.setApeAttributesGlasses(nextTrait[0].type);
        }
      } else {
        let nextTrait = glasses.filter((item) => item.index === currentIndex + 1);
        if (nextTrait[0].type === "Crazy") {
          store.setTailorApeEyes("Crazy");
          store.setApeAttributesEyes("Crazy");
        } else if (nextTrait[0].type === "Laser") {
          store.setTailorApeEyes("Laser");
          store.setTailorApeGlasses("Laser");
          store.setApeAttributesEyes("Laser");
          store.setApeAttributesEyes("Laser");
        } else {
          store.setTailorApeGlasses(nextTrait[0].type);
          store.setApeAttributesGlasses(nextTrait[0].type);
        }
      }
    }
  } else if (attr === "piercings") {
    trait = piercings.filter((item) => item.type === value);
    let currentIndex = trait[0].index;
    if (currentIndex === piercingsTotal) {
      let nextTrait = piercings.filter((item) => item.index === 1);
      store.setTailorApePiercing(nextTrait[0].type);
      store.setApeAttributesPiercing(nextTrait[0].type);
    } else {
      let nextTrait = piercings.filter((item) => item.index === currentIndex + 1);
      store.setTailorApePiercing(nextTrait[0].type);
      store.setApeAttributesPiercing(nextTrait[0].type);
    }
  } else if (attr === "mouthes") {
    trait = mouthes.filter((item) => item.type === value);
    let currentIndex = trait[0].index;
    if (currentIndex === mouthesTotal) {
      let nextTrait = mouthes.filter((item) => item.index === 1);
      store.setTailorApeMouth(nextTrait[0].type);
      store.setApeAttributesMouth(nextTrait[0].type);
    } else {
      let nextTrait = mouthes.filter((item) => item.index === currentIndex + 1);
      store.setTailorApeMouth(nextTrait[0].type);
      store.setApeAttributesMouth(nextTrait[0].type);
    }
  } else {
    trait = null;
  }
  await drawApe();
}

async function setGmApe() {
  // state.jayApe = !state.jayApe;
  state.gmApe = !state.gmApe;
  await drawApe();
}

// async function setJayApe() {
//   state.gmApe = !state.gmApe;
//   state.jayApe = !state.jayApe;
//   await drawApe();
// }

async function drawApe(download = false) {
  
  // store.setLoading(true);

  var stage = new Konva.Stage({
    container: "apeTailor",
    width: 380,
    height: 380,
  });

  var bgLayer = new Konva.Layer();
  var apeBodyLayer = new Konva.Layer();
  var apeFaceLayer = new Konva.Layer();
  var apeApparelLayer = new Konva.Layer();
  var overlayLayer = new Konva.Layer();
  
  console.log("Skin: ", tailorApe.value.skin);
  
  if (tailorApe.value.image) {
    var bgImage = new Image();
    bgImage.crossOrigin = "Anonymous";
    bgImage.src = `/bgs/${tailorApe.value.image}.png`;
    bgImage.onload = function () {
      var apeBg = new Konva.Image({
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        image: bgImage,
        width: 380,
        height: 380,
      });
      bgLayer.add(apeBg);      
      
      console.log("bgLayer", bgLayer.toDataURL());
    };
  }

  if (tailorApe.value.body) {
    var bgBodyImage = new Image();
    bgBodyImage.crossOrigin = "Anonymous";
    bgBodyImage.src = `/body/${stripSpaces(tailorApe.value.body)}_${tailorApe.value.skin}.png`;
    bgBodyImage.onload = function () {
      var apeBody = new Konva.Image({
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        image: bgBodyImage,
        width: 380,
        height: 380,
      });
      apeBodyLayer.add(apeBody);

      console.log("apeBodyLayer", apeBodyLayer.toDataURL());
    };
  }

  if (tailorApe.value.eyes !== "None") {
    var bgEyesImage = new Image();
    bgEyesImage.crossOrigin = "Anonymous";
    if(tailorApe.value.eyes === 'Crazy') {
      store.setTailorApeGlasses("Crazy");
      store.setApeAttributesGlasses("Crazy");
    }
    bgEyesImage.src = `/eyes/${stripSpaces(tailorApe.value.eyes)}_${tailorApe.value.skin}.png`;
    bgEyesImage.onload = function () {
      var apeEyes = new Konva.Image({
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        image: bgEyesImage,
        width: 380,
        height: 380,
      });
      apeFaceLayer.add(apeEyes);

      console.log("apeFaceLayer", apeFaceLayer.toDataURL());
    };
  }

  if (tailorApe.value.hat !== "None") {
    var bgHatImage = new Image();
    bgHatImage.crossOrigin = "Anonymous";
    if (tailorApe.value.clothes === "Hoodie") {
      bgHatImage.src = `/hats/Hood.png`;
    } else {
      bgHatImage.src = `/hats/${stripSpaces(tailorApe.value.hat)}.png`;
    }    
    bgHatImage.onload = function () {
      var apeHat = new Konva.Image({
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        image: bgHatImage,
        width: 380,
        height: 380,
      });
      apeApparelLayer.add(apeHat);

      console.log("apeApparelLayer", apeApparelLayer.toDataURL());
    };
  }

  if (tailorApe.value.clothes !== "None") {
    var bgClothesImage = new Image();
    bgClothesImage.crossOrigin = "Anonymous";

    if ((tailorApe.value.body === "Robot" && tailorApe.value.clothes === "Hoodie") || tailorApe.value.clothes === "Leather_Jacket") {
      bgClothesImage.src = `/clothes/${stripSpaces(tailorApe.value.clothes)}_Robot.png`;
    } else {
      bgClothesImage.src = `/clothes/${stripSpaces(tailorApe.value.clothes)}.png`;
    }

    bgClothesImage.onload = function () {
      var apeClothes = new Konva.Image({
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        image: bgClothesImage,
        width: 380,
        height: 380,
      });
      apeApparelLayer.add(apeClothes);

      console.log("apeApparelLayer", apeApparelLayer.toDataURL());
    };
  }

  if (tailorApe.value.piercing !== "None") {
    var bgPiercingImage = new Image();
    bgPiercingImage.crossOrigin = "Anonymous";
    bgPiercingImage.src = `/piercings/${stripSpaces(tailorApe.value.piercing)}.png`;
    bgPiercingImage.onload = function () {
      var apePiercing = new Konva.Image({
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        image: bgPiercingImage,
        width: 380,
        height: 380,
      });
      apeApparelLayer.add(apePiercing);

      console.log("apeApparelLayer", apeApparelLayer.toDataURL());
    };
  }

  if (tailorApe.value.glasses !== "None") {
    var bgGlassesImage = new Image();
    bgGlassesImage.crossOrigin = "Anonymous";
    bgGlassesImage.src = `/glasses/${stripSpaces(tailorApe.value.glasses)}_${tailorApe.value.skin}.png`;    
    bgGlassesImage.onload = function () {
      var apeGlasses = new Konva.Image({
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        image: bgGlassesImage,
        width: 380,
        height: 380,
      });
      overlayLayer.add(apeGlasses);

      console.log("overlayLayer", overlayLayer.toDataURL());
    };
  }

  if (tailorApe.value.mouth !== "None") {
    var bgMouthImage = new Image();
    bgMouthImage.crossOrigin = "Anonymous";
    bgMouthImage.src = `/mouthes/${stripSpaces(tailorApe.value.mouth)}_${tailorApe.value.skin}.png`;
    bgMouthImage.onload = function () {
      var apeMouth = new Konva.Image({
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        image: bgMouthImage,
        width: 380,
        height: 380,
      });
      overlayLayer.add(apeMouth);

      console.log("overlayLayer", overlayLayer.toDataURL());
    };
  }


  if (state.gmApe === true) {
    var bgGMImage = new Image();
    bgGMImage.crossOrigin = "Anonymous";
    bgGMImage.src = `/gmSkins/${tailorApe.value.skin}-Skin/GM_${tailorApe.value.skin}_${tailorApe.value.body}.png`;
    bgGMImage.onload = function () {
      var apeGM = new Konva.Image({
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        image: bgGMImage,
        width: 380,
        height: 380,
      });
      overlayLayer.add(apeGM);

      console.log("GM overlayLayer", overlayLayer.toDataURL());
    };
  }


  if (state.jayApe === true) {
    var bgJayImage = new Image();
    bgJayImage.crossOrigin = "Anonymous";
    bgJayImage.src = `/jays/${tailorApe.value.skin}-Skin/GM_${tailorApe.value.skin}_${tailorApe.value.body}.png`;
    bgJayImage.onload = function () {
      var apeJay = new Konva.Image({
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        image: bgJayImage,
        width: 380,
        height: 380,
      });
      overlayLayer.add(apeJay);
    };
  }

  stage.add(bgLayer, apeBodyLayer, apeFaceLayer, apeApparelLayer, overlayLayer);

  bgLayer.draw();
  bgLayer.zIndex(0);
  apeBodyLayer.draw();
  apeBodyLayer.zIndex(1);
  apeFaceLayer.draw();
  apeFaceLayer.zIndex(2);
  apeApparelLayer.draw();
  apeApparelLayer.zIndex(3);
  overlayLayer.draw();
  overlayLayer.zIndex(4);
    

  if(download) {
    let MIME_TYPE = "image/png";
    let dataURL = stage.toDataURL({ mimeType: MIME_TYPE, pixelRatio: 2 });
    console.log("dataURL", dataURL);
    
    let dlLink = document.createElement("a");
    dlLink.download = `ApeWear-Ape-${tailorApe.value.id}`;
    dlLink.href = dataURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(":");

    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
  }

  // store.setLoading(false);
}

async function searchApe(apeId: string) {

  let ape = await fetch(`/apescriptions/${apeId}.json`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Unable to fetch Ape data:", error);
    });

  // console.log('Found Ape', ape);
  // console.log('Ape Id', ape.collectionId);
  // console.log('Ape Body', ape.attributes[3].value);
  // console.log('Ape Skin', ape.attributes[7].value);

  let skin = "";
  switch (ape.attributes[7].value) {
    case "PNEII":
      skin = "Medium";
      break;
    case "INENP":
      skin = "Medium";
      break;
    case "NIIIN":
      skin = "Dark";
      break;
    case "NAAPN":
      skin = "Dark";
      break;
    case "NAAIP":
      skin = "Light";
      break;
    case "APIPE":
      skin = "Light";
      break;
    case "NIPEP":
      skin = "Dark";
      break;
    case "AENAN":
      skin = "Medium";
      break;
    case "EANNP":
      skin = "Dark";
      break;
    case "IEIPA":
      skin = "Medium";
      break;
    case "PAINI":
      skin = "Medium";
      break;
    case "IAIAA":
      skin = "Medium";
      break;
    case "IENIA":
      skin = "Medium";
      break;
    default:
      skin = "Light";
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
    image: "Green_Stage",
  };

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
    image: "Green_Stage",
  });
  await setDefaultAttributes();
  await setDefaultApe();
}

async function setDefaultApe() {

  var stage = new Konva.Stage({
    container: "apeTailor",
    width: 380,
    height: 380,
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

async function setDefaultAttributes() {
  store.setApeAttributes({
    id: "0",
    body: "",
    skin: "Light",
    clothes: "Bone_Necklace",
    eyes: "Angry",
    glasses: "Beams",
    hat: "Apescription_Beanie",
    mouth: "Bored",
    piercing: "Drip",
    image: "Green_Stage",
  });
}

onMounted(async () => {
  await setDefaultApe();
  await setDefaultAttributes();
});
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
    padding: 8px 6px;
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
    margin: 0 auto 10px;
    padding: 0;
    transition: all 0.5s linear;
    overflow: hidden;

    .icon-button-left {
      position: absolute;
      top: 0;
      left: 0;
      color: $white;
      background-color: transparent;
      border: none;
      width: 30px;
      height: inherit;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
      transition: background-color 0.2s cubic-bezier(0.05, 0, 0.2, 1);
      cursor: pointer;
      z-index: 999999;

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
      width: 30px;
      height: inherit;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
      transition: background-color 0.2s cubic-bezier(0.05, 0, 0.2, 1);
      cursor: pointer;
      z-index: 999999;

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

  #apeTailor {
    display: block;
    max-width: 380px;
    max-height: 380px;
    margin: 0;
    padding: 0;
  }

  .loading-box {
    // position: relative;
    // display: block;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 380px;
    height: 380px;
    color: $apex-grey;
    background: $apex-green;
    border-radius: 12px;
    margin: 0;
    padding: 0;
    transition: all 0.5s linear;
    overflow: hidden;
  }
}

.attribute-box {
  position: relative;
  width: 160px;
  height: 160px;
  background: $apex-green;
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
    width: 115px;
    height: 115px;
  }

  @include breakpoint($break-ssm) {
    width: 100px;
    height: 100px;
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
    max-width: 260px;
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
    text-align: center;

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
  font-size: 16px;
  font-weight: 600;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-left-enter-active,
.fade-left-leave-active {
  transition: opacity 0.6s ease;
}
.fade-left-enter-from,
.fade-left-leave-to {
  opacity: 0;
}

.fade-right-enter-active,
.fade-right-leave-active {
  transition: opacity 0.6s ease;
}
.fade-right-enter-from,
.fade-right-leave-to {
  opacity: 0;
}
</style>
