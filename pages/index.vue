<script lang="ts" setup>
import { navbarData } from '~/data'

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        "Welcome to mamiiblt's blog",
    },
  ],
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'Hello 👋',
  title: navbarData.homeTitle,
  description: "Welcome to mamiiblt's blog",
  link: '/riyad.jpg',
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />
    <MainRecent />
    <MainTrending />
  </main>
</template>
