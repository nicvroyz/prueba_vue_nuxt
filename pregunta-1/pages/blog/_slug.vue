<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <nuxt-link to="/blog">Volver</nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const post = await $axios.$get(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
    return { post };
  }
}
</script>
