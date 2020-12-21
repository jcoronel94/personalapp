<template>
  <footer data-background-color="black" class="footer">
    <div class="container">
      <div class="copyright flex-container column">
        <div class="flex-item">
          Powered by
          <a href="https://buttercms.com" target="_blank">
          <img class="butter-logo" src="../assets/butter-w.png" />
          </a>
        </div>
        <div class="flex-item">
          ©{{ new Date().getFullYear() }}, made by Jonathan Coronel
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.footer {
  padding: 20px 0;
}

.butter-logo {
  width: 200px;
  margin-left:10px;
  height:55px;
  object-fit: cover;
  object-position: 20% 10%;
}

.flex-container {
  padding: 0;
  margin: 0;
  list-style: none;
  align-items: flex-end;

  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
}

.column {
  -webkit-flex-direction: column;
  flex-direction: column;
  float: left;
}

.flex-item {
  text-align: center;
}

.copyright{
  color:white;
}
</style>