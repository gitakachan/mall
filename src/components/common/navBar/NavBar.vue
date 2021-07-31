<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.nav-bar {
  display: flex;
  height: 8vh;
  line-height: 8vh;
  text-align: center;
  box-shadow: 0 1px 7px #ccc;
  font-size: 1.5rem;

  .left {
    width: 20%;
  }
  .center {
    width: 60%;
  }
  .right {
    width: 20%;
  }
}
</style>
