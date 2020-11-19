<template>
  <!-- <md-app md-mode="reveal"> -->
  <div>
    <toolbar
      :isNavOpen="showNavigation"
      @sideNav="showNavigation = !showNavigation"
    />
    <Hero />
    <md-drawer
      class="sidenav"
      :class="{ layer: showNavigation }"
      :md-active.sync="showNavigation"
    >
      <md-toolbar class="md-transparent" md-elevation="0">
        <router-link @click="showNavigation = false" class="no-decor" to="/">
          <span class="md-title">COGITO</span>
        </router-link>
      </md-toolbar>
      <!-- <router-link class="card-link" to="home">
            <span v-if="!(isNavOpen && !isOverMainCard)"
              :class="{ white: !isOverMainCard }"
              class="md-title"
              style="flex: 1"
              >COGITO</span
            >
          </router-link> -->
      <md-list>
        <md-list-item to="blogs" @click="showNavigation = false">
          <md-icon>chat_bubble</md-icon>
          <span class="md-list-item-text"> Blog Posts </span>
        </md-list-item>

        <md-list-item to="projects" @click="showNavigation = false">
          <md-icon>folder</md-icon>
          <span class="md-list-item-text">Projects</span>
        </md-list-item>

        <md-list-item :href="resumeLink" class="no-decor">
          <md-icon>face</md-icon>
          <span class="md-list-item-text"> Resume </span>
        </md-list-item>
      </md-list>
    </md-drawer>
    <MainContainer />
  </div>
</template>

<script>
import MainContainer from "@/components/MainContainer";
import Toolbar from "@/components/Toolbar";
import Hero from "@/components/Hero";

export default {
  name: "Reveal",
  data() {
    return {
      showNavigation: false,
    };
  },
  computed: {
    resumeLink() {
      return process.env.VUE_APP_RESUME;
    },
  },
  components: {
    MainContainer,
    Toolbar,
    Hero,
  },
};
</script>

<style lang="scss" scoped>
.md-drawer {
  position: fixed;
}

.sidenav {
  // z-index: 10000;
}

.md-app {
  border: 1px solid rgba(#000, 0.12);
  height: 100vh;
  min-height: 100%;
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.md-content {
  min-height: 100%;
}

.md-toolbar {
  box-shadow: none;
  padding-top: 25px;
  > .md-title {
    color: #dcdada;
  }
  &.md-absolute {
    position: fixed;
    z-index: 1030;
    left: 0;
    right: 0;
    border-radius: 0;
  }
}

.md-toolbar-section {
  display: flex;
  align-items: center;
  flex: 1;

  &-start {
    justify-content: flex-start;
    order: 0;
  }

  &-end {
    justify-content: flex-end;
    order: 10;
  }
  // 90px
}

.layer {
  z-index: 10000;
}
</style>
