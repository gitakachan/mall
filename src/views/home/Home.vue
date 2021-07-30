<template>
  <div>
    <div class="home-nav">
      <nav-bar>
        <template v-slot:center>
          <div>商城</div>
        </template>
      </nav-bar>
    </div>
    <carousel :banner="bannerData"></carousel>
    <h1>title</h1>
  </div>
</template>

<script>
//組件
import NavBar from "@/components/common/navBar/NavBar";
import Carousel from "./carousel/Carousel.vue";

//網路慶請求函數
import { getHomeMultidata } from "@/network/home";

export default {
  name: "Home",
  data() {
    return {
      bannerData: [],
      recommendData: [],
    };
  },
  components: {
    NavBar,
    Carousel,
  },

  //組件創建完後開始發送網路請求
  created() {
    //請求多個數據
    getHomeMultidata().then((result) => {
      //把回傳結果存到data
      this.bannerData = result.data.banner.list;
      this.recommendData = result.data.recommend.list;
      //console.log(this.bannerData);
    });
  },
};
</script>
<style lang="scss">
.home-nav {
  background-color: rgb(238, 104, 94);
  color: #fff;
  font-size: 1.2rem;
}
</style>
