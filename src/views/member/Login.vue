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

      <ion-custom-body class="justify-center">
        <div class="logo-box text-center">
          <span>
            <span class="text-3xl">
              <font-awesome-icon icon="lemon" />
            </span>
            <span class="font-bold text-3xl">
              DESIGN LEMON
            </span>
          </span>
        </div>

        <form action="">
          <div>
            
          </div>
          <div>

          </div>
          <div>

          </div>
        </form>
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