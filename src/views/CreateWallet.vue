<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Create New Wallet</ion-title>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <section class="px-6">
        <div>
          <h3>Seed Phrase</h3>
          <div>{{ mnemonic }}</div>
        </div>
        <div>
          <ion-item>
            <ion-label>Input Password</ion-label>
            <ion-input v-model="password" type="password"></ion-input>
          </ion-item>
          <ion-button @click="createWallet">Submit</ion-button>
        </div>
        <div>
          <h3>Wallet</h3>
          <div>{{ wallet }}</div>
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonBackButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/vue"
import { Mnemonic, Wallet, Network, SigningKeychain } from '@radixdlt/application'
import {ref,} from 'vue'

export default {
  name: "CreateWallet",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonLabel,
    IonInput,
    IonItem
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
    const password = ref('')
    let wallet = ref('');
    const mnemonic = Mnemonic.generateNew()

    async function createWallet() {
      // const saveKeystoreOnDisk = (keystore) => {
      //   const filePath = './keystore.json'
      //   const json = JSON.stringify(keystore, null, '\t')
      //   return writeAsync(filePath, json)
      // }

      let keystoreK;
      const walletResult = await SigningKeychain.byEncryptingMnemonicAndSavingKeystore({
        mnemonic,
        password: password.value,
        save: function (keystore) {
          keystoreK = keystore
          console.log(password.value)
          console.log(JSON.stringify(keystore))
          return new Promise((resolve => {
            resolve('YAY')
          }))
        }
      })

      if(walletResult.isErr()) {
        console.log(`🤷‍♂️ Failed to create wallet: ${walletResult.error}`)
      }

      const signingKeychain = walletResult.value
      const network = Network.TESTNET4
      Wallet.create({
        signingKeychain,
        network
      })

      const signingKeychainResult = await SigningKeychain.byLoadingAndDecryptingKeystore({
        password: password.value,
        load: function () {
          return new Promise((resolve => {
            resolve(keystoreK)
          }))
        }
      })

      if (signingKeychainResult.isErr()) {
        console.log(`🤷‍♂️ Failed to create wallet: ${walletResult.error}`)
      }

      console.log(signingKeychainResult._unsafeUnwrap().restoreLocalHDSigningKeysUpToIndex(1))

    }

    return { info, password, mnemonic, wallet, createWallet, }

  }
}
</script>

<style scoped>

</style>
