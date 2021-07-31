<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" /> 
  </div>
</template>

<script>
import BlogPost from '../conponents/BlogPost';
export default {
  name: "Home",
  components: { BlogPost },
  data(){
    return{
      welcomeScreen: {
        title: 'Welcome',
        blogPost: 'Developer HMK1022',
        welcomeScreen: true,
        photo: 'coding',
      },
      // 위가 먹히질 않는다..후.,.. ㅅㅂ/...
      sampleBlogPost : [
        {
          title: "Welcome",
          blogPost: 'Developer HMK1022 Developer HMK1022 Developer HMK1022 Developer HMK1022',
          welcomeScreen: true,
          blogCoverPhoto: 'coding'
        },
        {
          title: "This is a Filter Title2!",
          blogHTML: '항해중인 개발자2',
          blogCoverPhoto: 'designed-for-everyone'
        },
      ],
    };
  },
};
</script>
