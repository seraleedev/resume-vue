<template>
  <div v-if="onlyTitle" class="mt-[15px]">
    <div v-for="(project, index) in projectLists" :key="`project-${index}`">
      <!-- ProjectTitle -->
      <div class="flex gap-[5px] justify-start mb-[10px] items-center">
        <ListDot />
        <TypographyTag type="p">{{ project.title }}</TypographyTag>
      </div>
    </div>
  </div>

  <div class="mt-[20px] gap-x-[20px] gap-y-[15px] grid w-full grid-cols-2" v-else>
    <div v-for="(project, index) in projectLists" :key="`project-${index}`">
      <!-- ProjectTitle -->
      <div class="flex gap-[5px] justify-start mb-[10px] items-center">
        <ListDot />
        <TypographyTag type="p">{{ project.title }}</TypographyTag>
      </div>
      <!-- ProjectDetail -->
      <div class="flex flex-col gap-[4px] justify-start items-start ml-[10px]">
        <TypographyTag type="p" class="text-gray-7d" v-for="(detail, index) in project.detail" :key="index">{{
          detail
        }}</TypographyTag>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TypographyTag from '@/components/typography/TypographyTag.vue'
import ListDot from '@/components/common/ListDot.vue'
import { IProjectData } from '@/data/static'

interface IProjectItemsProps {
  projectLists: IProjectData[]
  onlyTitle?: boolean
}

withDefaults(defineProps<IProjectItemsProps>(), {
  onlyTitle: false,
})
</script>
