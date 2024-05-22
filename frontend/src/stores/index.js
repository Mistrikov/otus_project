import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'

// добавить свойство `secret` в каждое создаваемое хранилище
// после установки плагина это свойство может находиться в другом файле
function SecretPiniaPlugin() {
  return { secret: 'the cake is a lie' }
}

export default store((/* { ssrContext } */) => {
  const pinia = createPinia()

  // передать плагин pinia
  //pinia.use(SecretPiniaPlugin)

  return pinia
})

// в другом файле
//const store = useStore()
//store.secret // 'the cake is a lie'