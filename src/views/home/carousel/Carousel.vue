<template>
  <div id="carousel" @mouseover="onHover" @mouseleave="onLeave">
    <v-carousel
      cycle
      v-model="model"
      class="container"
      :show-arrows="isHover"
      height="auto"
      hide-delimiters
    >
      <v-carousel-item v-for="item in banner" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" class="img" />
        </a>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  props: {
    banner: {
      type: Array,
    },
  },
  data: () => ({
    model: 0,
    isHover: false,
  }),
  methods: {
    onHover() {
      return (this.isHover = true);
    },
    onLeave() {
      return (this.isHover = false);
    },
  },
};
</script>
<style lang="scss" scoped>
#carousel {
  .container {
    text-align: center;
    background-color: #a7053b;
    img {
      width: 100%;
      max-width: 800px;
      vertical-align: top;
    }
  }
}
</style>
