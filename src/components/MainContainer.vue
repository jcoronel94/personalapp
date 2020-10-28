<template>
  <div class="wrapper">
    <div class="space">
      <div class="section">
        <div class="container">
          <div class="banner">
            <span  ref="maincard" class="md-display-3">stuff is here</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main main-raised">
      <div class="main-section section">
        <div class="container">
          <router-view :key="$route.path" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    maincardYPosition() {
      var top = this.$refs.maincard.getBoundingClientRect().top;

      return top;
    },
  },
  methods: {
    setYPosition(yPosition) {
      this.$store.commit("scroll/setYPosition", yPosition);
    },
    handleScroll(event) {
      this.setYPosition(this.$refs.maincard.getBoundingClientRect().top);
    },
  },
  mounted() {
    this.handleScroll(null); //seed the event
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    this.$store.commit("scroll/setYPosition", null);
    window.removeEventListener("scroll", null);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.space {
  height: 90vh;
  overflow: hidden;
  position: relative;
  background-position: 50%;
  background-size: cover;
  background-image: url("../assets/space.jpg");
  transform: translate3d(0px, 0px, 0px);
}

.main {
  background: #fff;
  position: relative;
  z-index: 3;
  &-raised {
    margin: -60px 30px 0;
    border-radius: 6px;
    -webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  }
  &-section {
    padding: 70px 0;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
  }
}

 .banner {
    position: relative;
    display: flex;
    align-items: center;
    align-content: center;
    align-self: flex-start;
    margin: 180px auto;
  }
  .container {
    display: flex;
  }
</style>
