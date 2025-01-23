<script setup lang="ts">
import { ref } from 'vue'

const isShowNavbarMenu = ref(false);
</script>

<template>
  <h1>Nia's Portfolio</h1>
  <div id="nav" class="navbar" role="navigation">
    <div id="navbar-toggle" v-on:click="isShowNavbarMenu = !isShowNavbarMenu">
      <a href="#"><i class="fas fa-bars"></i> Menu</a>
    </div>
    <nav class="navbar-menu" :class="{ 'navbar-menu-active': isShowNavbarMenu }">
      <router-link to="/" class="navbar-menu-item">
        <i class="fas fa-home"></i> Home
      </router-link>
      <router-link to="/skills" class="navbar-menu-item">
        <i class="fas fa-laptop-code"></i> Skills
      </router-link>
      <router-link to="/works" class="navbar-menu-item">
        <i class="fas fa-building"></i> Works
      </router-link>
      <router-link to="/artifacts" class="navbar-menu-item">
        <i class="fas fa-box"></i> Artifacts
      </router-link>
      <router-link to="/about" class="navbar-menu-item">
        <i class="fas fa-address-card"></i> About
      </router-link>
    </nav>
  </div>
  <router-view />

  <hr/>
  <footer>
    &copy;2025 Nia T.N. Tech Lab.
  </footer>
</template>

<style lang="scss">
$pcs: dark;
$mobileWidth: 768px;

$headerColor: #00aaff;
$subHeaderColor: #00ddff;

body {
  font-size: 1rem;
  @media ( prefers-color-scheme: $pcs ) {
    background-color: #111;
  }
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 1rem;
  color: #111;
  @media ( prefers-color-scheme: $pcs ) {
    color: white;
  }
}

h1 {
  font-size: 2rem;
  color: white;
  background-color: $headerColor;
  padding: 0.5rem;
  margin: 0;
  text-align: center;
}
h2 {
  font-size: 1.6rem;
  padding: 0.5rem;
  margin: 0;
  text-align: center;
  border-bottom: 3px solid $subHeaderColor;
}
h3 {
  font-size: 1.4rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  padding-right: 5rem;
  border-bottom: 2px solid $subHeaderColor;
}
h4 {
  font-size: 1.2rem;
}

.navbar {
  width: 100%;
  margin: 0 auto;
  padding: 0;
  background-color: #eee;
  @media ( prefers-color-scheme: $pcs ) {
    background-color: #333;
    color: white;
  }

  nav {
    display: flex;
    align-items: center;
    padding-inline-start: 0;
    margin: 1rem 0;

    .navbar-menu-item {
      display: block;
      width: 16%;
      padding: 0.5em 0;
      text-align: center;
      text-decoration: none;
      color: inherit;

      &:hover {
        background-color: #ddd;
        @media ( prefers-color-scheme: $pcs ) {
          background-color: #444;
          color: #00ffff;
        }
      }
      &.router-link-exact-active {
        font-weight: bold;
        @media ( prefers-color-scheme: $pcs ) {
          color: #00ccff;
        }
      }
    }
  }
}

#navbar-toggle {
  display: none;
  padding: 0.5em 0;
}

// スマホ用
@media only screen and ( max-width: $mobileWidth ) {
  .navbar {
    .navbar-menu {
      display: none;
    }
    .navbar-menu-active {
      display: block !important;
    }

    nav {
      .navbar-menu-item {
        width: 100%;
      }
    }
  }

  #navbar-toggle {
    display: block;
    position: relative;
    background-color: #eee;
    @media ( prefers-color-scheme: $pcs ) {
      background-color: #333;
    }

    & a {
      display: block;
      padding: 0.5em;
      color: inherit;
      @media ( prefers-color-scheme: $pcs ) {
        color: white;
      }
      text-decoration: none;
    }
  }
}

.wraplist {
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax( 480px, 1fr ) );
  grid-auto-rows: 1fr;
  @media only screen and ( max-width: $mobileWidth ) {
    grid-template-columns: 100%;
  }
}

.cardbox {
  margin: 5px;
  padding: 5px;

  background-color: #fff;
  border: 1px solid #888;
  @media ( prefers-color-scheme: $pcs ) {
    background-color: #111;
  }

  &-header {
    text-align: center;
    margin: 0;
  }

  &-content {
    padding: 5px;
    overflow-wrap: break-word;

    h5 {
      display: inline-block;
      font-size: 1rem;
      margin-block-end: 0.5em;
      padding-left: 0.5rem;
      padding-right: 2.5rem;
      border-bottom: 1px solid $subHeaderColor;
    }
    p {
      margin-block-start: 0;
      padding: 0 1rem;
    }
    ul {
      margin-block-start: 0;
    }
    a {
      color: inherit;
      text-decoration: underline;
    }
  }

  &-image {
    width: 100%;
    height: 360px;
    object-fit: cover;
  }
}

footer {
  padding: 0 0.5em;
  text-align: right;
}
</style>