<template>
  <div class="h-screen flex flex-wrap content-center justify-center">
    <div v-for="(items, i) in info" :key="i">
      <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg mt-20 mb-16">
        <div class="flex justify-center -mt-16">
          <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80">
        </div>
        <div>
          <h2 class="text-gray-800 text-3xl font-semibold">{{ items.title }}</h2>
          <p class="mt-2 text-gray-600">{{ items.description }}</p>
        </div>
        <div class="flex justify-end mt-4">
          <a @click="() => router.push(items.url)" class="text-xl font-medium text-indigo-500">{{ items.link }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: "LoginCards.vue",
  props: {
    info: Array,
  },
  setup() {
    const router = useRouter()
    return { router }
  }
}
</script>

<style scoped>

</style>
