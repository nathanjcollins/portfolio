<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
    <!-- Animated background -->
    <div class="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-teal-900/20"></div>
    <div class="absolute inset-0">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl opacity-60"></div>
      <div class="absolute top-3/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl opacity-40"></div>
      <div class="absolute bottom-1/4 left-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl opacity-50"></div>
    </div>

    <div class="relative z-10 text-center max-w-4xl mx-auto">
      <!-- Profile image -->
      <div class="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-green-500/30">
        <img 
          src="/images/profile.jpg" 
          alt="Nathan Collins" 
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Main heading -->
      <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        <span class="block">Hi, I'm</span>
        <span class="gradient-text block animate-gradient bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-[length:200%_200%]">
          Nathan Collins
        </span>
      </h1>

      <!-- Subtitle -->
      <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
        Lead Developer at Cap Energy from Oxford, UK with 10+ years of experience crafting exceptional web applications
      </p>

      <!-- Tech highlights -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <span class="px-4 py-2 glass-card text-sm font-medium">Nuxt & Vue</span>
        <span class="px-4 py-2 glass-card text-sm font-medium">C# & F#</span>
        <span class="px-4 py-2 glass-card text-sm font-medium">PostgreSQL</span>
        <span class="px-4 py-2 glass-card text-sm font-medium">Tailwind CSS</span>
        <span class="px-4 py-2 glass-card text-sm font-medium">Open Source</span>
      </div>

      <!-- CTA buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink 
          to="/blog" 
          class="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Read My Blog
        </NuxtLink>
        <a 
          href="#about" 
          class="px-8 py-4 glass-card hover:bg-white/10 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/30"
        >
          Learn More
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
      <Icon name="mdi:chevron-down" class="w-8 h-8 text-gray-400" />
    </div>
  </section>
</template>

<style scoped>
@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  /* Disabled animation temporarily to debug CPU usage */
  /* animation: gradient 12s linear infinite;
  will-change: background-position; */
  transform: translateZ(0);
}
</style>