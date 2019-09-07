<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-contently-template
      </h1>
      <h2 class="subtitle">
        My dazzling Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <nuxt-link to="/blog/" class="button--grey">
          Blog
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
