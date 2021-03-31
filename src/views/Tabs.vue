<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" :href="tabsState.hrefHome">
          <font-awesome-icon class="text-lg h-7" icon="home" />
          <ion-label>홈</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="member" :href="tabsState.hrefMember">
          <font-awesome-icon class="text-lg h-7" icon="user" />
          <ion-label>회원</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="article" :href="tabsState.hrefArticle">
          <font-awesome-icon class="text-lg h-7" icon="list" />
          <ion-label>게시물</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="setting" :href="tabsState.hrefSetting">
          <font-awesome-icon class="text-lg h-7" icon="cog" />
          <ion-label>세팅</ion-label>
        </ion-tab-button>
        
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonPage } from '@ionic/vue';
import { useGlobalState } from '@/stores';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonPage },
  setup() {
    const globalState = useGlobalState();
    const tabsState = reactive({
      'hrefHome':'/home',
      'hrefMember':'/member',
      'hrefArticle':'/article',
      'hrefSetting':'/setting',
    });

    /* ionic 리다이렉트 URL로의 다중클릭으로 인한 버그를 고치기 위한 코드 - 시작 */
    /* 버그가 해결되면 없애도 됩니다. */
    const route = useRoute();

    if ( route.path.startsWith("/home") ) {
      tabsState.hrefHome = route.fullPath;
    }
    else if ( route.path.startsWith("/member") ) {
      tabsState.hrefMember = route.fullPath;
    }
    else if ( route.path.startsWith("/article") ) {
      tabsState.hrefArticle = route.fullPath;
    }
    else if ( route.path.startsWith("/setting") ) {
      tabsState.hrefSetting = route.fullPath;
    }
    /* ionic 리다이렉트 URL로의 다중클릭으로 인한 버그를 고치기 위한 코드 - 끝 */

    return {
      globalState,
      tabsState
    }
  }
}
</script>