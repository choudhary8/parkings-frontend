<template>
  <div class="not__found">
    <div class="write__up">
      <h1>Error 404</h1>
      <h4>Page not found</h4>
    </div>
    <div class="img__div"></div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped>
.not__found {
  padding-top: 10vh;
  width: 95%;
  max-width: 1000px;
  margin: auto;
  display: flex;
}
.write__up {
  margin: auto;
  width: 40%;
  text-align: center;
}
.write__up h1 {
  color: #ce0101;
}

@media only screen and (min-width: 450px) {
  .write__up {
    margin: auto;
    width: 35%;
    text-align: center;
  }
  .img__div {
    width: 60%;
  }
  .img__div img {
    display: block;
  }
}
@media only screen and (min-width: 620px) {
  .not__found {
    width: 80%;
  }
  .write__up {
    margin: auto;
    width: 30%;
    text-align: center;
  }
  .img__div {
    width: 40%;
  }
  .img__div img {
    display: block;
  }
}
@media only screen and (min-width: 800px) {
  .not__found {
    width: 60%;
  }
  .write__up {
    margin: auto;
    width: 30%;
    text-align: center;
  }
  .img__div {
    width: 30%;
  }
  .img__div img {
    display: block;
  }
}
</style>
