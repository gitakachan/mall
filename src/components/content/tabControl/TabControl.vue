<template>
  <div class="tab-control">
    <div
      v-for="(item, idx) in titles"
      :key="item"
      class="tab-control-item"
      :class="{ active: idx == currentIndex }"
      @click="itemClick(idx)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    //標題文字
    titles: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(idx) {
      this.currentIndex = idx;
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/all.scss";
.tab-control {
  display: flex;
  box-shadow: 0 5px 8px rgb(145, 142, 141);
  margin-bottom: 5px;

  .tab-control-item {
    flex: 1;
    background-color: $primary;
    color: #fff;
    height: 8vh;
    max-height: 50px;
    span {
      display: inline-block;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      position: relative;
      transition: border-color 0.5s ease-in;

      &::after {
        content: "";
        display: block;
        border-bottom: 2px solid #fff;
        width: 80%;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        bottom: 3px;
      }
    }
    &.active {
      background-color: #fff;
      color: #000;
      position: relative;

      &::after {
        content: "";
        display: block;
        border-bottom: 2px solid $primary;
        width: 80%;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        bottom: 3px;
      }
    }
  }
}
</style>
