export default {
  generate: {
    routes: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await res.json();
      return posts.map(post => `/blog/${post.id}`);
    }
  }
}
