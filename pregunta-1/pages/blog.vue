<template>
  <div>
    <h1>Publicaciones</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <nuxt-link :to="`/blog/${post.id}`">{{ post.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const posts = await $axios.$get('https://jsonplaceholder.typicode.com/posts');
    return { posts };
  }
}
</script>
