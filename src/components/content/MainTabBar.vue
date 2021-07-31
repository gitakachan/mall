<template>
  <div class="main">
    <tab-bar>
      <template v-slot:items>
        <tab-bar-item path="/home" active-color="#f40">
          <template v-slot:img>
            <img src="~assets/img/tabbar/home.png" alt="" />
          </template>
          <template v-slot:imgActive>
            <img src="~assets/img/tabbar/home-active.png" alt="" />
          </template>
          <template v-slot:title> <div>首頁</div> </template>
        </tab-bar-item>

        <tab-bar-item path="/category">
          <template v-slot:img>
            <img src="~assets/img/tabbar/shopping-bag.png" alt="" />
          </template>
          <template v-slot:imgActive>
            <img src="~assets/img/tabbar/shopping-bag-active.png" alt="" />
          </template>
          <template v-slot:title>
            <div>分類</div>
          </template>
        </tab-bar-item>

        <tab-bar-item path="/cart">
          <template v-slot:img>
            <img src="~assets/img/tabbar/cart.png" alt="" />
          </template>
          <template v-slot:imgActive>
            <img src="~assets/img/tabbar/cart-active.png" alt="" />
          </template>
          <template v-slot:title>
            <div>購物車</div>
          </template>
        </tab-bar-item>

        <tab-bar-item path="/user">
          <template v-slot:img>
            <img src="~assets/img/tabbar/user.png" alt="" />
          </template>
          <template v-slot:imgActive>
            <img src="~/assets/img/tabbar/user-active.png" alt="" />
          </template>
          <template v-slot:title> <div>我的</div> </template>
        </tab-bar-item>
      </template>
    </tab-bar>
  </div>
</template>
<script>
import TabBarItem from "../common/tabBar/TabBarItem";
import TabBar from "../common/tabBar/TabBar";

export default {
  name: "MainTabBar",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style lang="scss">
.main {
  .tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 13vh;
    max-height: 80px;
    display: flex;
    text-align: center;
    background-color: rgb(240, 240, 240);
    box-shadow: 0 1px 7px rgb(138, 138, 138);
  }
}
</style>
