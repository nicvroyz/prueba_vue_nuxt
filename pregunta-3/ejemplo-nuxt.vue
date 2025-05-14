<template>
  <div>
    <h1>{{ acf.campo_personalizado }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const res = await $axios.$get('https://mi-wordpress.com/wp-json/wp/v2/posts/1');
    return { acf: res.acf };
  }
}
</script>
