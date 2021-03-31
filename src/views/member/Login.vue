<template>
  <ion-page>
    <ion-custom-header>회원 - 로그인</ion-custom-header>
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

        <form @submit.prevent="checkAndLogin">
          <div>
            <ion-item>
              <ion-label position="floating">로그인아이디</ion-label>
              <ion-input v-model="loginFormState.loginId" maxlength="20"></ion-input>
            </ion-item>
          </div>
          <div>
            <ion-item>
              <ion-label position="floating">로그인비번</ion-label>
              <ion-input v-model="loginFormState.loginPw" maxlength="20" type="password"></ion-input>
            </ion-item>
          </div>
          <div class="py-2 px-4">
            <ion-button type="submit" expand="block">로그인</ion-button>
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonInput, IonItem, IonButton } from '@ionic/vue';
import {IonCustomBody, IonCustomHeader, IonCustomLink} from '@/components/';
import { useGlobalState } from '@/stores'
import { reactive } from 'vue';
import { useMainService } from '@/services';
import { useRouter } from 'vue-router';
import * as util from "@/utils";

const useLoginFormState = () => {
  return reactive({
    loginId: "",
    loginPw: "",
  });
};

export default  {
  name: 'Login',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonLabel, IonInput, IonItem, IonButton, IonCustomBody, IonCustomLink, IonCustomHeader },
  setup() {
    const globalState = useGlobalState();
    const loginFormState = useLoginFormState();
    
    const router = useRouter();
    const mainService = useMainService();

    async function login(loginId: string, loginPw: string) {
      
      const axiosResponse = await mainService.member_authKey(loginId, loginPw)

      util.showAlert(axiosResponse.data.msg);

      if ( axiosResponse.data.fail ) {
        return;
      }
      const authKey = axiosResponse.data.body.authKey;
      const loginedMember = axiosResponse.data.body.member;

      globalState.setLogined(authKey, loginedMember);
      
      router.replace('/');
    }

    function checkAndLogin() {
      if ( loginFormState.loginId.trim().length == 0 ) {
        alert('로그인아이디를 입력해주세요.');
        return;
      }

      if ( loginFormState.loginPw.trim().length == 0 ) {
        alert('로그인비밀번호를 입력해주세요.');
        return;
      }

      login(loginFormState.loginId, loginFormState.loginPw);
    }

    return {
      globalState,
      loginFormState,
      checkAndLogin
    }
  }
}
</script>