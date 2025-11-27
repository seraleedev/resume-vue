<template>
  <!-- <nav>
    <router-link to="/hello">Hello</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const windowSize = ref(0)

const handleResize = () => {
  windowSize.value = window.innerWidth
  console.log(windowSize.value)
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style lang="scss">
@import '@/assets/scss/reset.scss';
@import '@/assets/scss/global.scss';
</style>
