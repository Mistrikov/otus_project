<script setup>
import { computed } from 'vue';
import { useVkStateStore } from 'stores/store';
import MainLayout from 'src/layouts/MainLayout.vue';

const store = useVkStateStore();
const isAuth = computed(() => store.isAuth);

defineOptions({
  name: 'IndexPage'
});

</script>

<template>
  <q-page class="flex flex-center">
    <q-img
      alt="VkStat logo"
      src="~assets/logo-color3.jpg"
      style="width: 200px; height: 200px; border: solid 1px"
      rel="preload"
    >
    </q-img>
    <div><p>dfdf</p></div>
    <div class="q-pa-md"><p v-for="n in 15" :key="n">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
    </p></div>
  </q-page>
</template>

