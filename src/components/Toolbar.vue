<template>
  <div
    style="position: fixed; z-index: 1030; left: 0; right: 0; border-radius: 0"
    ref="visibleToolbar"
  >
    <!-- v-if="visible"  -->
    <md-toolbar
      v-bind:class="{ 'md-transparent': !isOverMainCard }"
      class="md-absolute"
      :md-elevation="isOverMainCard ? 8 : 0"
    >
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <router-link class="card-link" to="home">
            <span
              v-if="!(isNavOpen && !isOverMainCard)"
              :class="{ white: !isOverMainCard }"
              class="md-title"
              style="flex: 1"
              >COGITO</span
            >
          </router-link>
        </div>
        <div class="md-toolbar-section-end">
          <md-button :href="`${lkLink}`" class="md-icon-button">
            <i
              :class="{ white: !isOverMainCard }"
              class="fa fa-linkedin-square fa-2x"
              aria-hidden="true"
            />
          </md-button>

          <md-button :href="`${igLink}`" class="md-icon-button">
            <i
              :class="{ white: !isOverMainCard }"
              class="fa fa-instagram fa-2x"
              aria-hidden="true"
            />
          </md-button>
          <md-button @click="emitSideNav" class="md-icon-button">
            <md-icon :class="{ white: !isOverMainCard }">menu</md-icon>
          </md-button>
        </div>
      </div>
    </md-toolbar>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import breakpoint from "@/mixins/breakpoint";
export default {
  name: "Reveal",
  props: {
    isNavOpen: {
      type: Boolean,
    },
  },
  data: () => ({
    isOverMainCard: false,
    showNavigation: false,
    scrollPosition: null,
    isLoaded: false,
    igLink: "https://www.instagram.com/overboard182",
    lkLink: "https://www.linkedin.com/in/jonathan-coronel/",
  }),
  mixins: {
    breakpoint,
  },
  methods: {
    handleScroll(event) {
      console.log(this.showNavigation);
      if (this.$refs) {
        this.visible = false;
      }
      var toolbarTop = this.$refs.visibleToolbar.getBoundingClientRect().top;

      console.log("main " + this.yPositionMainCard);
      console.log("tool " + toolbarTop);

      if (toolbarTop <= this.yPositionMainCard) {
        this.isOverMainCard = false;
      } else {
        this.isOverMainCard = true;
      }
    },
    emitSideNav(e) {
      this.$emit("sideNav");
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
    console.log(this.isNavOpen);
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

.white {
  color: white !important;
}
</style>
