<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>홈 - 메인</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">홈 - 메인</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="bg-red-500">
        {{globalState.isLogined}}
      </div>
    </ion-content>
  </ion-page>
</template>

<style>

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { useGlobalState } from '@/stores'

export default  {
  name: 'Main',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    const globalState = useGlobalState();

    return {
      globalState
    }
  }
}
</script>