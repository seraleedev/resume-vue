<template>
  <MainComponent></MainComponent>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import MainComponent from '@/components/pages/MainComponent.vue'

const width = ref(0)

const handleResize = () => {
  width.value = window.innerWidth
  console.log(width.value)
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
