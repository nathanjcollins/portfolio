<template>
  <div class="min-h-screen py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="gradient-text">Blog</span>
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Thoughts on web development, software engineering, and the latest in
          tech
        </p>
      </div>

      <!-- Blog posts grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8" v-if="posts?.length">
        <article
          v-for="article in posts"
          :key="article.path"
          class="glass-card p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
        >
          <NuxtLink :to="article.path" class="block">
            <!-- Date -->
            <div class="text-sm text-gray-500 mb-3">
              {{ formatDate(article.date) }}
            </div>

            <!-- Title -->
            <h2
              class="text-xl font-semibold mb-3 group-hover:text-green-400 transition-colors"
            >
              {{ article.title }}
            </h2>

            <!-- Description -->
            <p class="text-gray-400 mb-4 line-clamp-3">
              {{ article.description }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4" v-if="article.tags">
              <span
                v-for="tag in article.tags"
                :key="tag"
                class="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Read more link -->
            <div
              class="flex items-center text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors"
            >
              <span>Read more</span>
              <Icon
                name="mdi:arrow-right"
                class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
              />
            </div>
          </NuxtLink>
        </article>
      </div>

      <!-- Empty state -->
      <div v-else class="text-center py-16">
        <div
          class="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center"
        >
          <Icon name="mdi:pencil" class="w-12 h-12 text-gray-600" />
        </div>
        <h3 class="text-xl font-semibold mb-4">No blog posts yet</h3>
        <p class="text-gray-400 max-w-md mx-auto">
          I'm working on some great content. Check back soon for insights on web
          development and software engineering!
        </p>
      </div>

      <!-- Back to home -->
      <div class="text-center mt-16">
        <NuxtLink
          to="/"
          class="inline-flex items-center space-x-2 px-6 py-3 glass-card hover:bg-white/10 rounded-lg font-semibold transition-all duration-300"
        >
          <Icon name="mdi:arrow-left" class="w-5 h-5" />
          <span>Back to Home</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Blog - Nathan Collins",
  meta: [
    {
      name: "description",
      content:
        "Read about web development, software engineering, and the latest in tech from Nathan Collins.",
    },
  ],
});

const { data: posts } = await useAsyncData("blog-posts", () =>
  queryCollection("blog")
    .where("draft", "<>", true)
    .order("date", "DESC")
    .all(),
);

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
