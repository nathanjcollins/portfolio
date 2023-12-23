<script setup lang="ts">
useHead({
  title: "Nathan Collins",
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/me.png",
    },
  ],
});

useSeoMeta({
  description: "Nathan Collins' Portfolio",
  ogTitle: "Nathan Collins",
  ogDescription: "Nathan Collins' Portfolio",
  ogImage: "/me.png",
  ogUrl: "https://nathancollins.dev",
  twitterTitle: "Nathan Collins",
  twitterDescription: "Nathan Collins",
  twitterImage: "/me.png",
  twitterCard: "summary",
});
</script>

useHead({ htmlAttrs: { lang: 'en' }, link: [ { rel: 'icon', type: 'image/png',
href: '/me.png' } ] })
<template>
  <NuxtLayout class="dark:bg-slate-900 dark:text-white min-h-screen">
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.html,
body {
  font-family: "JetBrains Mono", monospace;
}
</style>
