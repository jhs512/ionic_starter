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
            <ion-item>
              <ion-label position="floating">로그인아이디</ion-label>
              <ion-input ref="loginIdInput" maxlength="20"></ion-input>
            </ion-item>
          </div>
          <div>
            <ion-item>
              <ion-label position="floating">로그인비번</ion-label>
              <ion-input maxlength="20" type="password"></ion-input>
            </ion-item>
          </div>
          <div class="py-2 px-4">
            <ion-button expand="block">로그인</ion-button>
          </div>

          <div class="py-2 px-4">
            아직 <ion-custom-link to="/member/join">회원가입</ion-custom-link>을 하지 않으셨나요?
          </div>
        </form>
      </ion-custom-body>
    </ion-content>
  </ion-page>
</template>

<style>

</style>

<script lang="ts">
import { IonCustomBody, IonCustomLink } from '@/components';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonInput, IonItem, IonButton } from '@ionic/vue';
import { useGlobalState } from '@/stores'
import { onMounted, ref } from 'vue';

export default  {
  name: 'Login',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonLabel, IonInput, IonItem, IonButton, IonCustomBody, IonCustomLink },
  setup() {
    const globalState = useGlobalState();

    const loginIdInput = ref();

    onMounted(async () => {
      if ( !!loginIdInput.value == false ) return;

      setTimeout(async () => {
        await loginIdInput.value.$el.setFocus();
      }, 2000);

      /*
      loginIdInput.value.$el.getInputElement().then((input: any) => {
        input.value = 555;
      });
      */
      
      
      //const input = await loginIdInput.value.$el.getInputElement();
    });

    return {
      globalState,
      loginIdInput
    }
  }
}
</script>