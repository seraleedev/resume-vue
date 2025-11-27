<template>
  <header class="header">
    <div class="container">
      <div class="wrapper">
        <TypographyTag type="h1">{{ title[0] }}</TypographyTag>
        <TypographyTag type="h1" color="text-green-01">{{ title[1] }}</TypographyTag>
        <TypographyTag type="h1">{{ title[2] }}</TypographyTag>
      </div>
      <TypographyTag type="h4">
        {{ intro }}
      </TypographyTag>
    </div>
  </header>
</template>

<script setup lang="ts">
import TypographyTag from '../common/typography/TypographyTag.vue'
import { headerData } from '@/data/static'

const { title, intro } = headerData
const onClickBtn = () => {
  window.print()
}
</script>

<style scoped>
.header {
  width: 100%;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.08);
  padding: 40px 0 60px;
  position: relative;
  top: 0;
  transition: all 0.5s;
}
h1 {
  font-size: 6rem;
  line-height: 7.5rem;
  font-weight: 700;
}

h4 {
  font-size: 1.8rem;
  line-height: 2.6rem;
  font-weight: 400;
}
.green {
  color: #158000;
}
.container {
  width: 1000px;
  margin: 0 auto;
}
.wrapper {
  margin: 30px 0 52px;
}
</style>
