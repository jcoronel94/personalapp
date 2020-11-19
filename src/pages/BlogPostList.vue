<template>
  <tr-container>
    <div style="padding-bottom:20px">
      <h1>{{ page_title }}</h1>
      <!-- Create `v-for` and apply a `key` for Vue. Here we are using a combination of the slug and index. -->

      <div class="md-layout md-gutter md-alignment-left">
        <md-card
          class="md-layout-item md-xlarge-size-33 md-large-size-33 md-medium-size-33 md-small-size-50 md-xsmall-size-100"
          v-for="(post, index) in posts"
          :key="post.slug + '_' + index"
        >
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

<style lang="sass" scoped>
.md-card
  width: 320px
  margin: 4px
  display: inline-block
  vertical-align: top
</style>