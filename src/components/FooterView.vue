<template>
  <footer>
    <div class="footer-container">
      <div class="row apex-bg-black">
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";
  @import "@/assets/styles/mixins.scss";

  footer {
    width: 100%;
    height: 140px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .footer-container {
    width: 100%;
    max-width: $max-width;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
  }
</style>
