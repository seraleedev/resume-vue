<template>
  <footer class="w-full bg-white relative">
    <div class="container-custom">
      <div class="flex justify-between w-full py-[30px]">
        <TypographyTag type="p">seraLeeDev@gmail.com</TypographyTag>

        <div class="flex justify-start gap-[15px]">
          <TypographyTag
            type="a"
            target="_blank"
            :href="data.link"
            v-for="data in contactData"
            :key="data.platform"
            >{{ data.platform }}</TypographyTag
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { contactData } from '@/data/static'
import TypographyTag from '../typography/TypographyTag.vue'
</script>

<style lang="scss" scoped></style>
