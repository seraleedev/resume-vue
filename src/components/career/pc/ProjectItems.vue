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

  <div class="mt-[20px] gap-x-[20px] gap-y-[15px] grid w-full grid-cols-2" v-if="!onlyTitle">
    <div v-for="(project, index) in projectLists" :key="`project-${index}`">
      <!-- ProjectTitle -->
      <div class="flex gap-[5px] justify-start mb-[10px] items-center">
        <ListDot />
        <TypographyTag type="p">{{ project.title }}</TypographyTag>
      </div>
      <!-- ProjectDetail -->
      <div
        class="flex flex-col gap-[4px] justify-start items-start ml-[10px]"
        v-for="(detail, index) in project.detail"
        :key="index"
      >
        <TypographyTag type="p" class="text-gray-7d">{{ detail }}</TypographyTag>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import TypographyTag from '@/components/typography/TypographyTag.vue'
import { IProjectData } from '@/data/static'

const ListDot = () => {
  return h('div', { class: 'w-[5px] h-[5px] bg-green-01 rounded-xl' })
}

interface IProjectItemsProps {
  projectLists: IProjectData[]
  onlyTitle?: boolean
}

withDefaults(defineProps<IProjectItemsProps>(), {
  onlyTitle: false,
})
</script>
