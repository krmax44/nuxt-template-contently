<template>
  <div class="container">
    <div>
      <h1 class="title">All posts</h1>
      <div v-for="post in posts" :key="post.slug">
        <h2 class="subtitle">{{ post.attributes.title }}</h2>
        <nuxt-link :to="`/blog/${post.slug}/`">Read...</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    }
  },
  async asyncData({ payload, $axios }) {
    if (payload) return { posts: payload }

    return {
      posts: await $axios.$get('/_nuxt/posts.json')
    }
  }
}
</script>
