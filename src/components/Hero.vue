<template>
  <header v-bind:class="{'sm-header' : (currentRoute !='/'  && currentRoute !='blogs')}">
    <section ref="maincard" class="header-content">
      <img class="rocky-dashed animate-pop-in" :src="currentRouteImage" />
      <template v-if="currentRoute === '/'">
        <h1 class="header-title animate-pop-in">Hi, I'm Jonathan!</h1>
        <h3 class="header-subtitle animate-pop-in">Come hang out for a bit</h3>
      </template>
      <template v-else-if="currentRoute === 'blogs'">
        <h1 class="header-title animate-pop-in">My Blogs</h1>
      </template>
    </section>
  </header>
</template>


<script>
export default {
  props: {
    img: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    subTitle: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      scrollModifier: 1,
    };
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },

    currentRouteImage() {
      let routeName = this.$route.name;
      if (routeName == "/") {
        return "https://cdn2.scratch.mit.edu/get_image/gallery/27493645_170x100.png";
      } else if (routeName === "blogs") {
        return require("../assets/blog.png");
      } else {
        return "";
      }
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
  created() {},
  mounted() {
    this.handleScroll(); //seed the event
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    this.$store.commit("scroll/setYPosition", null);
    window.removeEventListener("scroll", null);
  },
};
</script>



<style lang="scss" scoped>
.animate-pop-in {
  animation: pop-in 0.6s cubic-bezier(0, 0.9, 0.3, 1.2) forwards;
  opacity: 0;
}

header {
  align-items: center;
  display: flex;
  font-size: 18px;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  position: relative;
  text-align: center;
  transform-style: preserve-3d;
  perspective: 100px;
  &.sm-header{
    height: 185px;
    
  }

  &:before {
    animation: fade-slide-down 2s 0.5s cubic-bezier(0, 0.5, 0, 1) forwards;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
      url(../assets/space.jpg) repeat-y bottom;
    overflow: hidden;
    position: relative;
    content: "";
    background-position: 50%;
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  &-title {
    animation-delay: 0.8s;
  }
  &-subtitle {
    animation-delay: 1s;
    margin-bottom: 5rem;
  }
  &-button {
    transform: translateZ(0.1px);
    position: relative;
    z-index: 10;
  }
  &-button {
    animation-delay: 1.1s;
  }
}

.rocky-dashed {
  animation-delay: 0.6s;
}

.header-title,
.header-subtitle {
  color: #fff;
}
/* Animations */

@keyframes fade-slide-down {
  0% {
    opacity: 0;
    transform: translateY(-4rem);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes pop-in {
  0% {
    opacity: 0;
    transform: translateY(-4rem) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes rotate-up {
  100% {
    transform: rotateZ(calc(-4deg * var(--scroll)));
  }
}
</style>