<template>
  <div>
    <tr-container>
      <about />
    </tr-container>
    <tr-container>
      <email />
    </tr-container>
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
 
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
