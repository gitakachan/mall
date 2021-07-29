<template>
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
</template>
<script>
import TabBarItem from "../common/TabBarItem";
import TabBar from "../common/TabBar";

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
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  text-align: center;
  background-color: rgb(230, 230, 230);

  .tab-bar-item {
    flex: 1;
    padding: 0 5%;

    .img {
      height: 80%;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 5px;
      }
    }
  }
}
</style>
