import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

import './index.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faUser, faList, faCog, faLemon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faUser, faList, faCog, faLemon);

// 전역상태 불러오기
import { createGlobalState, globalStateSymbol } from "@/stores"
import { createMainApi, mainApiSymbol } from "@/apis"
import { createMainService, mainServiceSymbol } from "@/services"

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .provide(globalStateSymbol, createGlobalState())
  .provide(mainApiSymbol, createMainApi())
  .provide(mainServiceSymbol, createMainService())
  
router.isReady().then(() => {
  app.mount('#app');
});