<template>
  <footer data-background-color="black" class="footer">
    <div class="container">
      <!-- <nav>
        <ul>
          <li><a href="https://www.creative-tim.com"> Creative Tim </a></li>
          <li>
            <a href="https:///presentation.creative-tim.com"> About Us </a>
          </li>
          <li><a href="https:///blog.creative-tim.com"> Blog </a></li>
          <li><a href="https://www.creative-tim.com/license"> Licenses </a></li>
        </ul>
      </nav> -->
      <div class="copyright flex-container column">
        <div class="flex-item">
          Powered by
          <a href="https://buttercms.com" target="_blank">
          <img class="butter-logo" src="../assets/butter-b.png" />
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
</style>