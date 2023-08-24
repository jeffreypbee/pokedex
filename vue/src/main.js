import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from 'axios'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBiohazard } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'
import { faFeather } from '@fortawesome/free-solid-svg-icons'
import { faLocust } from '@fortawesome/free-solid-svg-icons'
import { faMask } from '@fortawesome/free-solid-svg-icons'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faDragon } from '@fortawesome/free-solid-svg-icons'
import { faWandSparkles } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faSplotch } from '@fortawesome/free-solid-svg-icons'
import { faSkull } from '@fortawesome/free-solid-svg-icons'
import { faMound } from '@fortawesome/free-solid-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faHandFist } from '@fortawesome/free-solid-svg-icons'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBiohazard)
library.add(faGear)
library.add(faDroplet)
library.add(faFire)
library.add(faSnowflake)
library.add(faFeather)
library.add(faLocust)
library.add(faMask)
library.add(faSeedling)
library.add(faDragon)
library.add(faWandSparkles)
library.add(faEye)
library.add(faSplotch)
library.add(faSkull)
library.add(faMound)
library.add(faGem)
library.add(faHandFist)
library.add(faBoltLightning)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.VUE_APP_REMOTE_API;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
