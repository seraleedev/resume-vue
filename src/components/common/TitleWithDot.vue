<template>
  <div :class="$attrs.class || 'my-[32px]'">
    <div class="w-[13px] h-[13px] rounded-xl bg-green-01" />
    <TypographyTag type="h2" class="ml-[13px]">{{ title }}</TypographyTag>
  </div>
</template>

<script setup lang="ts">
import TypographyTag from '../typography/TypographyTag.vue'

interface Props {
  title: string
}

defineProps<Props>()
defineOptions({ inheritAttrs: false })
</script>
