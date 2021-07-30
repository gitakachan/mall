<template>
  <div>
    <!-- vuetifly要包在v-app裡 -->
    <v-app>
      <router-view></router-view>
      <main-tab-bar></main-tab-bar>
    </v-app>
  </div>
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
