<template>
  <div class="mt-[20px] gap-x-[20px] gap-y-[15px] grid w-full grid-cols-2" v-if="!onlyTitle">
    <div v-for="(project, index) in projectLists" :key="`project-${index}`">
      <div class="flex gap-[5px] justify-start mb-[10px]">
        <div class="w-[5px] h-[5px] bg-green-01 rounded-xl" />
        <!-- ProjectTitle -->
        <TypographyTag type="p">{{ project.title }}</TypographyTag>

        <!-- ProjectDetail -->
        <div class="flex flex-col gap-[4px] justify-start items-start ml-[10px]">
          <TypographyTag type="p" class="text-gray-7d">{{ project.title }}</TypographyTag>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TypographyTag from '@/components/typography/TypographyTag.vue'
import { IProjectData } from '@/data/static'

interface IProjectItemsProps {
  projectLists: IProjectData[]
  onlyTitle?: boolean
}

withDefaults(defineProps<IProjectItemsProps>(), {
  onlyTitle: false,
})
</script>
