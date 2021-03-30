<template>
  <ion-page>
    <ion-custom-header>회원 - 가입</ion-custom-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">회원 - 가입</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-custom-body>
        <div class="bg-red-500">
          {{globalState.isLogined}}
        </div>
      </ion-custom-body>
    </ion-content>
  </ion-page>
</template>

<style>

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import {IonCustomBody, IonCustomHeader} from '@/components/';
import { useGlobalState } from '@/stores'

export default  {
  name: 'Join',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCustomBody, IonCustomHeader },
  setup() {
    const globalState = useGlobalState();

    return {
      globalState
    }
  }
}
</script>