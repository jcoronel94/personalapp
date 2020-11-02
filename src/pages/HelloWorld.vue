<template>
  <div class="container-parent">
    <div class="bg-container">
      <div class="container">
        <about />
      </div>
    </div>
    <div class="bg-container">
      <div class="container">
        <book-detail />
      </div>
    </div>
    <div class="bg-container">
      <div class="container">
        <email />
      </div>
    </div>
  </div>
</template>

<script>
import Email from "@/components/Email";
import About from "@/components/About";
import BookDetail from "@/components/BookDetail";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    Email,
    About,
    BookDetail
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
