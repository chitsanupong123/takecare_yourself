<template>
  <q-page sdasdas
    >{{ tests[0].name }} {{ tests[1].age }}
    <div v-for="(test, i) in tests" :key="i">
      {{ test.name }} {{ test.age }}
    </div>
    <Test1 :x="tests[0]"
  /></q-page>
</template>

<script lang="ts">
import Test1 from 'components/Test1.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'News',
  components: {
    Test1,
  },
  setup() {
    const tests = [
      { name: 'Aom', age: 22 },
      { name: 'tiw', age: 33 },
      { name: 'tiw', age: 33 },
      { name: 'tiw', age: 33 },
      { name: 'tiw', age: 33 },
      { name: 'tiw', age: 33 },
      { name: 'tiw', age: 33 },
    ];
    return { tests };
  },
});
</script>

<style></style>
