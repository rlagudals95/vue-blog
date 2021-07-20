<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post"  v-for="(post, index) in sampleBlogPost" :key="index" />
  </div>
</template>

<script>
import BlogPost from '../conponents/BlogPost'

export default {
  name: "Home",
  components: {BlogPost},
  data(){
    return{
      welcomeScreen: {
        title: 'welcome',
        blogPost: 'Developer HMK1022',
        welcomeScreen: true,
        photo: 'coding'
      },
      sampleBlogPost : [
        {
          title: "This is a Filter Title!",
          blogHTML: '항해중인 개발자',
          blogCoverPhoto: 'photo'

        },
        {
         title: "This is a Filter Title2!",
          blogHTML: '항해중인 개발자',
          blogCoverPhoto: 'photo'
        }
      ]
      

    }
  }
};
</script>
