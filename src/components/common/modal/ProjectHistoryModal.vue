<template>
  <div class="mb-[30px]" v-for="project in gatdaProject" :key="project.id">
    <TypographyTag class="font-semibold mb-[20px]" type="h3"
      >{{ project.id }}. {{ project.projectName }} (기여도 {{ project.rate }}%)</TypographyTag
    >
    <!--MainProjectDetailItem-->
    <div
      class="flex justify-start gap-[5px] items-center"
      v-for="(content, index) in Object.entries(project.content)"
      :key="`content-${index}`"
    >
      <ListDot />
      <TypographyTag type="p">{{ createListName(content[0]) }} : </TypographyTag>
      <TypographyTag type="p">{{ content[1] }}</TypographyTag>
    </div>

    <!--기여한 부분-->
    <div class="flex justify-start gap-[5px] items-center">
      <ListDot />
      <TypographyTag type="p">기여한 부분 : </TypographyTag>
    </div>

    <TypographyTag
      type="p"
      class="text-gray-7d pl-[10px]"
      v-for="(text, index) in project.contribution"
      :key="`text-${index}`"
      >- {{ text }}</TypographyTag
    >
  </div>
</template>

<script setup lang="ts">
import ListDot from '../ListDot.vue'
import TypographyTag from '@/components/typography/TypographyTag.vue'
import { gatdaProject } from '@/data/static'

const createListName = (contentTitle: string) => {
  switch (contentTitle) {
    case 'goal':
      return '목표'
    case 'range':
      return '범위'
    case 'period':
      return '기간'
    case 'member':
      return '구성원'
    case 'tech':
      return '사용기술'
    default:
      return ''
  }
}
</script>
