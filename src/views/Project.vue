<template>
  <h1>{{ currentProject.projectName }}</h1>
  <div class="project-grid">
    <div class="video-container">
      <!--  <video ref="videoPlayer" class="video" controls loop muted>
        <source :src="currentProject.videoUrl" type="video/mp4" />
      </video> -->
    </div>
    <img :src="currentProject.imageUrl" />
    <img :src="currentProject.imageUrl2" />
    <img :src="currentProject.imageUrl3" />
    <img :src="currentProject.imageUrl4" />
    <p>{{ currentProject.description }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        projects: [
          {
            id: 1,
            projectName: 'Naturally',
            imageUrl: 'https://moaeng.github.io/mathias-wagestrand/naturallypackagingv.2.png',
            imageUrl2: '../assets/img/naturallylamp.png',
            imageUrl3: '../assets/img/NaturallyInterior.png',
            imageUrl4: '../assets/img/NaturallyDesk.png',
            description: 'Modelled in Blender and Autodesk Fusion 360. '
          },
          {
            id: 4,
            projectName: 'Orange Blitz',
            imageUrl: '../assets/img/OrangeBlitz.png',
            description: ''
          },
          {
            id: 3,
            projectName: 'Denon DP 450',
            imageUrl: '../assets/img/DenonAngle.png',
            imageUrl2: '../assets/img/DenonSide.png',
            imageUrl3: '../assets/img/DenonBack.png',
            imageUrl4: '../assets/img/DenonTop.png',
            description: ''
          },
          {
            id: 5,
            projectName: 'Swap',
            imageUrl: '../assets/img/Swap.png',
            videoUrl: '../assets/img/YindiaoHD.mp4',
            description: 'Multifunctional Camera & Clock'
          }
        ],
        projectId: null
      }
    },
    computed: {
      currentProject() {
        return this.projects.find(
          (project) => project.id === parseInt(this.projectId)
        )
      }
    },
    created() {
      this.projectId = this.$route.params.id
    }
  }
</script>
// Test push
<style lang="scss" scoped>
  h1 {
    text-align: center;
    font-size: 18px;
    padding: 15px;
  }
  img {
    width: 100%;
  }
  p {
    text-align: center;
    padding: 15px;
  }
  .video {
    width: 100%;
    margin-bottom: 10px;
  }
  @media (min-width: 768px) {
    .project-grid {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      gap: 15px;
    }

    img {
      width: 800px;
    }
  }
</style>
