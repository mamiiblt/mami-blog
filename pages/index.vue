<script lang="ts" setup>
import { navbarData } from '~/data'

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Welcome To My Blog Site. You can find blogs I have written about my projects and other things here',
    },
  ],
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'Hello 👋',
  title: navbarData.homeTitle,
  description: 'You can find anything about me in here!',
  link: '/mamiiblt.jpg',
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />
    <MainRecent />
    <MainTrending />
  </main>
</template>
