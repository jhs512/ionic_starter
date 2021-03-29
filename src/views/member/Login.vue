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
        <div class="logo-box flex justify-center">
          <span class="text-4xl">
            <font-awesome-icon icon="user" />
          </span>
          <span class="ml-1 text-4xl font-bold">Design Lemon</span>
        </div>

        <form>
          <div>
              <ion-item>
                <ion-label position="floating">로그인아이디</ion-label>
                <ion-input v-model="loginFormState.loginId"></ion-input>
              </ion-item>
          </div>
          <div>
            <ion-item>
                <ion-label position="floating">로그인비번</ion-label>
                <ion-input v-model="loginFormState.loginPw"></ion-input>
              </ion-item>
          </div>
          <div class="py-2 px-3">
            <ion-button expand="block">로그인</ion-button>
          </div>
          <div class="py-2 px-3">
            아직 회원이 아니신가요? <ion-custom-link to="/member/join">회원가입</ion-custom-link>을 먼저 진행해주세요.
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
import { reactive } from 'vue';

const useLoginFormState = () => {
  return reactive({
    loginId:'',
    loginPw:''
  });
};

export default  {
  name: 'Login',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCustomBody, IonCustomLink, IonLabel, IonInput, IonItem, IonButton },
  setup() {
    const globalState = useGlobalState();    
    const loginFormState = useLoginFormState();

    loginFormState.loginId = '안녕';

    return {
      globalState,
      loginFormState
    }
  }
}
</script>