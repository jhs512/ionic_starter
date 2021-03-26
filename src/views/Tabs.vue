<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="homeOutline" />
          <ion-label>홈</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="member" href="/member">
          <ion-icon :icon="accessibilityOutline" />
          <ion-label>회원</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="article" href="/article">
          <ion-icon :icon="listOutline" />
          <ion-label>게시물</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="setting" href="/setting">
          <ion-icon :icon="settingsOutline" />
          <ion-label>세팅</ion-label>
        </ion-tab-button>
        
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { homeOutline, listOutline, settingsOutline, accessibilityOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      listOutline, 
      settingsOutline,
      homeOutline,
      accessibilityOutline
    }
  }
}
</script>