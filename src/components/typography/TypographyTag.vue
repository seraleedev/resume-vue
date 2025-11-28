<template>
  <component :is="type" :class="classes" v-bind="$attrs">
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
