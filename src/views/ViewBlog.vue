<template>
    <div class="post-view">
      <div class="container quillWrapper">
          <h2>{{this.currentBlog[0].blogTitle}}</h2>             
          <h4>Posted on : {{ new Date(this.currentBlog[0].blogDate).toLocaleString('en-us',{dateStyle: "long"})}}</h4>
          <img :src="this.currentBlog[0].blogCoverPhoto" alt="">
          <!-- v-html은 data에 선언한 html코드를 직접 넣어줌 -->
          <div class="post-content ql-editor" v-html="this.currentBlog[0].blogHTML"></div>
      </div>     
  </div>
</template>

<script>
export default {
  name: 'ViewBlog',
  data () {
    return {
      currentBlog : null,

    }
  },
   async mounted() {
     this.currentBlog = await this.$store.state.blogPosts.filter((post) => {
      //  현재 클릭한 게시물의 정보 가져오기
       return post.blogID === this.$route.params.blogid
     })
   }
}
</script>

<style lang="scss" scoped>
  .post-view {
    h4 {
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 24px;
    }
  }
</style>