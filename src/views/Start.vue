<template>
  <ion-page>
    <ion-header>
    </ion-header>
    <ion-content>
      <section class="px-6 mt-10">
          <login-cards :info="info"/>
      </section>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue"
import LoginCards from '../components/LoginCards.vue'
import { ref } from 'vue'

export default {
  name: "Start",
  components: {
    IonPage,
    IonContent,
    LoginCards
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
