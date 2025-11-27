<template>
  <header class="w-full sticky pt-[40px] pb-[60px] top-0">
    <div class="w-[1000px] mx-auto">
      <div class="mt-[30px] mb-[52px]">
        <TypographyTag type="h1">{{ title[0] }}</TypographyTag>
        <TypographyTag type="h1" className="text-green-01">{{ title[1] }}</TypographyTag>
        <TypographyTag type="h1">{{ title[2] }}</TypographyTag>
      </div>
      <TypographyTag type="h4" className="whitespace-pre-line font-normal">
        {{ intro }}
      </TypographyTag>
    </div>
  </header>
</template>

<script setup lang="ts">
import TypographyTag from '../typography/TypographyTag.vue'
import { headerData } from '@/data/static'

const { title, intro } = headerData
</script>
