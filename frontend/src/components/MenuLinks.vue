<script setup>
defineOptions({
  name: 'MenuLinks'
})

const props = defineProps({
  isAuth: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['logout'])

</script>
<template>
  <q-list bordered separator>
    <q-item>
      <q-item-label>Меню:</q-item-label>
    </q-item>
    <q-item clickable to="/">
      <q-item-section avatar>
        <q-icon name="home" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Главная</q-item-label>
        <q-item-label caption>Перейти на главную страницу</q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable to="/orgs" :active="isAuth">
      <q-item-section avatar>
        <q-icon name="list" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Организации</q-item-label>
        <q-item-label caption>Список наблюдаемых организаций</q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable to="/posts" :active="isAuth">
      <q-item-section avatar>
        <q-icon name="data_thresholding" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Посты</q-item-label>
        <q-item-label caption>Список постов</q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable to="/stat" :active="isAuth">
      <q-item-section avatar>
        <q-icon name="bar_chart" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Статистика</q-item-label>
        <q-item-label caption>Графики медиаактивности</q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable v-show="props.isAuth" @click="emit('logout')" :active="props.isAuth"> 
      <q-item-section avatar>
        <q-icon name="logout" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Выход</q-item-label>
        <q-item-label caption>Закончить работу</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>


<style>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
</style>