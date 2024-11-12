<script setup>
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
  const notify = new Notification('通知のテスト', options)
  setTimeout(randomNotification, 30000)
}
</script>

<template>
  <div class="bg-amber-500">Hello, Vue 3! with Vite PWA</div>
  <button
    class="bg-amber-600 text-white px-4 py-2 rounded-2xl"
    @click="authorizeNotification()"
  >
    通知を許可する
  </button>
</template>

<style scoped></style>
