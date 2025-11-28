<template>
  <div :class="styles">
    <div class="w-[13px] h-[13px] rounded-xl bg-green-01" />

    <TypographyTag type="h2" class="ml-[13px]">{{ title }}</TypographyTag>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TypographyTag from '../typography/TypographyTag.vue'

interface Props {
  classNames?: string
  title: string
}

const props = withDefaults(defineProps<Props>(), {
  classNames: 'my-[32px]',
})

const styles = computed(() => props.classNames)
</script>
