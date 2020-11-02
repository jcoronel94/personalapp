<template>
  <!-- <md-app md-mode="reveal"> -->
  <div>
    <toolbar />
    <Hero />
    <MainContainer/>
  </div>
</template>

<script>
import MainContainer from "@/components/MainContainer";
import Toolbar from "@/components/Toolbar";
import Hero from "@/components/Hero";

export default {
  name: "Reveal",
 
  components: {
    MainContainer,
    Toolbar,
    Hero
  },
};
</script>


<style lang="scss" scoped>
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
}
</style>