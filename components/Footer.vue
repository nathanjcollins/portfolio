<template>
  <footer class="py-20 px-4 border-t border-gray-800">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- Brand column -->
        <div class="md:col-span-2">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-12 h-12 rounded-lg overflow-hidden ring-2 ring-green-500/30">
              <img 
                src="/images/profile.jpg" 
                alt="Nathan Collins" 
                class="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 class="text-xl font-bold">Nathan Collins</h3>
              <p class="text-gray-400">Lead Developer at Cap Energy</p>
            </div>
          </div>
          <p class="text-gray-400 mb-6 max-w-md">
Lead Developer at Cap Energy, passionate about creating exceptional web applications and contributing to the open source community. Based in Oxford, UK.
          </p>
          <div class="flex items-center space-x-4">
            <a href="https://github.com/nathancollins" class="text-gray-400 hover:text-white transition-colors">
              <Icon name="mdi:github" class="w-6 h-6" />
            </a>
            <a href="mailto:hello@nathancollins.dev" class="text-gray-400 hover:text-white transition-colors">
              <Icon name="mdi:email" class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <Icon name="mdi:linkedin" class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <Icon name="mdi:twitter" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Navigation column -->
        <div>
          <h4 class="font-semibold text-lg mb-6">Navigation</h4>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" class="text-gray-400 hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <NuxtLink to="/blog" class="text-gray-400 hover:text-white transition-colors">
                Blog
              </NuxtLink>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
            </li>
          </ul>
        </div>

        <!-- Technologies column -->
        <div>
          <h4 class="font-semibold text-lg mb-6">Technologies</h4>
          <ul class="space-y-3">
            <li>
              <span class="text-gray-400">Vue.js & Nuxt</span>
            </li>
            <li>
              <span class="text-gray-400">C# & F#</span>
            </li>
            <li>
              <span class="text-gray-400">PostgreSQL</span>
            </li>
            <li>
              <span class="text-gray-400">Tailwind CSS</span>
            </li>
            <li>
              <span class="text-gray-400">TypeScript</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom section -->
      <div class="pt-8 border-t border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="flex items-center space-x-6 text-sm text-gray-400">
            <span>© {{ currentYear }} Nathan Collins</span>
            <span class="flex items-center space-x-2">
              <Icon name="mdi:map-marker" class="w-4 h-4" />
              <span>Oxford, UK</span>
            </span>
          </div>
          <div class="flex items-center space-x-6 text-sm text-gray-400">
            <span>Built with Nuxt 3 & Tailwind CSS</span>
            <span class="flex items-center space-x-1">
              <span>Made with</span>
              <Icon name="mdi:heart" class="w-4 h-4 text-red-400" />
              <span>and ☕</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>