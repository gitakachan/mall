<template>
  <div class="home">
    <div class="home-nav">
      <nav-bar>
        <template v-slot:center>
          <div>商城</div>
        </template>
      </nav-bar>
    </div>
    <carousel height="auto" :banner="bannerData"></carousel>
    <recommend :recommend="recommendData"></recommend>
  </div>
</template>

<script>
//組件
import NavBar from "@/components/common/navBar/NavBar";
import Carousel from "./carousel/Carousel";
import Recommend from "./recommend/Recommend";

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
    Recommend,
  },

  //組件創建完後開始發送網路請求
  created() {
    //請求多個數據
    getHomeMultidata().then((result) => {
      //把回傳結果存到data
      this.bannerData = result.data.banner.list;
      this.recommendData = result.data.recommend.list;
      console.log(this.recommendData);
    });
  },
};
</script>
<style lang="scss">
.home {
  transform: none;
  .home-nav {
    background-color: rgb(238, 104, 94);
    color: #fff;
    font-size: 1.2rem;
  }
}
</style>
