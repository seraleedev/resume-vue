<template>
  <MainComponent></MainComponent>
</template>

<script>
import MainComponent from '@/components/pages/Main.vue'

export default {
  name: 'MainView',
  components: {
    MainComponent,
  },
  data() {
    return {
      width: 0,
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth
      console.log(this.width)
    },
  },
}
</script>
