<template>
  <div
    :class="{
      dark: darkMode,
    }"
  >
    <div class="dark:bg-slate-800 dark:text-white h-full min-h-screen">
      <div class="max-w-5xl m-auto flex flex-col gap-5 pt-20 p-5">
        <DarkThemeDisabledIcon
          v-if="!darkMode"
          @click="darkMode = true"
          class="cursor-pointer"
        />
        <DarkThemeEnabledIcon
          v-else
          @click="darkMode = false"
          class="cursor-pointer"
        />
        <h1 class="text-5xl">Nathan Collins</h1>
        <h2 class="text-2xl text-slate-400 mb-5">
          Full-Stack Software Engineer
        </h2>
        <h3 class="text-2xl border-b border-white">About Me</h3>
        <p class="text-xl">
          Hey, I'm Nathan and I'm a full-stack softare engineer from 🏴󠁧󠁢󠁥󠁮󠁧󠁿 Oxford,
          England. I've been a developer for almost 10 years now, starting with
          PowerBASIC. I moved onto web development a few years into my career
          and I fell in love with it.
        </p>
        <h3 class="text-2xl border-b border-white">Backend</h3>
        <div class="text-5xl flex flex-row gap-5">
          <icon-dot-net />
          <icon-node-js />
          <icon-python />
        </div>
        <h3 class="text-2xl border-b border-white">Frontend</h3>
        <div class="text-5xl flex flex-row gap-5">
          <icon-vue-js />
          <icon-nuxt-js />
          <icon-angular />
          <icon-typescript />
          <icon-javascript />
          <icon-tailwind-css />
        </div>
        <h3 class="text-2xl border-b border-white">Databases</h3>
        <div class="text-5xl flex flex-row gap-5">
          <icon-postgresql />
          <icon-mysql />
          <icon-mongodb />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconDotNet from "~icons/cib/dot-net";
import IconNodeJs from "~icons/cib/node-js";
import IconPython from "~icons/cib/python";
import IconVueJs from "~icons/cib/vue-js";
import IconNuxtJs from "~icons/cib/nuxt-js";
import IconAngular from "~icons/cib/angular";
import IconTypescript from "~icons/cib/typescript";
import IconJavascript from "~icons/cib/javascript";
import IconTailwindCss from "~icons/bxl/tailwind-css";
import IconPostgresql from "~icons/cib/postgresql";
import IconMysql from "~icons/cib/mysql";
import IconMongodb from "~icons/cib/mongodb";
type Theme = "light" | "dark";

const LOCAL_STORAGE_THEME_KEY = "theme";

const darkMode = useState("theme", () => false);

const setTheme = (newTheme: Theme) => {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  darkMode.value = newTheme === "dark";
};

onMounted(() => {
  const isDarkModePreferred = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const themeFromLocalStorage = localStorage.getItem(
    LOCAL_STORAGE_THEME_KEY
  ) as Theme;

  if (themeFromLocalStorage) {
    setTheme(themeFromLocalStorage);
  } else {
    setTheme(isDarkModePreferred ? "dark" : "light");
  }
});

watch(darkMode, (selected) => {
  setTheme(selected ? "dark" : "light");
});
</script>
