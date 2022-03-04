<template>
  <q-page class="justify-center row"
    >this is newspage
    <div
      class="full-width row wrap justify-between items-center content-center box"
    >
      <q-btn
        :to="{ name: 'Home' }"
        class="bg-green menu-box justify-center items-center"
      >
        <q-img
          src="img/Picture1.png"
          class="imgsize items-center content-center"
        ></q-img>
      </q-btn>
      <div class="bg-green menu-box"></div>
      <div class="bg-green menu-box"></div>
      <div class="bg-green menu-box"></div>
      <div class="bg-green menu-box"></div>
      <div class="bg-green menu-box"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'News',
});
</script>

<style>
.imgsize {
  width: 60px;
}

.box {
  width: 100%;
  max-width: 800px !important;
}

.menu-box {
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  overflow: auto;
  min-height: 100px;
  max-height: 100px;
  min-width: 100px;
  max-width: 100px;
}
</style>
