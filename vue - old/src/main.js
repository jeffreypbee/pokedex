import Vue from 'vue'
import App from './App.vue'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBug } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faDragon } from '@fortawesome/free-solid-svg-icons'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import { faRainbow } from '@fortawesome/free-solid-svg-icons'
import { faHandFist } from '@fortawesome/free-solid-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons'
import { faGhost } from '@fortawesome/free-solid-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faMound } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { faSkull } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBug)
library.add(faMoon)
library.add(faDragon)
library.add(faBoltLightning)
library.add(faRainbow)
library.add(faHandFist)
library.add(faFire)
library.add(faFeatherPointed)
library.add(faGhost)
library.add(faLeaf)
library.add(faMound)
library.add(faSnowflake)
library.add(faSquare)
library.add(faSkull)
library.add(faEye)
library.add(faGem)
library.add(faGear)
library.add(faDroplet)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
