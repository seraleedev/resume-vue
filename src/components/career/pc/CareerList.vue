<template>
  <div class="grid grid-cols-[1fr_2fr] gap-[20px]">
    <!-- companyInfo -->
    <div class="basis-[460px]">
      <TypographyTag type="h3" class="font-semibold">{{ company }}</TypographyTag>
      <TypographyTag type="p" class="mt-[10px] text-gray-7d whitespace-pre-wrap">{{ history }}</TypographyTag>
    </div>

    <div>
      <!-- ServiceWithRole -->
      <div class="w-full flex justify-between items-center">
        <TypographyTag type="h3" class="font-semibold">{{ role }}</TypographyTag>
        <!-- ProjectDetail -->
        <DetailButton buttonName="About project" v-if="projectDetail" @click="openProjectDetailModal" />
      </div>

      <TypographyTag type="p" class="mt-[10px] font-semibold">{{ work }}</TypographyTag>
      <TypographyTag type="p" class="mt-[15px] mb-[30px] whitespace-pre-line max-w-[760px]" v-if="description">{{
        description
      }}</TypographyTag>
      <!-- ProjectItems -->
      <ProjectItems :project-lists="projectList" :only-title="onlyTitle" />
      <!--tech keyword-->
      <div class="flex justify-start gap-[10px] mt-[30px]">
        <div
          class="text-center px-[12px] py-[8px] border border-solid border-green-01 rounded-md"
          v-for="tech in techs"
          :key="tech"
        >
          <TypographyTag type="p" class="text-[14px] text-green-01 leading-none">#{{ tech }}</TypographyTag>
        </div>
      </div>
    </div>
  </div>
  <!--Divider-->
  <DividerLine v-if="showDivder" />
</template>

<script setup lang="ts">
import TypographyTag from '@/components/typography/TypographyTag.vue'
import { ICareerData } from '@/data/static'
import ProjectItems from './ProjectItems.vue'
import DividerLine from '@/components/common/DividerLine.vue'
import DetailButton from '@/components/common/DetailButton.vue'
import { useModal } from '@/composables/useModal'
import ProjectHistoryModal from '@/components/common/modal/ProjectHistoryModal.vue'

interface ICareerListProps {
  careerData: ICareerData
  showDivder?: boolean
}
const { openModal } = useModal()

const props = withDefaults(defineProps<ICareerListProps>(), {
  showDivder: false,
})

const { company, work, history, role, description, techs, projectList, onlyTitle, projectDetail } = props.careerData
const openProjectDetailModal = () => {
  openModal({
    component: ProjectHistoryModal,
    props: {
      title: '주요 프로젝트',
      subTitle: '모든 프로젝트의 개인 기여도는 작업 구성원을 기준으로 산출되었습니다.',
    },
  })
}
</script>
