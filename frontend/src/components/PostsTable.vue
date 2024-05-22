<script setup>
import { ref, computed } from 'vue'

defineOptions({
  name: 'PostsTable'
})

const props = defineProps({
  postsList: {
    type: Array,
    default() {
        return []
      }
  },
});

const delBtnClick = () => {
  let idPosts = []
  if(selected.value.length>0) {
    selected.value.forEach(element => {
      idPosts.push(element.id_stat_row)
    });
    emit('delClick', idPosts)
  }
  selected.value = []
}

const emit = defineEmits(['delClick'])
const selected = ref([])
const rows = computed(() => props.postsList)

const columns = [
  /*{ name: 'org_type', label: 'Категория', field: 'org_type', sortable: true, align: 'left', },*/
  { name: 'org_type', label: 'Категория', field: 'org_type', sortable: true, align: 'left', },
  { name: 'org_name', label: 'Организация', field: 'org_name', sortable: true, align: 'left', },
  { name: 'post_date', label: 'Дата', field: 'post_date', sortable: true, align: 'left', },
  { name: 'post_link', label: 'Ссылка', field: 'post_link', sortable: true, align: 'left', },
  { name: 'post_looks', label: 'Просмотры', field: 'post_looks', sortable: true, align: 'left', },
  { name: 'post_likes', label: 'Лайки', field: 'post_likes', sortable: true, align: 'left', },
]
</script>

<template>
  <q-table
        title="Список постов"
        :rows="rows"
        :columns="columns"
        row-key="id_stat_row"
        flat bordered
        separator="cell"
        class="my-sticky-dynamic"
        no-data-label="Список постов пуст"
        no-results-label="Ничего не найдено"
        selection="multiple"
        v-model:selected="selected"
      >
      <template v-slot:top="props">
        <div class="col-4 q-table__title">Список постов</div>
        <q-space />
      <q-btn
          flat round dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        />
      </template>
      <template v-slot:top-row>
        <q-tr v-show="selected.length>0">
          <q-td colspan="100%">
            <q-btn
              icon="delete"
              @click="delBtnClick"
              class="q-ml-md"
              label="Удалить"
              color="red"
            />
          </q-td>
        </q-tr>
      </template>
      <template v-slot:body-cell-post_link="cellProperties">
        <q-td :props="cellProperties">
            <a :href="cellProperties.value" target="_blank">{{ cellProperties.value }}</a>
        </q-td>
      </template>
      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
          <span>{{ message }}</span>
        </div>
      </template>
      
    </q-table>
</template>

<style lang="sass">
.my-sticky-dynamic
  /* height or max-height is important */
  //height: 410px
  width: 100%
  

  .q-table__top,
  //.q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: $primary
  .q-table__top
    color: yellow

  thead tr th
    position: sticky
    z-index: 1
    font-weight: bold
    text-align: center
    color: white
  /*thead tr th:first-child
    background-color: red*/
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px
    
</style>