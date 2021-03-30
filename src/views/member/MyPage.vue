<template>
  <ion-page>
    <ion-custom-header>회원 - 내 정보</ion-custom-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">회원 - 내 정보</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-custom-body class="justify-center">
        <div class="logo-box text-center">
          <ion-button @click="logout" expand="block">로그아웃</ion-button>
        </div>
      </ion-custom-body>
    </ion-content>
  </ion-page>
</template>

<style>

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import { useGlobalState } from '@/stores'
import {IonCustomBody, IonCustomHeader} from '@/components/';
import { useRouter } from 'vue-router';

export default  {
  name: 'MyPage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCustomBody, IonCustomHeader, IonButton },
  setup() {
    const globalState = useGlobalState();
    const router = useRouter();

    const logout = () => {
      globalState.setLogouted();
      router.replace('/member/login');
    };

    return {
      globalState,
      logout
    }
  }
}
</script>