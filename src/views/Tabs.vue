<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home/main">
          <font-awesome-icon class="text-lg h-7" icon="home" />
          <ion-label>홈</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="member" :href="globalState.isLogined ? '/member/myPage' : '/member/login'">
          <font-awesome-icon class="text-lg h-7" icon="user" />
          <ion-label>회원</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="article" href="/article/list">
          <font-awesome-icon class="text-lg h-7" icon="list" />
          <ion-label>게시물</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="setting" href="/setting/main">
          <font-awesome-icon class="text-lg h-7" icon="cog" />
          <ion-label>세팅</ion-label>
        </ion-tab-button>
        
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonPage } from '@ionic/vue';
import { homeOutline, listOutline, settingsOutline, accessibilityOutline } from 'ionicons/icons';
import { useGlobalState } from '@/stores';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonPage },
  setup() {
    const globalState = useGlobalState();

    return {
      globalState,
      listOutline, 
      settingsOutline,
      homeOutline,
      accessibilityOutline
    }
  }
}
</script>