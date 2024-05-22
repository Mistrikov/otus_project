<script setup>
import { computed } from 'vue';
import { useVkStateStore } from 'stores/store';
import { useRouter  } from 'vue-router'
import { Loading, QSpinner } from 'quasar'

const store = useVkStateStore();
const isAuth = computed(() => store.isAuth);
const router = useRouter()
let timer

defineOptions({
  name: 'LoginPage'
});

const btnLoginClick = (() => {
  Loading.show({
    spinner: QSpinner,
    message: 'Загрузка...'
  })
  timer = setTimeout(() => {
    Loading.hide()
    timer = void 0
  }, 2000)
  store.login()
  router.push('/')
});


</script>

<template>
  <q-page class="flex flex-center">
    <q-img
      alt="VkStat logo"
      src="~assets/logo-color3.jpg"
      style="width: 100px; height: 100px; border: solid 1px"
      rel="preload"
    >
    <template v-slot:loading>
      <q-spinner-gears color="red" />
    </template>
    </q-img>
    <h1>Login page</h1>
    <button @click="btnLoginClick" v-show="!isAuth">Login</button>
  </q-page>
</template>