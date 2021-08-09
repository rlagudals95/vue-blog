<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation v-if="!navigation"/>
      <router-view/>
      <Footer v-if="!navigation"/>
    </div>
  </div>
</template>

<script>
import Navigation from './conponents/Navigation.vue'
import Footer from './conponents/Footer.vue'


export default {
  name: "app",
  components: {Navigation, Footer},
  data() {
    return {
      navigation: null,
    };
  },
  created() {
    this.checkRoute() // 페이지 이동 시 계속 주소를 체크해서 nav & footer 출력 여부를 계속 판단
  },
  mounted() {},
  methods: {
    checkRoute () {   
        if(this.$route.name === 'Login' || this.$route.name === 'Register' || this.$route.name === 'ForgotPassword') {
          this.navigation = true;
          return;
        } this.navigation = false;
    },
  },
  watch: { // 음... 감시하는 개념인가..?
    $route() {
      this.checkRoute();
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}
.app-wrapper {
  width: 100%;
} 

.app {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}
.arrow {
  margin-left: 8px;
  width: 12px;
  path{
    fill:#000;
   }
  }
  .arrow-light {
    path {
      fill:#fff;
    }
}

button,
.router-button {
  transition: 500ms ease all;
  cursor: pointer;
  margin-top: 25px;
  padding: 12px 25px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border:none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(48,48,48,0.7);
  }
}

.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;
  @media (min-width: 500px){
    padding: 100px 16px;
  }

  .blog-cards {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;
    flex-direction: row; 

    @media(min-width: 500px) { // 500px 밑으로 내려가면

      grid-template-columns: repeat(1,1fr);
    }
    @media(min-width: 900px) {
      grid-template-columns: repeat(3,1fr);
    }
    @media(min-width: 1200px) {
     
      grid-template-columns: repeat(4,1fr);
    }
  }
}

.error {
  text-align: center;
  font-size: 12px;
  color: red;
}
</style>
