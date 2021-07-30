<template>
  <div class="item">
    <div class="img">
      <slot name="img"></slot>
    </div>
    <div class="title">
      <slot name="title"></slot>
    </div>
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
.item {
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 90%;
  }
}
</style>
