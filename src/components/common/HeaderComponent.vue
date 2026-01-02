<template>
  <!--Mobile-->
  <header
    v-if="isMobile"
    class="w-full sticky h-[100vh] top-0 flex flex-col justify-center transition-all duration-500 shadow-[0px_10px_20px_0px_rgba(0,0,0,0.08)]"
  >
    <div class="px-[20px]">
      <TypographyTag
        type="h1"
        :isMobile="isMobile"
        v-for="(text, index) in title"
        :key="`text-${index}`"
        :class="index === 1 ? 'text-green-01' : undefined"
        >{{ text }}</TypographyTag
      >
      <TypographyTag type="h4" className="whitespace-pre-line mt-[35px] font-normal"> {{ intro }}</TypographyTag>
      <div class="flex justify-end items-center mt-[20px]">
        <DetailButton buttonName="MORE" @click="openAboutMeModal" />
      </div>
    </div>
    <!--scroll down-->
    <div class="absolute flex justify-center items-center bottom-[30px] w-full">
      <caption class="text-green-01 font-medium text-[1.2rem] leading-[1.6rem]" @click="onClickScroll">
        SCROLL DOWN
      </caption>
    </div>
  </header>
  <!--PC-->
  <header v-else class="w-full sticky pt-[40px] pb-[60px] top-0">
    <div class="w-[1000px] mx-auto">
      <div class="mt-[30px] mb-[52px]">
        <TypographyTag type="h1">{{ title[0] }}</TypographyTag>
        <TypographyTag type="h1" className="text-green-01">{{ title[1] }}</TypographyTag>
        <TypographyTag type="h1">{{ title[2] }}</TypographyTag>
      </div>

      <div class="flex justify-between items-end">
        <TypographyTag type="h4" className="whitespace-pre-line font-normal">
          {{ intro }}
        </TypographyTag>
        <DetailButton buttonName="More" @click="openAboutMeModal" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import TypographyTag from '../typography/TypographyTag.vue'
import AboutMeModal from './modal/AboutMeModal.vue'
import { headerData } from '@/data/static'
import DetailButton from './DetailButton.vue'
import { useModal } from '@/composables/useModal'
import { useResponsive } from '@/composables/useResponsive'

const { title, intro } = headerData
const { openModal } = useModal()
const { isMobile } = useResponsive()

const openAboutMeModal = () => {
  openModal({
    component: AboutMeModal,
    props: {
      title: '어떤 사람인가요?',
    },
  })
}

//스크롤 버튼 클릭
const onClickScroll = () => {
  const pageHeight = window.innerHeight
  window.scrollTo({ top: pageHeight, behavior: 'smooth' })
}
</script>
