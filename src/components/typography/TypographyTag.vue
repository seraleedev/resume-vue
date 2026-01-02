<template>
  <component :is="type" :class="classes" v-bind="$attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { TypoTypes, TypographyProps, getTypoClasses } from './typoSettings'

interface Props extends TypographyProps {
  type?: TypoTypes
  isMobile?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'p',
  isMobile: false,
})

const classes = computed(() => getTypoClasses(props.type, props))
</script>
