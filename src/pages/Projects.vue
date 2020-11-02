<template>
  <div>
    <span class="md-display-1">Github Projects</span>
    <div
      v-if="projects && projects.length > 0 && pageLoader_isDataLoaded"
      class="md-layout md-alignment-center-flex-start"
    >
      <md-card
        style="padding: 0 1px"
        class="md-primary md-layout-item md-large-size-25 md-xlarge-size-20 md-medium-size-25 md-small-size-50 md-xsmall-size-100"
        v-for="project in projects"
        :key="project.id"
        md-with-hover
      >
        <md-ripple>
          <a class="card-link" :href="project.html_url">
            <md-card-header>
              <div class="md-title">{{ project.name }}</div>
              <div class="md-subhead"></div>
            </md-card-header>

            <md-card-content>
              {{ project.description }}
            </md-card-content>
          </a>
        </md-ripple>
      </md-card>
    </div>

    <div
      v-else-if="!pageLoader_isDataLoaded && projects && projects.length <= 0"
    >
      <div style="height: 200px; margin: 200px 50% 0">
        <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
      </div>
    </div>
    <div v-else>
      <md-empty-state
        md-icon="error"
        md-label="Whoops, 500!"
        md-description="Looks like our connection wasn't commited to fetching our data 😔"
      >
      </md-empty-state>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex';
import pageLoader from '@/mixins/pageLoader';

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
    ...mapActions('projects', ['fetchProjects']),
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
  // margin: 4px;
  display: inline-block;
  vertical-align: top;
  border: 3px solid white;
}

.md-layout-item {
  height: 240px;
}

.margin-bottom-20 {
  margin-bottom: 20px;
}
</style>
