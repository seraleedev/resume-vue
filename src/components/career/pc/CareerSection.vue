<template>
  <section class="w-full bg-white shadow-default relative">
    <div class="container-custom pt-[50px] pb-[150px]">
      <div class="mt-[30px]">
        <TitleWithDot title="어떤 경험을 했나요?" />
        <CareerList
          v-for="(data, index) in careerData"
          :key="data.index"
          :career-data="data"
          :show-divder="index < careerData.length - 1"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TitleWithDot from '@/components/common/TitleWithDot.vue'
import CareerList from './CareerList.vue'
import { careerData } from '@/data/static'
</script>
