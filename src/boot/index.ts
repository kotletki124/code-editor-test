import { defineBoot } from '#q-app/wrappers'
import startServer from '../server'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/boot-files
export default defineBoot(() => {
  startServer()
})
