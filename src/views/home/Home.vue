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
    <tab-control
      class="tab-control-position-sticky"
      :titles="['流行', '新款', '精選']"
    ></tab-control>
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
      asperiores harum amet voluptates magni eligendi totam alias deleniti.
      Labore quibusdam aliquid recusandae ab odio quia adipisci! Quas, saepe
      omnis fuga et, rerum veniam praesentium laborum perferendis, eaque autem
      magnam modi repudiandae in incidunt qui. Id commodi explicabo facere
      obcaecati voluptatum, esse minus illo error, non iure necessitatibus
      aliquid voluptates eius consectetur inventore quidem vitae iste odit vel
      quod enim veritatis. Nulla dolores mollitia dolor reiciendis illum est
      aperiam et? Provident tempore eos dolor, nesciunt totam voluptatem
      doloribus. Fuga qui veritatis adipisci aut dolores commodi, dolore rem
      esse soluta neque blanditiis officiis fugiat tempora culpa, voluptate
      obcaecati unde quasi, eaque voluptas perferendis. Molestias eaque nam modi
      soluta, nulla delectus recusandae ipsum natus perferendis, voluptas
      suscipit. Saepe, molestias. Culpa ut expedita ex, corporis esse ipsum.
      Perspiciatis deserunt ut, dolore minus, tempore esse nulla sint culpa
      natus omnis magnam atque ex voluptatibus. Ducimus tempora explicabo dicta
      temporibus dolorum praesentium voluptatum provident tempore ratione
      suscipit esse, dolore fugit voluptate iure ipsum reprehenderit iste
      blanditiis saepe officiis eos aperiam ut obcaecati corporis! Aperiam
      distinctio odio maiores, eum voluptatem ex accusamus voluptates possimus,
      ratione rem soluta debitis quod magni excepturi obcaecati veniam dolores.
      Vero, cum voluptas.
    </div>
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
      asperiores harum amet voluptates magni eligendi totam alias deleniti.
      Labore quibusdam aliquid recusandae ab odio quia adipisci! Quas, saepe
      omnis fuga et, rerum veniam praesentium laborum perferendis, eaque autem
      magnam modi repudiandae in incidunt qui. Id commodi explicabo facere
      obcaecati voluptatum, esse minus illo error, non iure necessitatibus
      aliquid voluptates eius consectetur inventore quidem vitae iste odit vel
      quod enim veritatis. Nulla dolores mollitia dolor reiciendis illum est
      aperiam et? Provident tempore eos dolor, nesciunt totam voluptatem
      doloribus. Fuga qui veritatis adipisci aut dolores commodi, dolore rem
      esse soluta neque blanditiis officiis fugiat tempora culpa, voluptate
      obcaecati unde quasi, eaque voluptas perferendis. Molestias eaque nam modi
      soluta, nulla delectus recusandae ipsum natus perferendis, voluptas
      suscipit. Saepe, molestias. Culpa ut expedita ex, corporis esse ipsum.
      Perspiciatis deserunt ut, dolore minus, tempore esse nulla sint culpa
      natus omnis magnam atque ex voluptatibus. Ducimus tempora explicabo dicta
      temporibus dolorum praesentium voluptatum provident tempore ratione
      suscipit esse, dolore fugit voluptate iure ipsum reprehenderit iste
      blanditiis saepe officiis eos aperiam ut obcaecati corporis! Aperiam
      distinctio odio maiores, eum voluptatem ex accusamus voluptates possimus,
      ratione rem soluta debitis quod magni excepturi obcaecati veniam dolores.
      Vero, cum voluptas.
    </div>
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
      asperiores harum amet voluptates magni eligendi totam alias deleniti.
      Labore quibusdam aliquid recusandae ab odio quia adipisci! Quas, saepe
      omnis fuga et, rerum veniam praesentium laborum perferendis, eaque autem
      magnam modi repudiandae in incidunt qui. Id commodi explicabo facere
      obcaecati voluptatum, esse minus illo error, non iure necessitatibus
      aliquid voluptates eius consectetur inventore quidem vitae iste odit vel
      quod enim veritatis. Nulla dolores mollitia dolor reiciendis illum est
      aperiam et? Provident tempore eos dolor, nesciunt totam voluptatem
      doloribus. Fuga qui veritatis adipisci aut dolores commodi, dolore rem
      esse soluta neque blanditiis officiis fugiat tempora culpa, voluptate
      obcaecati unde quasi, eaque voluptas perferendis. Molestias eaque nam modi
      soluta, nulla delectus recusandae ipsum natus perferendis, voluptas
      suscipit. Saepe, molestias. Culpa ut expedita ex, corporis esse ipsum.
      Perspiciatis deserunt ut, dolore minus, tempore esse nulla sint culpa
      natus omnis magnam atque ex voluptatibus. Ducimus tempora explicabo dicta
      temporibus dolorum praesentium voluptatum provident tempore ratione
      suscipit esse, dolore fugit voluptate iure ipsum reprehenderit iste
      blanditiis saepe officiis eos aperiam ut obcaecati corporis! Aperiam
      distinctio odio maiores, eum voluptatem ex accusamus voluptates possimus,
      ratione rem soluta debitis quod magni excepturi obcaecati veniam dolores.
      Vero, cum voluptas.
    </div>
  </div>
</template>

<script>
//組件
import NavBar from "@/components/common/navBar/NavBar";
import Carousel from "./carousel/Carousel";
import Recommend from "./recommend/Recommend";
import TabControl from "@/components/content/tabControl/TabControl.vue";

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
    TabControl,
  },

  //組件創建完後開始發送網路請求
  created() {
    //請求多個數據
    getHomeMultidata().then((result) => {
      //把回傳結果存到data
      this.bannerData = result.data.banner.list;
      this.recommendData = result.data.recommend.list;
      // console.log(this.recommendData);
    });
  },
};
</script>
<style lang="scss">
.home {
  transform: none;
  margin-top: 8vh;
  .home-nav {
    background-color: rgb(238, 104, 94);
    color: #fff;
    font-size: 1.2rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 90;
  }

  .tab-control-position-sticky {
    position: sticky;
    top: 7.5vh; //nav-bar高度是8vh
  }
}
</style>
