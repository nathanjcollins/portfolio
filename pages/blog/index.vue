<script setup lang="ts">
const { data } = await useAsyncData("content", () =>
  queryContent("/blog").find(),
);
</script>

<template>
  <div>
    <h1>My Blog Posts</h1>
    <div class="flex flex-col mb-5">
      <NuxtLink
        v-for="blog in data"
        :to="blog._path"
        class="p-2 cursor-pointer border rounded-lg no-underline hover:opacity-50"
      >
        <span class="text-xl">{{ blog.title }}</span>
        <p class="text-sm opacity-70">{{ blog.description }}</p>
        <span class="text-sm"
          >Publish Date: {{ new Date(blog.date).toLocaleString() }}</span
        >
      </NuxtLink>
    </div>
  </div>
</template>
