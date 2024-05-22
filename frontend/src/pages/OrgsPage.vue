<script setup>
import { ref, computed } from 'vue'
import { useVkStateStore } from 'stores/store';
import { Loading,  QSpinnerGears } from 'quasar'
import OrgsTable from 'components/OrgsTable.vue'
import OrgAddEdit from 'components/OrgAddEdit.vue'

const store = useVkStateStore();
const orgsList = computed(() => store.orgsList)
const orgsCat = computed(() => store.orgsCat)

const orgItem = ref({
  id_org: 1,
  org_type: 1,
  org_name: 'no name',
  vk_link: 'ddd',
  owner_id: '123'
})
// const rows = ref([...originalRows]) это из примера, надо будет пробнуть

const loading = computed(() => store.isLoading) //ref(false)
const dialog = ref(false)

const editOrg = ((org) => {
  //console.log('clicked on', org.org_name, org.id_org)
  orgItem.value = org
  dialog.value = true
})

const saveOrg = ((org) => {
  orgItem.value = org
  dialog.value = false
  console.log('save org', orgItem.value)
})

const delOrg = (idOrgs) => {
  Loading.show({
    message: 'Удаление организации'
  })
  setTimeout(() => {
    Loading.hide()

        }, 1000)
  store.delOrgs(idOrgs)
  //Loading.hide()
}

const cancelOrg = (() => {
  dialog.value = false
})

defineOptions({
  name: 'OrgsPage'
})


</script>

<template>
  <q-page class="q-pa-md">
    <div class="row">
      <div class="col-12">
        <OrgsTable :orgsList="orgsList" :loading="loading" @rowClick="editOrg" @delClick="delOrg" />
      </div>
    </div>
    <OrgAddEdit @saveOrg="saveOrg" @cancelOrg="cancelOrg" :showDlg="dialog" :org="orgItem"/>
    {{ dialog }}
  </q-page>
</template>

