<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-button expand="block" fill="solid" @click="presentActionSheet">Show Action Sheet1</ion-button>
      <ExploreContainer name="Tab 1 page???" style="background-color:red;" />
    </ion-content>
  </ion-page>
</template>

<style>

</style>

<script lang="ts">
import { IonButton, actionSheetController } from '@ionic/vue';  
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { caretForwardCircle, close, heart, trash, share } from 'ionicons/icons';

export default  {
  name: 'Tab1',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    async function presentActionSheet() {
      const actionSheet = await actionSheetController
        .create({
          header: 'Albums',
          cssClass: 'my-custom-class',
          buttons: [
            {
              text: 'Delete',
              role: 'destructive',
              icon: trash,
              handler: () => {
                console.log('Delete clicked')
              },
            },
            {
              text: 'Share',
              icon: share,
              handler: () => {
                console.log('Share clicked')
              },
            },
            {
              text: 'Play (open modal)',
              icon: caretForwardCircle,
              handler: () => {
                console.log('Play clicked')
              },
            },
            {
              text: 'Favorite',
              icon: heart,
              handler: () => {
                console.log('Favorite clicked')
              },
            },
            {
              text: 'Cancel',
              icon: close,
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked')
              },
            },
          ],
        });
      return actionSheet.present();
    }

    return {
      presentActionSheet
    }
  }
}
</script>