<template>
  <ion-page>
    <ion-custom-header>게시물 - 상세내용</ion-custom-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">게시물 - 상세페이지</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-custom-body></ion-custom-body>
    </ion-content>
  </ion-page>
</template>

<style>

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import {IonCustomBody, IonCustomHeader} from '@/components/';
import { useGlobalState } from '@/stores'
import { useMainApi } from '@/apis';

export default  {
  name: 'Detail',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCustomBody, IonCustomHeader },
  setup() {
    const globalState = useGlobalState();
    const mainApi = useMainApi();
    
    return {
      globalState
    }
  }
}
</script>