<template>
  <tr-container>
    <div v-if="post" id="blog-post">
      <h1>{{ post.data.title }}</h1>
      <h4>
        {{ post.data.author.first_name }} {{ post.data.author.last_name }}
      </h4>
      <div v-html="post.data.body"></div>


      <md-divider />

      <router-link
        v-if="((post||{}).meta||{}).previous_post"
        :to="/blogs/ + post.meta.previous_post.slug"
        class="md-button"
      >
          Previous Blog
      </router-link>
      <router-link
        v-if="((post||{}).meta||{}).next_post"
        :to="/blogs/ + post.meta.next_post.slug"
        class="md-button"
      >
        Next Blog
      </router-link>
    </div>
  </tr-container>
</template>

<script>
import butter from "@/buttercms";
export default {
  name: "blog-post",
  data() {
    return {
      post: null,
    };
  },
  methods: {
    getPost() {
      butter.post
        .retrieve(this.$route.params.slug)
        .then((res) => {
          this.post = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
  created() {
    this.getPost();
  },
};
</script>


<style lang="scss" scoped>
h1{
  line-height:30px;
}
/deep/ pre[class^="language-"] {
  width:auto;
  overflow-y:auto;
  background-color: #f1efef;
}
.language-javascript{
   width:auto;
  overflow-y:auto;

}
</style>

