<template>
  <div class="center-block">
    <p class="wrapper-main" style="text-align: center">
      Full stack developer with strong experience in the insurance domain.
      Interested in keeping up with rapidly evolving web technologies. I am
      always up for a new challenge and do not let the unknown deter me.
      <br />
    </p>
    <blockquote class="noborder">
      <p>
        <q>Homo sum, humani nihil a me alienum puto</q>
      </p>
      <footer>
        Terance in
        <cite title=" The Self-Tormentor"
          >The Self-Tormentor - Act I, Scene 1, line 25
        </cite>
      </footer>
    </blockquote>
  </div>
</template>


<script>
export default {};
</script>


<style lang="scss" scoped>
.center-block {

  display: block;
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: 600px) {
    padding: 0px;
  }
  .wrapper-main {
    font-size: 20px;
    letter-spacing: 1px;
    text-align: left;
    &:after {
      content: " ";
      display: block;
      width: 25%;
      margin: 0;
      padding: 1px 0;
      margin-top: 10px;
      // background-color: grey;
      border-bottom: 3px solid rgb(114, 144, 176);
    }
  }

  blockquote {
    border-left: none;
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;

    & footer {
      font-size: 80%;
      line-height: 1.42857143;
      color: #777;

      &:before {
        content: "\2014 \A0";
      }
    }
  }
}
</style>