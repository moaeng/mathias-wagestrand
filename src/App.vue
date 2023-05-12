<script>
  import NavBar from './components/NavBar.vue'
  import About from './views/About.vue'

  export default {
    components: {
      NavBar,
      About
    },
    computed: {
      showHomePageGrid() {
        return this.$route.path === '/'
      }
    },
    data() {
      return {
        showPlayButton: true,
        videoUrl: '/assets/img/Showreel.mp4',
        projects: [
          {
            id: 1,
            name: 'Naturally Lamp',
            image: '/assets/img/NaturallyLamp.png'
          },
          {
            id: 1,
            name: 'Naturally Desk',
            image: '/assets/img/NaturallyDesk.png'
          },
          {
            id: 3,
            name: 'Denon DP 450 Back',
            image: '/assets/img/DenonBack.png'
          },
          {
            id: 1,
            name: 'Naturally Packaging',
            image: '/assets/img/NaturallyPackagingV.2.png'
          },
          {
            id: 4,
            name: 'Orange Blitz',
            image: '/assets/img/OrangeBlitz.png'
          },
          {
            id: 3,
            name: 'Denon DP 450 Angle',
            image: '/mathias-wagestrand/assets/img/DenonAngle.png'
          },
          { id: 5, name: 'Swap', image: '/assets/img/Swap.png' }
          // Add more projects here
        ]
      }
    }
  }
</script>

<template>
  <NavBar />
  <router-view></router-view>
  <main>
    <div class="homepage">
      <div class="homepage-grid" v-if="showHomePageGrid">
        <div class="video-container">
          <video ref="videoPlayer" class="video" controls loop muted>
            <source :src="videoUrl" type="video/mp4" />
          </video>
        </div>
        <router-link
          v-for="project in projects"
          :to="'/projects/' + project.id"
          class="project-item"
          :key="project.id"
        >
          <img :src="project.image" alt="Project Image" />
          <div class="overlay">
            <h3>{{ project.name }}</h3>
          </div>
        </router-link>
      </div>
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

            <a href="mailto:mathias.wagestrand@outlook.com">
              <i class="far fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="copy">
      <span>2023 Moa Englander, all rights reserved.</span>
    </div>
  </footer>
</template>

<style lang="scss">
  @import '../assets/main.scss';

  .homepage {
    padding: 15px;
  }
  .video-container {
    .video {
      width: 100%;
    }
  }
  .home-title {
    padding: 20px;
    margin-bottom: 15px;
    text-align: center;
  }

  .homepage-grid {
    display: flex;
    flex-wrap: wrap;
    margin: -15px;
  }

  .project-item {
    flex-grow: 1;
    margin: 5px;
    position: relative;
    border-radius: 8px;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
      transition: transform 0.2s ease-out;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(219, 219, 219, 0.8);
    color: #000000;
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }

  .project-item:hover .overlay {
    opacity: 1;
  }

  .overlay h3 {
    font-size: 24px;
    margin-bottom: 8px;
  }

  @media (min-width: 768px) {
    .homepage-grid {
      margin-top: 20px;
      display: block;
      margin: -15px;
      column-gap: 15px;
      row-gap: 15px;
      column-fill: balance;
      column-count: 2;
      margin-bottom: 15px;
    }
    .video {
      margin-bottom: 10px;
    }

    .project-item {
      margin: 0;
    }

    .project-item img {
      margin-bottom: 15px;
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
</style>
