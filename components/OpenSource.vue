<template>
  <section class="py-20 px-4 relative">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          My <span class="gradient-text">Projects</span>
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          These are some of the projects I've worked on in my free time.
        </p>
      </div>

      <!-- Featured Projects -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <!-- Project 1 - Zed F# -->
        <div
          class="glass-card p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
        >
          <div class="flex items-start justify-between mb-6">
            <div class="flex items-center space-x-3">
              <div
                class="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:file-code-outline"
                  class="w-8 h-8 text-emerald-400"
                />
              </div>
              <div>
                <h3
                  class="text-xl font-semibold group-hover:text-emerald-400 transition-colors"
                >
                  Zed F# Extension
                </h3>
                <p class="text-sm text-gray-500">Editor Extension</p>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="mdi:star" class="w-4 h-4 text-yellow-400" />
              <span class="text-sm text-gray-400">31</span>
            </div>
          </div>

          <p class="text-gray-400 mb-6">
            F# language support for the Zed editor, providing syntax
            highlighting, language features, and integration with fsautocomplete
            for a seamless F# development experience.
          </p>

          <div class="flex flex-wrap gap-2 mb-6">
            <span
              class="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full"
              >F#</span
            >
            <span
              class="px-2 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full"
              >Scheme</span
            >
            <span
              class="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full"
              >Tree-sitter</span
            >
            <span
              class="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full"
              >Rust</span
            >
          </div>

          <div class="flex items-center space-x-4">
            <a
              href="https://github.com/nathanjcollins/zed-fsharp"
              class="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="mdi:github" class="w-5 h-5" />
              <span class="text-sm">View Code</span>
            </a>
            <a
              href="https://github.com/nathanjcollins/zed-fsharp"
              class="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="mdi:download" class="w-5 h-5" />
              <span class="text-sm">Install</span>
            </a>
          </div>
        </div>

        <!-- Project 2 - Neovim Config -->
        <div
          class="glass-card p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
        >
          <div class="flex items-start justify-between mb-6">
            <div class="flex items-center space-x-3">
              <div
                class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center"
              >
                <Icon name="mdi:code-braces" class="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h3
                  class="text-xl font-semibold group-hover:text-green-400 transition-colors"
                >
                  Neovim Config
                </h3>
                <p class="text-sm text-gray-500">Personal Config</p>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="mdi:star" class="w-4 h-4 text-yellow-400" />
              <span class="text-sm text-gray-400">0</span>
            </div>
          </div>

          <p class="text-gray-400 mb-6">
            A carefully crafted Neovim configuration based on kickstart.nvim,
            optimized for modern development workflows with LSP, treesitter, and
            productivity plugins.
          </p>

          <div class="flex flex-wrap gap-2 mb-6">
            <span
              class="px-2 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full"
              >Lua</span
            >
            <span
              class="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full"
              >Neovim</span
            >
            <span
              class="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full"
              >LSP</span
            >
            <span
              class="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full"
              >Treesitter</span
            >
          </div>

          <div class="flex items-center space-x-4">
            <a
              href="https://github.com/nathanjcollins/nvim-config"
              class="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="mdi:github" class="w-5 h-5" />
              <span class="text-sm">View Code</span>
            </a>
            <a
              href="https://github.com/nathanjcollins/nvim-config"
              class="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="mdi:download" class="w-5 h-5" />
              <span class="text-sm">Setup Guide</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center">
        <p class="text-gray-400 mb-6">
          Interested in collaborating on open source projects?
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/nathanjcollins"
            class="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Icon name="mdi:github" class="w-5 h-5" />
            <span>View GitHub Profile</span>
          </a>
          <a
            href="mailto:hello@nathancollins.dev"
            class="inline-flex items-center space-x-2 px-6 py-3 glass-card hover:bg-white/10 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/30"
          >
            <Icon name="mdi:email" class="w-5 h-5" />
            <span>Let's Collaborate</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

