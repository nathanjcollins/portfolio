<template>
  <section class="py-20 px-4 relative">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="gradient-text">Tech Stack</span>
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Technologies I love working with and have deep expertise in
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Frontend -->
        <div class="glass-card p-8 card-hover-lift group">
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-500/30 transition-colors"
            >
              <Icon name="mdi:vuejs" class="w-8 h-8 text-green-400" />
            </div>
            <h3 class="text-xl font-semibold">Frontend</h3>
          </div>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-gray-300">Nuxt 3</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-300">Vue.js</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-300">Tailwind CSS</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-300">TypeScript</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div class="glass-card p-8 card-hover-lift group">
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-500/30 transition-colors"
            >
              <Icon
                name="mdi:microsoft-visual-studio"
                class="w-8 h-8 text-emerald-400"
              />
            </div>
            <h3 class="text-xl font-semibold">Backend</h3>
          </div>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-gray-300">C#</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-300">F#</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-300">ASP.NET Core</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-300">Node.js</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Database -->
        <div class="glass-card p-8 card-hover-lift group">
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-teal-500/30 transition-colors"
            >
              <Icon name="mdi:database" class="w-8 h-8 text-teal-400" />
            </div>
            <h3 class="text-xl font-semibold">Database</h3>
          </div>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-gray-300">PostgreSQL</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-teal-400 rounded-full"></div>
                <div class="w-2 h-2 bg-teal-400 rounded-full"></div>
                <div class="w-2 h-2 bg-teal-400 rounded-full"></div>
                <div class="w-2 h-2 bg-teal-400 rounded-full"></div>
                <div class="w-2 h-2 bg-teal-400 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-300">SQL Server</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-teal-400 rounded-full"></div>
                <div class="w-2 h-2 bg-teal-400 rounded-full"></div>
                <div class="w-2 h-2 bg-teal-400 rounded-full"></div>
                <div class="w-2 h-2 bg-teal-400 rounded-full"></div>
                <div class="w-2 h-2 bg-teal-400 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-300">Entity Framework</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-teal-400 rounded-full"></div>
                <div class="w-2 h-2 bg-teal-400 rounded-full"></div>
                <div class="w-2 h-2 bg-teal-400 rounded-full"></div>
                <div class="w-2 h-2 bg-teal-400 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-300">Redis</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-teal-400 rounded-full"></div>
                <div class="w-2 h-2 bg-teal-400 rounded-full"></div>
                <div class="w-2 h-2 bg-teal-400 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- DevOps & Tools -->
        <div class="glass-card p-8 card-hover-lift group">
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-orange-500/30 transition-colors"
            >
              <Icon name="mdi:cloud" class="w-8 h-8 text-orange-400" />
            </div>
            <h3 class="text-xl font-semibold">DevOps & Cloud</h3>
          </div>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-gray-300">Docker</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-300">Azure</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-300">Git</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-300">CI/CD</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tools -->
        <div class="glass-card p-8 card-hover-lift group">
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 bg-lime-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-lime-500/30 transition-colors"
            >
              <Icon name="mdi:tools" class="w-8 h-8 text-lime-400" />
            </div>
            <h3 class="text-xl font-semibold">Tools & Workflow</h3>
          </div>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-gray-300">Neovim</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-lime-400 rounded-full"></div>
                <div class="w-2 h-2 bg-lime-400 rounded-full"></div>
                <div class="w-2 h-2 bg-lime-400 rounded-full"></div>
                <div class="w-2 h-2 bg-lime-400 rounded-full"></div>
                <div class="w-2 h-2 bg-lime-400 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-300">Claude Code</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-lime-400 rounded-full"></div>
                <div class="w-2 h-2 bg-lime-400 rounded-full"></div>
                <div class="w-2 h-2 bg-lime-400 rounded-full"></div>
                <div class="w-2 h-2 bg-lime-400 rounded-full"></div>
                <div class="w-2 h-2 bg-lime-400 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-300">Git</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-lime-400 rounded-full"></div>
                <div class="w-2 h-2 bg-lime-400 rounded-full"></div>
                <div class="w-2 h-2 bg-lime-400 rounded-full"></div>
                <div class="w-2 h-2 bg-lime-400 rounded-full"></div>
                <div class="w-2 h-2 bg-lime-400 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-300">Bruno</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-lime-400 rounded-full"></div>
                <div class="w-2 h-2 bg-lime-400 rounded-full"></div>
                <div class="w-2 h-2 bg-lime-400 rounded-full"></div>
                <div class="w-2 h-2 bg-lime-400 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Architecture -->
        <div class="glass-card p-8 card-hover-lift group">
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-500/30 transition-colors"
            >
              <Icon name="mdi:architecture" class="w-8 h-8 text-green-400" />
            </div>
            <h3 class="text-xl font-semibold">Architecture</h3>
          </div>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-gray-300">Clean Architecture</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-300">Microservices</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-300">CQRS</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-300">Event Sourcing</span>
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div class="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
