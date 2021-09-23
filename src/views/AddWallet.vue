<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add Wallet</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/vue"
import { ref } from 'vue'

export default {
  name: "AddWallet",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  },
  setup() {
    const info = ref([
      {
        title: 'Create a Wallet',
        description: 'If you don\'t have a XRD wallet or you want to start to stack, this is the best place to start.',
        link: 'Create Wallet',
        url: '/create-wallet'
      },
      {
        title: 'Add a Wallet',
        description: 'If you already created a wallet you can add it here. Please have your seed phrase handy for the setup.',
        link: 'Add Wallet',
        url: '/add-wallet'
      }
    ])

    return { info }
  }
}
</script>

<style scoped>

</style>
