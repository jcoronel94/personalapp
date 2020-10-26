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
    primary: md-get-palette-color(blue, A200),
    // The primary color of your applicatio
    accent: md-get-palette-color(red, A200)
      // The accent or secondary colo,,,,,,,,,
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
</style>
