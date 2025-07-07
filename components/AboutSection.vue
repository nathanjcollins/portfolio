<template>
  <section id="about" class="py-20 px-4 relative">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left side - Text content -->
        <div class="space-y-8">
          <div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              About <span class="gradient-text">Me</span>
            </h2>
            <p class="text-xl text-gray-300 leading-relaxed mb-6">
              I'm a passionate Lead Developer at Cap Energy with over 10 years
              of experience building scalable web applications and leading
              development teams.
            </p>
            <p class="text-lg text-gray-400 leading-relaxed mb-6">
              Based in the historic city of Oxford, UK, I currently lead
              development at Cap Energy, where I help transform digital presence
              and streamline operations through elegant code and thoughtful
              architecture.
            </p>
          </div>

          <!-- Experience highlights -->
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
              >
                <Icon name="mdi:rocket" class="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-2">Full-Stack Expertise</h3>
                <p class="text-gray-400">
                  Proficient in modern web technologies from frontend frameworks
                  like Vue and Nuxt to backend systems with C# and F#, plus
                  database design and optimization.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
              >
                <Icon
                  name="mdi:account-group"
                  class="w-6 h-6 text-purple-400"
                />
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-2">Team Leadership</h3>
                <p class="text-gray-400">
                  Led development teams of 3-8 engineers, mentoring junior
                  developers and establishing best practices for code quality
                  and deployment processes.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
              >
                <Icon name="mdi:heart" class="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-2">
                  Open Source Contributor
                </h3>
                <p class="text-gray-400">
                  Actively contribute to open source projects and maintain
                  several libraries used by the development community. I believe
                  in giving back to the ecosystem that has given me so much.
                </p>
              </div>
            </div>
          </div>

          <!-- Location and availability -->
          <div class="glass-card p-6">
            <div class="flex items-center space-x-4">
              <Icon name="mdi:map-marker" class="w-6 h-6 text-green-400" />
              <div>
                <p class="font-semibold">Oxford, United Kingdom</p>
                <p class="text-sm text-gray-400">
                  Leading development at Cap Energy
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-8">
          <!-- Core values -->
          <div class="glass-card p-8">
            <h3 class="text-xl font-semibold mb-6 text-center">Core Values</h3>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span class="text-gray-300">Clean, maintainable code</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span class="text-gray-300">User-centered design</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span class="text-gray-300">Continuous learning</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <span class="text-gray-300">Team collaboration</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span class="text-gray-300">Performance optimization</span>
              </div>
            </div>
          </div>

          <!-- Call to action -->
          <div class="text-center">
            <p class="text-gray-400 mb-6">Want to connect?</p>
            <a
              href="mailto:hello@nathancollins.dev"
              class="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Icon name="mdi:email" class="w-5 h-5" />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
