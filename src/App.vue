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
      <img src="../assets/img/naturally.jpg" />
      <!--  <p>Naturally, 2022</p> -->
      <img src="../assets/img/curtain.jpg" />
      <img src="../assets/img/desk.jpg" />
    </div>
  </main>

  <footer class="footer">
    <div class="footer-container">
      <div class="row">
        <ul class="social-icons">
          <li>
            <a href="https://instagram.com/mathias3dstrand"
              ><i class="fab fa-instagram"></i
            ></a>
            <a
              href="https://www.linkedin.com/in/mathias-w%C3%A5gestrand-317732261/"
              ><i class="fab fa-linkedin"></i
            ></a>

            <a href="mailto:moaenglander@gmail.com">
              <i class="far fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="copy">
      <span
        ><i class="fa-regular fa-copyright"></i> 2023 Moa Englander, all rights
        reserved.</span
      >
    </div>
  </footer>
</template>

<style lang="scss">
  @import '../assets/main.scss';

  .grid-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;

    img {
      margin-top: 15px;
      width: 100%;
      height: 100%;
    }

    p {
      font-size: 12px;
    }
  }

  .footer {
    .footer-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      margin-top: 10px;
      .social-icons {
        a {
          text-align: center;
          padding: 10px;
          font-size: 23px;
        }
      }
    }
    .copy {
      margin-top: 35px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      font-size: 12px;
      color: gray;
    }
  }
  @media screen and (min-width: 768px) {
    .grid-container {
      flex-direction: row;
      gap: 20px;
      align-items: center;
      justify-content: center;
      img {
        width: 400px;
      }
    }
  }
</style>
