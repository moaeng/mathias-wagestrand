<script>
  import NavBar from './components/NavBar.vue'

  export default {
    components: {
      NavBar
    }
  }
</script>

<template>
  <NavBar />
  <main>
    <div class="container grid-container">
      <img src="../assets/img/skarmkalibrering_02.jpg" />
      <p>Testbild, 2022</p>
      <img src="../assets/img/skarmkalibrering_02.jpg" />
      <img src="../assets/img/skarmkalibrering_02.jpg" />
      <img src="../assets/img/skarmkalibrering_02.jpg" />
    </div>
  </main>
</template>

<style lang="scss">
  @import '../assets/main.scss';

  .grid-container {
    display: flex;
    flex-direction: column;

    img {
      margin-top: 15px;
      margin-bottom: 10px;
      width: 100%;
      height: 100%;
    }

    p {
      font-size: 12px;
    }
  }
</style>
