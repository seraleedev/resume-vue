<template>
  <article class="w-full bg-green-02 relative pt-[60px] pb-[120px]">
    <div class="container-custom">
      <TypographyTag type="h1" class="text-white mb-[60px]">지향하는 것.</TypographyTag>
      <!-- DirectionList -->
      <div class="grid grid-cols-2 gap-x-[170px] gap-y-[30px]">
        <div v-for="(direction, index) in directionData" :key="`keyword-${index}`">
          <TypographyTag type="h4" class="text-white font-medium">{{ direction.keyword }}</TypographyTag>
          <TypographyTag type="p" class="mt-[13px] whitespace-pre-line text-white">{{
            direction.description
          }}</TypographyTag>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import TypographyTag from '@/components/typography/TypographyTag.vue'
import { directionData } from '@/data/static'
</script>

<style scoped></style>
