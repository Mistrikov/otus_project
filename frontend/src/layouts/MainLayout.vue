<script setup>
import { ref, computed } from 'vue'
import MenuLinks from 'components/MenuLinks.vue'
import { useVkStateStore } from 'stores/store';
import { useRouter  } from 'vue-router'
const router = useRouter()

const store = useVkStateStore();
const isAuth = computed(() => store.isAuth)
//const leftDrawerOpen = computed(() => store.leftDrawerOpen)

const leftDrawerOpen = ref(false)

defineOptions({
  name: 'MainLayout'
})

function toggleLeftDrawer () {
  //store.leftDrawerOpen = !store.leftDrawerOpen
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const btnLogoutClick = () => {
  store.logout()
  router.push('/login')
}

</script>

<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Медиаактивность во ВКонтакте
        </q-toolbar-title>
        <q-avatar>
          <img src="~assets/logo-color3.jpg" width="50px">
        </q-avatar>
        <!--q-btn flat @click="toggleLeftDrawer" round dense icon="menu" /-->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <MenuLinks :isAuth="isAuth" @logout="btnLogoutClick" />
      <div class="q-drawer-hide absolute" style="top: 15px; right: -17px">
        <q-btn
          dense
          round
          unelevated
          color="primary"
          icon="chevron_left"
          @click="toggleLeftDrawer"
        />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white" style="height:40px">
      <q-toolbar>
        <!--q-avatar>
          <img src="~assets/logo-color3.jpg" width="50px">
        </q-avatar-->
        <q-toolbar-title >
          <div style="font-size: 10pt; padding-top: -5px;">&copy; 2024г. Игорь Мистриков. isAuth {{ isAuth }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>


