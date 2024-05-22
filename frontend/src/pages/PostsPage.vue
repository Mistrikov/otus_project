<script setup>
import { ref, computed } from 'vue'
import { useVkStateStore } from 'stores/store'
import { Loading,  QSpinnerGears } from 'quasar'
import PostsTable from 'components/PostsTable.vue'

const store = useVkStateStore();
const postsList = computed(() => store.postsList)

const delPost = (idPosts) => {
  Loading.show({
    message: 'Удаление постов'
  })
  setTimeout(() => {
    Loading.hide()

        }, 1000)
  store.delPosts(idPosts)
  //Loading.hide()
}


defineOptions({
  name: 'PostsPage'
})


</script>

<template>
  <q-page class="q-pa-md">
    <div class="row">
      <div class="col-12">
        <PostsTable :rows="postsList" @delClick="delPost"/>
      </div>
    </div>

  </q-page>
</template>

