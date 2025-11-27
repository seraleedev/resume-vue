<template>
  <header class="header">
    <div class="container">
      <div class="wrapper">
        <h1>작은 부분부터 실천하는</h1>
        <h1 class="green">Frontend Developer</h1>
        <h1>이슬아입니다.</h1>
      </div>
      <h4>
        안녕하세요, 저는 웹 디자이너에서 시작한 주니어 프론트엔드
        개발자입니다.<br />좋은 코드는 정리하는 습관에서부터 시작된다고
        생각합니다.<br />코드를 해석하고 정리하는 것을 즐기며 가독성과
        유지보수성을 높이는 것에 가치를 둡니다.
      </h4>
    </div>
  </header>
</template>

<script setup lang="ts">
// import { theme } from '../common/common';

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
