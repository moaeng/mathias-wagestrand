<template>
  <div class="container">
    <h1 class="info-title">Hi there!</h1>
    <div class="image">
      <img :src="imageUrl" alt="Mathias" />
    </div>
    <p>{{ description }}</p>
    <a :href="cvUrl" download><button class="cv">Download my CV</button></a>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imageUrl: '../assets/img/mathias.jpg',
        description:
          "My name is Mathias and I'm a passionate 3D designer based in Gothenburg. As a student at Yrgo I am constantly seeking to expand my skill set and exploring new creative avenues within the field of 3D design. I have strong attention to detail and deep appreciation for the artistry involved in creating my own 3D models and designs. I'm currently seeking internship opportunities to further develop my skills and gain some industry experience.",
        cvUrl: '/path/to/cv.pdf'
      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header {
    text-align: center;
  }

  .image {
    margin-top: 20px;
  }

  img {
    max-width: 200px;
    border-radius: 500px;
    height: auto;
    margin-bottom: 20px;
  }

  p {
    text-align: center;
    width: 100%;
  }
  .cv {
    margin-top: 30px;
    padding: 10px;
    border-radius: 20px;
  }

  @media (min-width: 768px) {
    p {
      width: 400px;
      font-size: 18px;
      padding: 10px;
    }
  }
</style>
