<template>
  <div class="container">
    <div>
      <h1 class="title">{{ attributes.title }}</h1>
      <h2>{{ new Date(attributes.createdAt).toLocaleString() }}</h2>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="data"></div>

      <nuxt-link to="/">Home</nuxt-link> |
      <nuxt-link to="/blog/">Blog</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attributes: {
        title: '',
        createdAt: 0
      },
      data: ''
    }
  },
  asyncData({ params, payload, $axios }) {
    if (payload) return { posts: payload }

    return $axios.$get(`/_nuxt/posts/${params.slug}.json`)
  }
}
</script>
