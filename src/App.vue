<template>
  <div id="app" class="page-container">
    <Layout />
  </div>
</template>

<script>
import Layout from "@/components/Layout";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme(
  "default",
  (
    primary: #26c6da,
    // The primary color of your applicatio
    accent: #9fa8da,
    //theme:dark
    // The accent or secondary colo,,,,,,,,,,,,
  )
);

@import "~vue-material/dist/theme/all"; // Apply the theme

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  height: 100%;
  margin: 0;
}

.md-toolbar,
.md-toolbar-row {
  justify-content: center;
}

.md-toolbar .md-toolbar-row {
  min-height: auto;
  padding-left: 15px;
  padding-right: 15px;
}
@media (min-width: 576px) {
  .footer .container,
  .md-toolbar-row,
  .section .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .footer .container,
  .md-toolbar-row,
  .section .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .footer .container,
  .md-toolbar-row,
  .section .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .footer .container,
  .md-toolbar-row,
  .section .container {
    max-width: 1140px;
  }
}

.container {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-right: 15px;
  padding-left: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
</style>
