<template>
  <ion-header>
    <ion-toolbar>
      <div class="pr-5" slot="end">
        <img class="rounded-full" src="https://i.pravatar.cc/45?img=13" alt="">
      </div>
      <ion-title>
        <slot></slot>
      </ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
export default {
  name: 'IonCustomHeader',
}
</script>