<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink v-for="(items, i) in linksList" :key="i" :item="items" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'หน้าแรก',
    name: 'Home',
  },
  {
    title: 'ฟีตข่าว',
    name: 'News',
  },
  {
    title: 'ตรวจสอบไทม์ไลน์',
    name: 'Check',
  },
  {
    title: 'บันทึกไทม์ไลน์',
    name: 'Record',
  },
  {
    title: 'ข้อมูลติดต่อ',
    name: 'Contact',
  },
  {
    title: 'station ใกล้คุณ',
    name: 'Station',
  },
  {
    title: 'สถิติผู้ติดเชื้อ',
    name: 'Statis',
  },
];

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
