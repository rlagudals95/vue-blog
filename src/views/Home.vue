<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" /> 
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCards :post="post" v-for="(post, index) in sampleBlogCards " :key= "index"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../conponents/BlogPost';
import BlogCards from "../conponents/BlogCard"
export default {
  name: "Home",
  components: { BlogPost, BlogCards },
  data(){
    return{
      // welcomeScreen: {
      //   title: 'Welcome',
      //   blogPost: 'Developer HMK1022',
      //   welcomeScreen: true,
      //   photo: 'coding',
      // },
      // welcomeScreen 먹히질 않는다..후.,..
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
          {
          title: "This is a Filter Title2!",
          blogHTML: '항해중인 개발자2',
          blogCoverPhoto: 'beautiful-stories'
        },
      ],
      sampleBlogCards : [
        {blogTitle: "Blog Cards #1", blogCoverPhoto:"stock-1", blogDate: "May 1, 2021"},
        {blogTitle: "Blog Cards #2", blogCoverPhoto:"stock-2", blogDate: "May 1, 2021"},
        {blogTitle: "Blog Cards #3", blogCoverPhoto:"stock-3", blogDate: "May 1, 2021"},
        {blogTitle: "Blog Cards #4", blogCoverPhoto:"stock-4", blogDate: "May 1, 2021"},
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.blog-card-wrap{
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
  h4 {

  }
}

</style>
