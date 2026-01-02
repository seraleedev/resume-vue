<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="isOpen"
        id="modal-overlay"
        @click="closeModal"
        :style="{ top: scrollY + 'px' }"
        class="absolute w-full h-[100vh] bg-black/20 z-50 cursor-pointer"
      >
        <div id="modal-wrapper" class="container-custom h-[100%] flex justify-center relative items-center">
          <div
            id="modal-container"
            @click.stop
            class="bg-white w-full max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-[5px] relative"
          >
            <!--Header -->
            <div
              id="modal-header"
              class="container-custom bg-white pt-[40px] pb-[20px] px-[40px] rounded-t-[5px] sticky top-0"
            >
              <div class="flex justify-between items-center">
                <TitleWithDot :title="modalTitle" class="my-0" />
                <DefaultButton class="rounded-[100%] w-[50px] h-[50px]" @click="closeModal">
                  <Icon icon="bi:arrow-left" width="20" height="20" class="text-green-01" />
                </DefaultButton>
              </div>
              <TypographyTag type="h4" class="mt-[10px] text-gray-7d font-normal">{{ modalSubTitle }}</TypographyTag>
            </div>
            <!--Header -->

            <div id="modal-body" class="w-full bg-white px-[40px] py-[20px] rounded-b-[5px]">
              <component :is="modalComponent" v-bind="modalProps" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { useModal } from '@/composables/useModal'
import TitleWithDot from '../TitleWithDot.vue'
import { Icon } from '@iconify/vue'
import TypographyTag from '@/components/typography/TypographyTag.vue'
import DefaultButton from '../DefaultButton.vue'

const { isOpen, modalComponent, modalProps, closeModal } = useModal()
const modalTitle = computed(() => (typeof modalProps.value.title === 'string' ? modalProps.value.title : ''))
const modalSubTitle = computed(() => (typeof modalProps.value.subTitle === 'string' ? modalProps.value.subTitle : ''))
const scrollY = ref(0)

const updateScrollY = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  updateScrollY()
  window.addEventListener('scroll', updateScrollY)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollY)
})
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.3s ease-out;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-to,
.modal-fade-leave-from {
  opacity: 1;
}
</style>
