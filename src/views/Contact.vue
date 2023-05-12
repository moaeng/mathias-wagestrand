<template>
  <div class="contact-page">
    <h1>Contact</h1>
    <div class="contact-info">
      <div class="contact-item">
        <h3>Phone</h3>
        <p>{{ mobileNumber }}</p>
      </div>
      <div class="contact-item">
        <h3>Email</h3>
        <p>{{ email }}</p>
      </div>
      <!-- Add more contact items here -->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mobileNumber: '073-107 36 17',
        email: 'mathias.wagestrand@outlook.com'
        // Add more contact information here
      }
    }
  }
</script>

<style lang="scss" scoped>
  .contact-page {
    text-align: center;

    h1 {
      margin-bottom: 25px;
    }
    h3 {
      margin-bottom: 5px;
      font-size: 15px;
    }
    p {
      margin-bottom: 10px;
      font-size: 14px;
    }
  }
</style>
