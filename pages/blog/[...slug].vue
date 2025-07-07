<template>
  <article class="min-h-screen py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Back button -->
      <div class="mb-8">
        <NuxtLink
          to="/blog"
          class="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
        >
          <Icon name="mdi:arrow-left" class="w-5 h-5" />
          <span>Back to Blog</span>
        </NuxtLink>
      </div>

      <!-- Article header -->
      <header class="mb-12">
        <div class="text-sm text-gray-500 mb-4">
          {{ formatDate(post.date) }}
        </div>

        <h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {{ post.title }}
        </h1>

        <p class="text-xl text-gray-400 mb-6" v-if="post.description">
          {{ post.description }}
        </p>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2" v-if="post.tags">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full"
          >
            {{ tag }}
          </span>
        </div>
      </header>

      <!-- Article content -->
      <div class="prose prose-invert prose-lg max-w-none">
        <ContentRenderer :value="post" />
      </div>

      <!-- Author info -->
      <div class="mt-16 pt-8 border-t border-gray-800">
        <div class="flex items-center space-x-4">
          <div class="w-16 h-16 rounded-full overflow-hidden ring-2 ring-green-500/30">
            <img 
              src="/images/profile.jpg" 
              alt="Nathan Collins" 
              class="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 class="font-semibold text-lg">Nathan Collins</h3>
            <p class="text-gray-400">
              Senior Software Engineer from Oxford, UK
            </p>
            <p class="text-sm text-gray-500 mt-1">
              10+ years of experience in web development
            </p>
          </div>
        </div>
      </div>

      <!-- Navigation to other posts -->
      <div class="mt-16 pt-8 border-t border-gray-800">
        <div class="flex justify-between items-center">
          <div>
            <NuxtLink
              v-if="prev"
              :to="prev.path"
              class="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Icon
                name="mdi:arrow-left"
                class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
              />
              <div class="text-left">
                <div class="text-xs text-gray-500">Previous</div>
                <div class="font-medium">{{ prev.title }}</div>
              </div>
            </NuxtLink>
          </div>

          <div>
            <NuxtLink
              v-if="next"
              :to="next.path"
              class="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <div class="text-right">
                <div class="text-xs text-gray-500">Next</div>
                <div class="font-medium">{{ next.title }}</div>
              </div>
              <Icon
                name="mdi:arrow-right"
                class="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
const route = useRoute();

// Get the current post
const { data: post } = await useAsyncData(`blog-${route.path}`, () =>
  queryCollection("blog").where("path", "=", route.path).first(),
);

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Blog post not found",
  });
}

// Get previous and next posts
const allPosts = await queryCollection("blog")
  .where("draft", "<>", true)
  .order("date", "ASC")
  .all();

const currentIndex = allPosts.findIndex((p) => p.path === route.path);
const prev = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
const next =
  currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

useHead({
  title: `${post.value.title} - Nathan Collins`,
  meta: [
    {
      name: "description",
      content:
        post.value.description ||
        `Read about ${post.value.title} by Nathan Collins`,
    },
    { property: "og:title", content: post.value.title },
    { property: "og:description", content: post.value.description },
    { property: "og:type", content: "article" },
    { property: "article:published_time", content: post.value.date },
    { property: "article:author", content: "Nathan Collins" },
  ],
});

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<style>
@reference "tailwindcss";

.prose {
  @apply text-gray-300;
}

.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
  @apply text-white;
}

.prose h2 {
  @apply text-2xl font-bold mt-12 mb-6;
}

.prose h3 {
  @apply text-xl font-semibold mt-8 mb-4;
}

.prose p {
  @apply mb-6 leading-relaxed;
}

.prose a {
  @apply text-green-400 hover:text-green-300 transition-colors;
}

.prose code {
  @apply bg-gray-800 text-green-300 px-2 py-1 rounded text-sm;
}

.prose pre {
  @apply bg-gray-900 border border-gray-700 rounded-lg p-4 overflow-x-auto;
}

.prose pre code {
  @apply bg-transparent text-gray-300 p-0;
}

.prose blockquote {
  @apply border-l-4 border-green-500 pl-6 italic text-gray-400 my-6;
}

.prose ul,
.prose ol {
  @apply mb-6 pl-6;
}

.prose li {
  @apply mb-2;
}

.prose img {
  @apply rounded-lg shadow-lg;
}
</style>
