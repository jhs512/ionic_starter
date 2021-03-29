<template>
  <router-link>
    <ion-text :color="color" class="underline">
      <slot></slot>
    </ion-text>
  </router-link>
</template>

<style scoped lang="scss">

</style>

<script lang="ts">

import { IonText } from '@ionic/vue'

export default {
  components: { IonText },
  props: {
    color: {
      default: "primary"
    }
  },
  name: 'IonCustomLink',
}
</script>