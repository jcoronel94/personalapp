<template>
  <!-- <md-app md-mode="reveal"> -->
  <!-- :class="isToolbarBehindMainCard === true ? 'red' : 'md-transparent'"  -->
  <!-- :class="[
      isToolbarBehindMainCard === true
        ? 'md-transparent md-absolute'
        : 'md-transparent md-absolute',
    ]" -->

  <!-- :class="toolbarClasses" -->
  <div style="position: fixed;
    z-index: 1030;
    left: 0;
    right: 0;
    border-radius: 0;" ref="visibleToolbar">
    <md-toolbar v-if="visible" class="md-absolute"  md-elevation="8">
      <div class="md-toolbar-row"  >
        <div class="md-toolbar-section-start">
          <span class="md-title" style="flex: 1">COGITO</span>
        </div>
        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>more_vert</md-icon>
          </md-button>
        </div>
      </div>
    </md-toolbar>
    <md-toolbar v-else class="md-absolute md-transparent" md-elevation="0">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <span class="md-title" style="flex: 1">COGITO</span>
        </div>
        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>more_vert</md-icon>
          </md-button>
        </div>
      </div>
    </md-toolbar>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "Reveal",
  data: () => ({
    visible: false,
    scrollPosition: null,
    isLoaded: false,
  }),
  methods: {
    handleScroll(event) {
      if (this.$refs) {
       this.visible= false;
      }
      var toolbarTop = this.$refs.visibleToolbar.getBoundingClientRect().top

      console.log("main " + this.yPositionMainCard);
      console.log("tool " + toolbarTop);
  
      
      if (toolbarTop <= this.yPositionMainCard) {
        this.visible = false;
      } else {
       this.visible = true;
      }
    },
  },
  computed: {
    toolbarClasses() {
      return {
        "md-transparent": !this.isToolbarBehindMainCard,
      };
    },

    ...mapState({
      yPositionMainCard: (state) => state.scroll.yPosition,
    }),
  },
  mounted() {
    this.handleScroll(null);
    window.addEventListener("scroll", this.handleScroll);
    this.isLoaded = true;
  },
  destroy() {
    window.removeEventListener("scroll", null);
    this.isLoaded = false;
  },
};
</script>


<style lang="scss" scoped>
.md-toolbar {
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
}

.invisible {
  position: absolute !important;
  top: -9999px !important;
  left: -9999px !important;
  visibility: hidden;
}
</style>
