<template>
  <div class="home-nav">
    <nav-bar>
      <template v-slot:center>
        <div>商城</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
import { getHomeMultidata } from "@/network/home";

export default {
  components: { NavBar },
  name: "Home",
  data() {
    return {
      bannerData: [],
      recommendData: [],
    };
  },
  components: {
    NavBar,
  },

  //組件創建完後開始發送網路請求
  created() {
    //請求多個數據
    getHomeMultidata().then((result) => {
      //把回傳結果存到data
      this.bannerData = result.data.banner.list;
      this.recommendData = result.data.recommend.list;
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
