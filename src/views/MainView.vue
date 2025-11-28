<template>
  <HeaderComponent />
  <CareerSection />
  <FooterComponent />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import FooterComponent from '@/components/common/FooterComponent.vue'
import HeaderComponent from '@/components/common/HeaderComponent.vue'
import CareerSection from '@/components/career/pc/CareerSection.vue'

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
