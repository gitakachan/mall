<template>
  <v-app>
    <div class="app">
      <div class="main">
        <router-view></router-view>
      </div>
      <div class="tabbar">
        <main-tab-bar></main-tab-bar>
      </div>
    </div>
  </v-app>
</template>

<script>
import MainTabBar from "./components/content/MainTabBar.vue";

export default {
  components: { MainTabBar },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
@import "@/assets/scss/all.scss";

//解決tabBar因為router而無法position fixed
.app {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 13vh;
}
</style>
