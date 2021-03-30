<template>
  <router-link>
    <ion-text :color="color" class="underline">
      <slot></slot>
    </ion-text>
  </router-link>
</template>

<script lang="ts">

import { IonText } from '@ionic/vue';

export default {
  props: {
    color: {
      default: "primary",
      type: String
    }
  },
  components: {IonText},
  name: 'IonCustomLink',
}
</script>