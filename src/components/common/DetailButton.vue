<template>
  <TypographyTag type="p" class="text-gray-7d cursor-pointer">{{ buttonName }} &gt;</TypographyTag>
</template>

<script setup lang="ts">
import TypographyTag from '../typography/TypographyTag.vue'

interface IDetailButtonProps {
  buttonName: string
}

defineProps<IDetailButtonProps>()
</script>
