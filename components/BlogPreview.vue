<template>
  <section class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Latest <span class="gradient-text">Blog Posts</span>
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Insights on web development, software engineering, and the latest in
          tech
        </p>
      </div>

      <!-- Blog posts preview -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        v-if="posts?.length"
      >
        <article
          v-for="post in posts"
          :key="post.path"
          class="glass-card p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
        >
          <NuxtLink :to="post.path" class="block h-full">
            <!-- Date -->
            <div class="text-sm text-gray-500 mb-3">
              {{ formatDate(post.date) }}
            </div>

            <!-- Title -->
            <h3
              class="text-xl font-semibold mb-3 group-hover:text-green-400 transition-colors line-clamp-2"
            >
              {{ post.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-400 mb-4 line-clamp-3 flex-grow">
              {{ post.description }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4" v-if="post.tags">
              <span
                v-for="tag in post.tags.slice(0, 2)"
                :key="tag"
                class="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full"
              >
                {{ tag }}
              </span>
              <span
                v-if="post.tags.length > 2"
                class="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full"
              >
                +{{ post.tags.length - 2 }}
              </span>
            </div>

            <!-- Read more link -->
            <div
              class="flex items-center text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors mt-auto"
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
      <div v-else class="text-center py-12">
        <div
          class="w-20 h-20 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center"
        >
          <Icon name="mdi:pencil" class="w-10 h-10 text-gray-600" />
        </div>
        <h3 class="text-xl font-semibold mb-4">Blog Coming Soon</h3>
        <p class="text-gray-400 max-w-md mx-auto mb-8">
          I'm working on some great content about web development and software
          engineering. Check back soon!
        </p>
      </div>

      <!-- View all posts button -->
      <div class="text-center" v-if="posts?.length">
        <NuxtLink
          to="/blog"
          class="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <Icon name="mdi:book-open" class="w-5 h-5" />
          <span>View All Posts</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: posts } = await useAsyncData("blog-preview", () =>
  queryCollection("blog")
    .where("draft", "<>", true)
    .order("date", "DESC")
    .limit(3)
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
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
