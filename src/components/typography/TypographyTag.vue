<template>
  <component :is="type" :class="classes">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { TypoTypes, TypographyProps, getTypoClasses } from './settings'

interface Props extends TypographyProps {
  type?: TypoTypes
}

const props = withDefaults(defineProps<Props>(), {
  type: 'p',
})

const classes = computed(() => getTypoClasses(props.type, props))
</script>
