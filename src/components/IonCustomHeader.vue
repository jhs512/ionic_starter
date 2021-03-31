<template>
  <ion-header>
    <ion-toolbar>
      <div class="pr-5" slot="end">
        <router-link v-if="globalState.isLogined" to="/member/myPage" class="cursor-pointer"><img class="rounded-full" :src="mainService.getMemberThumbImgUrl(globalState.loginedMember.id)" alt=""></router-link>
      </div>
      <ion-title>
        <slot></slot>
      </ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import { useGlobalState } from '@/stores'
import { useMainService } from '@/services'
import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';

export default {
  name: 'IonCustomHeader',
  components: {IonHeader, IonToolbar, IonTitle},
  setup() {
    const globalState = useGlobalState();
    const mainService = useMainService();

    return {
      globalState,
      mainService
    }
  }
}
</script>