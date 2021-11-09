<template>
  <div class="loading__background">
    <div class="loading__spinner">
      <i class="fa fa-spinner fa-spin" style="font-size:24px"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped>
.loading__background {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(204, 230, 255, 0.6);
  z-index: 100;
}
.loading__spinner {
  position: relative;
  top: 50vh;
  margin: auto;
  text-align: center;
}
</style>
