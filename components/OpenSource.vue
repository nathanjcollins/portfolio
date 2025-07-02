<template>
  <section class="py-20 px-4 relative">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Open Source <span class="gradient-text">Contributions</span>
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          I believe in giving back to the developer community through open source projects and contributions
        </p>
      </div>

      <!-- Open Source Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div class="glass-card p-6 text-center">
          <div class="text-3xl font-bold gradient-text mb-2">50+</div>
          <div class="text-sm text-gray-400">Contributions</div>
        </div>
        <div class="glass-card p-6 text-center">
          <div class="text-3xl font-bold gradient-text mb-2">12</div>
          <div class="text-sm text-gray-400">Repositories</div>
        </div>
        <div class="glass-card p-6 text-center">
          <div class="text-3xl font-bold gradient-text mb-2">8</div>
          <div class="text-sm text-gray-400">Languages</div>
        </div>
        <div class="glass-card p-6 text-center">
          <div class="text-3xl font-bold gradient-text mb-2">100+</div>
          <div class="text-sm text-gray-400">Stars Earned</div>
        </div>
      </div>

      <!-- Featured Projects -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <!-- Project 1 -->
        <div class="glass-card p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
          <div class="flex items-start justify-between mb-6">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Icon name="mdi:vuejs" class="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h3 class="text-xl font-semibold group-hover:text-green-400 transition-colors">Vue Component Library</h3>
                <p class="text-sm text-gray-500">Personal Project</p>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="mdi:star" class="w-4 h-4 text-yellow-400" />
              <span class="text-sm text-gray-400">45</span>
            </div>
          </div>
          
          <p class="text-gray-400 mb-6">
            A collection of reusable Vue 3 components with TypeScript support, built with accessibility and performance in mind. Includes form components, data tables, and UI utilities.
          </p>
          
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">Vue 3</span>
            <span class="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">TypeScript</span>
            <span class="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Vite</span>
            <span class="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full">Vitest</span>
          </div>
          
          <div class="flex items-center space-x-4">
            <a href="#" class="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <Icon name="mdi:github" class="w-5 h-5" />
              <span class="text-sm">View Code</span>
            </a>
            <a href="#" class="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <Icon name="mdi:eye" class="w-5 h-5" />
              <span class="text-sm">Live Demo</span>
            </a>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="glass-card p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
          <div class="flex items-start justify-between mb-6">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Icon name="mdi:language-csharp" class="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 class="text-xl font-semibold group-hover:text-purple-400 transition-colors">F# Utils Library</h3>
                <p class="text-sm text-gray-500">Open Source</p>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="mdi:star" class="w-4 h-4 text-yellow-400" />
              <span class="text-sm text-gray-400">28</span>
            </div>
          </div>
          
          <p class="text-gray-400 mb-6">
            Functional programming utilities for F# developers. Includes monads, validation helpers, and async workflows that make F# development more productive and enjoyable.
          </p>
          
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">F#</span>
            <span class="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">.NET Core</span>
            <span class="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">NUnit</span>
            <span class="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">Paket</span>
          </div>
          
          <div class="flex items-center space-x-4">
            <a href="#" class="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <Icon name="mdi:github" class="w-5 h-5" />
              <span class="text-sm">View Code</span>
            </a>
            <a href="#" class="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <Icon name="mdi:package-variant" class="w-5 h-5" />
              <span class="text-sm">NuGet Package</span>
            </a>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="glass-card p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
          <div class="flex items-start justify-between mb-6">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Icon name="mdi:database" class="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h3 class="text-xl font-semibold group-hover:text-cyan-400 transition-colors">PostgreSQL Extensions</h3>
                <p class="text-sm text-gray-500">Community Contribution</p>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="mdi:star" class="w-4 h-4 text-yellow-400" />
              <span class="text-sm text-gray-400">67</span>
            </div>
          </div>
          
          <p class="text-gray-400 mb-6">
            Performance optimization extensions for PostgreSQL including custom aggregates and indexing strategies. Used in production by several companies to improve query performance.
          </p>
          
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">PostgreSQL</span>
            <span class="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">C</span>
            <span class="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">SQL</span>
            <span class="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">Performance</span>
          </div>
          
          <div class="flex items-center space-x-4">
            <a href="#" class="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <Icon name="mdi:github" class="w-5 h-5" />
              <span class="text-sm">View Code</span>
            </a>
            <a href="#" class="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <Icon name="mdi:book-open" class="w-5 h-5" />
              <span class="text-sm">Documentation</span>
            </a>
          </div>
        </div>

        <!-- Project 4 -->
        <div class="glass-card p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
          <div class="flex items-start justify-between mb-6">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Icon name="mdi:react" class="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <h3 class="text-xl font-semibold group-hover:text-orange-400 transition-colors">Developer Tools</h3>
                <p class="text-sm text-gray-500">CLI Tool</p>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="mdi:star" class="w-4 h-4 text-yellow-400" />
              <span class="text-sm text-gray-400">35</span>
            </div>
          </div>
          
          <p class="text-gray-400 mb-6">
            A command-line tool for web developers that automates common tasks like project scaffolding, dependency management, and deployment workflows. Built with Node.js and TypeScript.
          </p>
          
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">Node.js</span>
            <span class="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">TypeScript</span>
            <span class="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Commander.js</span>
            <span class="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full">Jest</span>
          </div>
          
          <div class="flex items-center space-x-4">
            <a href="#" class="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <Icon name="mdi:github" class="w-5 h-5" />
              <span class="text-sm">View Code</span>
            </a>
            <a href="#" class="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <Icon name="mdi:npm" class="w-5 h-5" />
              <span class="text-sm">NPM Package</span>
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
            href="https://github.com/nathancollins" 
            class="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
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