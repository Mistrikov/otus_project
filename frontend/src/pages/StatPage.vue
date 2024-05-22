<script setup>
import { ref, computed } from 'vue'
import { useVkStateStore } from 'stores/store'
import { Loading,  QSpinnerGears } from 'quasar'
import StatGraph from 'components/StatGraph.vue'

const store = useVkStateStore()

defineOptions({
  name: 'StatPage'
})


</script>

<template>
  <q-page class="q-pa-md">
    <div class="row">
      <div class="col-12">
        <StatGraph />
      </div>
    </div>

  </q-page>
</template>

