<template>
  <div class="wrapper">
    <div class="main main-raised">
      <div class="main-section section">
        <router-view :key="$route.path" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  background: #fff;
  position: relative;
  z-index: 3;
  &-raised {
    margin: -60px 30px 0;
    @media screen and (max-width: 600px) {
       margin: -60px 5px 0;
    }
    border-radius: 6px;
    -webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  }
  &-section {
    padding: 60px 0;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
  }
}

</style>
