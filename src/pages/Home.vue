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
          src="img/9.png"
          class="imgsize items-center content-center"
        ></q-img>
      </q-btn>
      <q-btn
        :to="{ name: 'Check' }"
        class="bg-green menu-box justify-center items-center"
      >
        <q-img
          src="img/10.png"
          class="imgsize items-center content-center"
        ></q-img>
      </q-btn>
      <q-btn
        :to="{ name: 'Record' }"
        class="bg-green menu-box justify-center items-center"
      >
        <q-img
          src="img/11.png"
          class="imgsize items-center content-center"
        ></q-img>
      </q-btn>
      <q-btn
        :to="{ name: 'Contact' }"
        class="bg-green menu-box justify-center items-center"
      >
        <q-img
          src="img/12.png"
          class="imgsize items-center content-center"
        ></q-img>
      </q-btn>
      <q-btn
        :to="{ name: 'Station' }"
        class="bg-green menu-box justify-center items-center"
      >
        <q-img
          src="img/13.png"
          class="imgsize items-center content-center"
        ></q-img>
      </q-btn>
      <q-btn
        :to="{ name: 'Statis' }"
        class="bg-#cdcdcd menu-box justify-center items-center"
      >
        <q-img
          src="img/16.png"
          class="imgsize items-center content-center"
        ></q-img>
      </q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Home',
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
