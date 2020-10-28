<template>
  <div>
    <span class="md-display-1">Github Projects</span>

    <div class="md-layout md-alignment-center-space-between">
      <md-card
       style="margin-bottom:20px"
        class="md-elevation-8 md-layout-item md-large-size-20 md-xlarge-size-20 md-medium-size-20 md-small-size-45 md-xsmall-size-100"
        v-for="project in projects"
        :key="project.id"
        md-with-hover
      >
        <md-ripple>
          <md-card-header>
            <div class="md-title">{{ project.name }}</div>
            <div class="md-subhead">
              <a :href="project.html_url"> html_url</a>
            </div>
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

.md-layout-item {
  height: 240px;
}

.margin-bottom-20{
  margin-bottom:20px;
}
</style>