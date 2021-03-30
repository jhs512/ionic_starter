<template>
  <ion-page>
    <ion-custom-header>회원 - 내 정보</ion-custom-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">회원 - 내 정보</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-custom-body>
      </ion-custom-body>
    </ion-content>
  </ion-page>
</template>

<style>

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { useGlobalState } from '@/stores'
import {IonCustomBody, IonCustomHeader} from '@/components/';

export default  {
  name: 'MyPage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCustomBody, IonCustomHeader },
  setup() {
    const globalState = useGlobalState();

    return {
      globalState
    }
  }
}
</script>