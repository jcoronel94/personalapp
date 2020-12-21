<template>
  <tr-container>
    <div style="padding-bottom: 20px">
      <!-- Create `v-for` and apply a `key` for Vue. Here we are using a combination of the slug and index. -->

      <div class="md-layout md-gutter md-alignment-left">
        <div    v-for="(post, index) in posts"
          :key="post.slug + '_' + index" class ="md-layout-item md-xlarge-size-100 md-large-size-100 md-medium-size-100 md-small-size-100 md-xsmall-size-100">
        <md-card>
          <router-link :to="'/blogs/' + post.slug">
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">{{ post.title }}</div>
                <div class="md-subhead">{{ post.summary }}</div>
              </md-card-header-text>
              <md-card-media>
                <img
                  v-if="post.featured_image"
                  :src="post.featured_image"
                  alt=""
                />
                <img v-else src="http://via.placeholder.com/250x250" alt="" />
              </md-card-media>
            </md-card-header>
          </router-link>

          <!-- <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions> -->
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
  min-height:150px;
  margin:4px;
  width:100%;
  display: inline-block;
  vertical-align: top;
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