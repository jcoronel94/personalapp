<template>
  <tr-container>
    <div style="padding-bottom: 20px">
      <div v-html="post.data.body"/>
    </div>
  </tr-container>
</template>

<script>
import butter from "@/buttercms";
export default {
  data() {
    return {
      post: {},
    };
  },
  methods: {
    getPage() {
      butter.page
        .retrieve("image", "image-page")
        .then((res) => {
          this.post = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
  created() {
    this.getPage();
  },
};
</script>

<style lang="sass" scoped>
.md-card
    width: 320px
    margin: 4px
    display: inline-block
    vertical-align: top
</style>