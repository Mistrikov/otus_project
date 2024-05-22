<script setup>
import { ref, computed } from 'vue'

defineOptions({
  name: 'OrgAddEdit'
})

const props = defineProps({
  org: {
    type: Object,
    default() {
        return []
      }
  },
  showDlg: {
    type: Boolean,
    default: false
  },
})

const dialog = computed(() => props.showDlg) 
const org = computed(() => props.org)  //ref(props.org)

const emit = defineEmits(['saveOrg', 'cancelOrg'])

const btnSaveClick = () => {
  //console.log('clicked on', row)
  emit('saveOrg', org.value)
}

const btnCancelClick = () => {
  //console.log('clicked on', row)
  emit('cancelOrg')
}

</script>

<template>
  <q-dialog v-model="dialog" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
        <span class="q-ml-sm">{{ org }}</span>
      </q-card-section>

      <!-- Notice v-close-popup -->
      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup @click="btnCancelClick" />
        <q-btn flat label="Save" color="primary" v-close-popup @click="btnSaveClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
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