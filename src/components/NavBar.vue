<script></script>
<template>
  <nav>
    <div class="navbar">
      <div class="container nav-container">
        <!-- <div class="logo"></div> -->
        <input class="checkbox" type="checkbox" name="" id="" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <div class="menu-items">
          <li><a href="#">about</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">about</a></li>
        </div>
      </div>
    </div>
  </nav>
</template>
<style lang="scss">
  .container {
    max-width: 1050px;
    width: 90%;
    margin: auto;
  }

  .navbar {
    width: 100%;
    box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 62px;
  }

  .navbar {
    .menu-items {
      background-color: #fff;
      display: flex;
    }

    .nav-container {
      display: block;
      position: relative;
      height: 60px;

      a {
        color: #0e2431;
        font-weight: 500;
        font-size: 1.2rem;
        padding: 0.7rem;
      }

      .checkbox {
        position: absolute;
        display: block;
        height: 32px;
        width: 32px;
        top: 20px;
        left: 300px;
        z-index: 5;
        opacity: 0;
      }
      input[type='checkbox']:checked ~ .menu-items {
        transform: translateX(0);
      }

      input[type='checkbox']:checked ~ .hamburger-lines {
        .line1 {
          transform: rotate(45deg);
        }

        .line2 {
          transform: scaleY(0);
        }

        .line3 {
          transform: rotate(-45deg);
        }
      }

      .hamburger-lines {
        display: block;
        height: 21px;
        width: 26px;
        position: absolute;
        top: 17px;
        left: 300px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .line {
          display: block;
          height: 2px;
          width: 100%;
          border-radius: 10px;
          background: #0e2431;
        }

        .line1 {
          transform-origin: 0% 0%;
          transition: transform 0.4 ease-in-out;
        }

        .line2 {
          transition: transform 0.2 ease-in-out;
        }

        .line3 {
          transform-origin: 0% 100%;
          transition: transform 0.4 ease-in-out;
        }
      }
    }

    .menu-items {
      padding-top: 120px;
      box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
      height: 100vh;
      width: 100%;
      transform: translate(-150%);
      display: flex;
      flex-direction: column;
      margin-left: -40px;
      padding-left: 50px;
      transition: transform 0.5s ease-in-out;
      text-align: center;

      li {
        margin-bottom: 1.2rem;
        font-size: 1.5rem;
        font-weight: 500;
      }
    }
  }

  @media (min-width: 1024px) {
    .navbar {
      .menu-items {
        display: flex;
        flex-direction: row;
        padding: 15px;
        height: auto;
        width: auto;
        transform: none;
        box-shadow: none;
        margin-left: 0;
        padding-left: 0;

        li {
          margin-bottom: 0;
          font-size: 1.2rem;
        }
      }
      .nav-container {
        height: auto;
        display: flex;
        justify-content: flex-end;
        padding-right: 50px;

        a {
          padding: 1rem;
        }
      }

      .nav-container > .hamburger-lines {
        display: none;
      }
    }
  }
</style>
