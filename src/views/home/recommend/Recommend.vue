<template>
  <div class="items">
    <a v-for="item in recommend" :key="item.title" :href="item.link">
      <recommend-item>
        <template v-slot:img>
          <img :src="item.image" alt="" />
        </template>
        <template v-slot:title>{{ item.title }} </template>
      </recommend-item>
    </a>
  </div>
</template>
<script>
import RecommendItem from "./RecommendItem";

export default {
  name: "Recommend",
  props: {
    recommend: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  components: {
    RecommendItem,
  },
};
</script>
<style lang="scss">
.items {
  display: flex;
  a {
    flex: 1;
    color: #000;
  }
}
</style>
