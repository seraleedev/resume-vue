<template>
  <HeaderComponent />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import MainComponent from '@/components/pages/MainComponent.vue'
import HeaderComponent from '@/components/common/HeaderComponent.vue'

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
