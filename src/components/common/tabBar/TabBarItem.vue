<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="img" v-if="!isActive">
      <slot name="img"> </slot>
    </div>
    <div class="img" v-else>
      <slot name="imgActive"> </slot>
    </div>
    <div class="item-title" :style="activeStyle">
      <slot name="title"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#f54242",
    },
  },
  data() {
    return {
      // isActive: false,
    };
  },
  computed: {
    isActive() {
      //看當前處於活躍的路由path是否包含當前組件的path
      //{path:"/home"} vs. this.path ?
      return this.$route.path.indexOf(this.path) !== -1;
    },
    //綁定style
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      //console.log(this.path);
      this.$router.push(this.path);
    },
  },
};
</script>
<style lang="scss" scoped>
.tab-bar-item {
  flex: 1;
  padding: 1% 3%;
  display: flex;
  flex-direction: column;

  .img {
    height: 60%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      margin-bottom: 2%;
    }
  }
  .item-title {
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
  }
}
</style>
