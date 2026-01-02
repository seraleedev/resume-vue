<template>
  <button
    :class="[
      'flex justify-center items-center cursor-pointer outline-none transition-all duration-300 hover:bg-gray-ed bg-white border-none',
      $attrs.class || 'w-auto h-auto rounded-[5px]',
    ]"
    v-bind="attrsWithoutClass"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { useAttrs, computed } from 'vue'

defineOptions({ inheritAttrs: false })

const attrs = useAttrs()

// class를 제외한 나머지 속성 (이벤트 포함)
const attrsWithoutClass = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...rest } = attrs
  return rest
})
</script>
