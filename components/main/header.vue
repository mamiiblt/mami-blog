<script setup lang="ts">
import { navbarData } from '../../data'

const colorMode = useColorMode()
function onClick(val: string) {
  colorMode.preference = val
}

const route = useRoute()
function isActive(path: string) {
  return route.path.startsWith(path)
}
</script>

<template>
  <div class="py-5 border-b dark:border-gray-800 font-semibold">
    <div class="flex px-6 container max-w-5xl justify-between mx-auto items-baseline">
      <ul class="flex items-baseline space-x-5">
        <li class="text-base sm:text-2xl font-bold">
          <NuxtLink to="/" :class="{ underline: $route.path === '/' }">
            mamiiblt
          </NuxtLink>
        </li>
      </ul>
      <ul class="flex items-center space-x-3 sm:space-x-6 text-sm sm:text-lg">
        <li>
          <NuxtLink to="/blogs" :class="{ underline: isActive('/blogs') }"> Blogs </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects" :class="{ underline: isActive('/projects') }">
            Projects
          </NuxtLink>
        </li>
        <li title="About Me">
          <NuxtLink
            to="/about"
            aria-label="About me"
            :class="{ underline: $route.path === '/about' }"
          >
            About
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
