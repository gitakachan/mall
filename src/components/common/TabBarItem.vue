<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="img"> </slot>
    </div>
    <div v-else>
      <slot name="imgActive"> </slot>
    </div>
    <div :style="activeStyle">
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
<style lang="scss"></style>
