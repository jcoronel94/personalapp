<template>
  <div>
    <md-card v-for="project in projects" :key="project.id" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{ project.name }}</div>
          <div class="md-subhead"><a :href="project.html_url"> html_url</a></div>
        </md-card-header>

        <md-card-content>
          {{ project.description }}
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>



<script>
import { mapActions, mapState, mapGetters } from "vuex";
import pageLoader from "@/mixins/pageLoader";

export default {
  computed: {
    ...mapState({
      projects: (state) => state.projects.items,
    }),
  },
  mixins: [pageLoader],
  data() {
    return {};
  },
  methods: {
    ...mapActions("projects", ["fetchProjects"]),
  },
  created() {
    Promise.all([this.fetchProjects()])
      .then(() => this.pageLoader_resolveData())
      .catch((err) => {
        console.error(err);
        this.pageLoader_resolveData();
      });
  },
};
</script>


<style lang="scss" scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>