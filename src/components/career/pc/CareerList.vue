<template>
  <div class="grid grid-cols-[1fr_2fr] gap-[20px]">
    <!-- companyInfo -->
    <div class="basis-[460px]">
      <TypographyTag type="h3" class="font-semibold">{{ company }}</TypographyTag>
      <TypographyTag type="p" class-name="mt-[10px] text-gray-7d whitespace-pre-wrap">{{ history }}</TypographyTag>
    </div>

    <!-- ServiceWithRole -->
    <div>
      <div class="w-full flex justify-between">
        <TypographyTag type="h3" class="font-semibold">{{ role }}</TypographyTag>
      </div>

      <TypographyTag type="p" class-name="mt-[10px] font-semibold">{{ work }}</TypographyTag>
      <TypographyTag type="p" class-name="mt-[15px] mb-[30px] whitespace-pre-line max-w-[760px]" v-if="description">{{
        description
      }}</TypographyTag>
      <!-- ProjectItems -->

      <!--keyword-->
    </div>
    <!--Divider-->
  </div>
</template>

<script setup lang="ts">
import TypographyTag from '@/components/typography/TypographyTag.vue'
import { ICareerData } from '@/data/static'

interface ICareerListProps {
  careerData: ICareerData
  showDivder?: boolean
}

const props = withDefaults(defineProps<ICareerListProps>(), {
  showDivder: false,
})

const { company, work, history, role, description, techs, projectList, onlyTitle, projectDetail } = props.careerData
</script>

=
