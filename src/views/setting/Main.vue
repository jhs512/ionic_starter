<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>세팅 - 메인</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">세팅 - 메인</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-content>
  </ion-page>
</template>

<style>

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { useGlobalState } from '@/stores'
import { useMainApi } from '@/apis';
//import { useRouter, useRoute } from 'node_modules/vue-router/dist/vue-router';

export default  {
  name: 'Main',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    const globalState = useGlobalState();
    //const router = useRouter();
    //const route = useRoute();

    const mainApi = useMainApi();

    return {
      globalState
    }
  }
}
</script>