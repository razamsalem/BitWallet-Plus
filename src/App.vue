<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './cmps/NavBar.vue';
</script>

<template>
  <section class="main-layout">
    <section class="nav-bar nav">
      <NavBar />
    </section>
    <main>
      <RouterView />
    </main>
  </section>
</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
