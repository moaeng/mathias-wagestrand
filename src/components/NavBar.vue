<script>
  export default {
    data() {
      return {
        menuActive: false
      }
    },
    methods: {
      toggleMenu() {
        this.menuActive = !this.menuActive
      }
    }
  }
</script>

<template>
  <nav class="navbar">
    <a href="#" class="navbar-logo">M━W</a>
    <button class="navbar-toggle" @click="toggleMenu">
      <span class="navbar-toggle-icon"></span>
      <span class="navbar-toggle-icon"></span>
      <span class="navbar-toggle-icon"></span>
    </button>
    <ul :class="['navbar-menu', menuActive ? 'navbar-menu-active' : '']">
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<style lang="scss">
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    .navbar-logo {
      font-size: 2rem;
      font-weight: bold;
      color: #333;
    }

    .navbar-toggle {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      margin: 0;
    }

    .navbar-toggle-icon {
      display: block;
      width: 1.5rem;
      height: 0.15rem;
      margin: 5px;
      background-color: #333;
      border-radius: 0.25rem;
      transition: transform 0.2s ease;
    }

    .navbar-menu {
      display: none;
      position: absolute;
      top: 4.5rem;
      right: 0;
      height: 100%;
      width: 100%;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

      li {
        margin-top: 70px;
        padding: 5px;
        font-size: 25px;
        border-bottom: 1px solid #ddd;
        border: none;
      }
    }
  }

  /* desktop styles */
  @media screen and (min-width: 768px) {
    .navbar {
      margin-bottom: 15px;
      justify-content: flex-start;
      .navbar-toggle {
        display: none;
      }

      .navbar-menu {
        display: flex;
        margin-left: auto;
        position: static;
        width: auto;
        background-color: transparent;
        box-shadow: none;
      }

      .navbar-menu li {
        margin-top: 0;
        font-size: 15px;
        border: none;
        margin-right: 3rem;
      }
    }
    .navbar-logo {
      margin-left: 3rem;
    }
  }

  /* JavaScript for toggling the navbar menu */
  .navbar-menu-active {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    z-index: 4;
  }

  .navbar-toggle.active .navbar-toggle-icon {
    transform: rotate(90deg);
  }
</style>
