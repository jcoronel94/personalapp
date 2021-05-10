<template>
  <tr-container>
    <div style="padding-bottom: 20px">
      <!-- Create `v-for` and apply a `key` for Vue. Here we are using a combination of the slug and index. -->

      <div class="md-layout md-gutter md-alignment-left">
        <div
          v-for="(post, index) in posts"
          :key="post.slug + '_' + index"
          class="md-layout-item md-medium-size-50 md-small-size-100"
        >
          <md-card>
            <router-link :to="'/blogs/' + post.slug">
              <md-card-media>
                <img
                  v-if="post.featured_image"
                  :src="post.featured_image"
                  alt=""
                />
                <img v-else src="http://via.placeholder.com/250x250" alt="" />
              </md-card-media>
              <md-card-header>
                <md-card-header-text>
                  <div class="md-title">{{ post.title }}</div>
                </md-card-header-text>
              </md-card-header>
              <md-card-content>
                {{ post.summary }}
              </md-card-content>
            </router-link>
          </md-card>
        </div>
      </div>
    </div>
  </tr-container>
</template>

<script>
import butter from "@/buttercms";
export default {
  data() {
    return {
      page_title: "Blog Posts",
      posts: [],
    };
  },
  methods: {
    getPosts() {
      butter.post
        .list({
          page: 1,
          page_size: 10,
        })
        .then((res) => {
          this.posts = res.data.data;
        });
    },
  },
  created() {
    this.getPosts();
  },
};
</script>

<style lang="scss" scoped>
.md-card {
  min-height: 150px;
  margin: 4px;
  width: 100%;
  height: 95%;
  display: inline-block;
  vertical-align: top;
  .md-card-media{
    border-bottom:2px gainsboro solid;
    padding-bottom:10
    px;
  }
}

.md-layout-item {
  margin-top: 8px;
  margin-bottom: 8px;
  &:after {
    width: 100%;
    height: 100%;
    display: none;
    content: " ";
  }
}
</style>