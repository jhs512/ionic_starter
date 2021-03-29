<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>회원 - 로그인</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">회원 - 로그인</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-custom-body class="items-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ullam neque, a ratione assumenda amet omnis eligendi accusamus deserunt dicta, maiores iusto qui sunt voluptas excepturi aliquam consequatur, harum sed.
      </ion-custom-body>
    </ion-content>
  </ion-page>
</template>

<style>

</style>

<script lang="ts">
import { IonCustomBody } from '@/components';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { useGlobalState } from '@/stores'

export default  {
  name: 'Login',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCustomBody },
  setup() {
    const globalState = useGlobalState();

    return {
      globalState
    }
  }
}
</script>