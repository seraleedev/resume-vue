<template>
  <!-- <nav>
    <router-link to="/hello">Hello</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      windowSize: 0,
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
      this.windowSize = window.innerWidth
      console.log(this.windowSize)
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/reset.scss';
@import '@/assets/scss/global.scss';
</style>
