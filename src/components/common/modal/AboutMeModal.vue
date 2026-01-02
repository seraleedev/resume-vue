<template>
  <div v-for="(data, index) in aboutMe" :key="index" class="mb-[30px]">
    <TypographyTag type="h3" class="mb-[20px] font-semibold">{{ data.title }}</TypographyTag>
    <TypographyTag type="p" class="whitespace-pre-line">{{ data.description }}</TypographyTag>
  </div>
</template>

<script setup lang="ts">
import TypographyTag from '@/components/typography/TypographyTag.vue'
import { aboutMe } from '@/data/static'
</script>
