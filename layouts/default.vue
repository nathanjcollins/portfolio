<script setup lang="ts">
const colourMode = useColorMode();
</script>

<template>
  <div class="">
    <div class="flex py-4 px-6 items-center justify-between">
      <div class="flex gap-2 items-center">
        <NuxtImg class="size-20 rounded-full" src="/me.png" />
        Nathan Collins
      </div>
      <div class="flex gap-5">
        <NuxtLink active-class="underline" to="/">About Me</NuxtLink>
        <NuxtLink active-class="underline" to="/blog">Blog</NuxtLink>
      </div>
      <div>
        <button @click="colourMode = colourMode === 'dark' ? 'light' : 'dark'">
          {{ colourMode }}
        </button>
      </div>
    </div>
    <div
      class="max-w-sm md:max-w-prose mx-auto prose prose-slate lg:prose-lg dark:prose-invert"
    >
      <slot />
    </div>
    <div class="flex justify-center max-w-prose mx-auto gap-2 pb-10">
      <a href="https://www.linkedin.com/in/nathan-collins-411157a0/">
        <Icon name="mdi:linkedin" />
      </a>
      <a href="https://github.com/nathanjcollins">
        <Icon name="mdi:github" />
      </a>
    </div>
  </div>
</template>
