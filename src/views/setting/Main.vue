<template>
  <ion-page>
    <ion-custom-header>세팅 - 메인</ion-custom-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">세팅 - 메인</ion-title>
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
import { useMainApi } from '@/apis';
import {IonCustomBody, IonCustomHeader} from '@/components/';

export default  {
  name: 'Main',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCustomBody, IonCustomHeader },
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