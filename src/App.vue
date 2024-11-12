<script setup>
import { ref } from 'vue'

const authorizeNotification = () => {
  Notification.requestPermission().then(function (result) {
    if (result === 'granted') {
      randomNotification()
    }
  })
}
function randomNotification() {
  const options = {
    body: '通知だよ〜〜〜',
    icon: 'https://ja.vite.dev/logo.svg'
  }
  notificationCount.value++
  console.log('通知を送信')
  const notify = new Notification('通知のテスト', options)
  setTimeout(randomNotification, notificationFrequency.value)
}
const notificationCount = ref(0)
const notificationFrequency = ref(30000)
</script>

<template>
  <div class="bg-amber-500">Hello, Vue 3! with Vite PWA</div>
  <label>
    通知の頻度（ミリ秒）
    <input class="border-2" v-model="notificationFrequency" />
  </label>
  <button
    class="bg-amber-600 text-white px-4 py-2 rounded-2xl"
    @click="authorizeNotification()"
  >
    通知を許可する
  </button>
  <div>通知の送信回数：{{ notificationCount }}</div>
</template>

<style scoped></style>
