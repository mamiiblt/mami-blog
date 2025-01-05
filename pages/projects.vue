<script lang="ts" setup>
import { makeFirstCharUpper } from '@/utils/helper'

const { data } = await useAsyncData('all-blog-post-for-category', () =>
  queryContent('/blogs').sort({ _id: -1 }).find(),
)

const allTags = new Map()

data.value?.forEach((blog) => {
  const tags: Array<string> = blog.tags || []
  tags.forEach((tag) => {
    if (allTags.has(tag)) {
      const cnt = allTags.get(tag)
      allTags.set(tag, cnt + 1)
    } else {
      allTags.set(tag, 1)
    }
  })
})

useHead({
  title: 'Projects',
  meta: [
    {
      name: 'description',
      content:
        'Here is the my projects',
    },
  ],
})

// Generate OG Image
const siteData = useSiteConfig()
defineOgImage({
  props: {
    title: 'Projects',
    description:
      'Here is the all of the my projects...',
    siteName: siteData.url,
  },
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <ProjectsHero />
    <div v-auto-animate class="space-y-5 my-5 px-4">
      <article class="group border dark:border-gray-800 m-2 rounded-2xl overflow-hidden shadow-sm text-zinc-700 dark:text-zinc-300">
        <div class="sm:col-span-7 p-5">
        <h2
          class="text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"
        >
        Instafel
        </h2>
        <p class="text-ellipsis line-clamp-2">
          Provides fast & up-to-date Instagram alpha experience
        </p>
        <div class="text-black dark:text-zinc-300 text-sm mt-2 mb-1 md:flex md:space-x-6">
          <div class="flex items-center mb-1">
            <Icon name="fa-brands:android" size="1.15em" class="mr-2" />
            <p>Android (FOSS)</p>
          </div>
          <div class="flex items-center">
            <Icon name="fa-solid:link" size="1.15em" class="mr-2" />
            <NuxtLink to="https://t.me/instafel">t.me/instafel</NuxtLink>
          </div>
        </div>
      </div>
      </article>
      <article class="group border dark:border-gray-800 m-2 rounded-2xl overflow-hidden shadow-sm text-zinc-700 dark:text-zinc-300">
        <div class="sm:col-span-7 p-5">
        <h2
          class="text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"
        >
        Instafel Updater
        </h2>
        <p class="text-ellipsis line-clamp-2">
          A solution app for automatic updating of Instafel
        </p>
        <div class="text-black dark:text-zinc-300 text-sm mt-2 mb-1 md:flex md:space-x-6">
          <div class="flex items-center mb-1">
            <Icon name="fa-brands:android" size="1.15em" class="mr-2" />
            <p>Android (FOSS)</p>
          </div>
          <div class="flex items-center mb-1">
            <Icon name="fa-brands:github" size="1.15em" class="mr-2" />
            <NuxtLink to="https://github.com/mamiiblt/instafel-updater">mamiiblt/instafel-updater</NuxtLink>
          </div>
          <div class="flex items-center">
            <Icon name="fa-solid:link" size="1.15em" class="mr-2" />
            <NuxtLink to="https://t.me/instafel">t.me/instafel</NuxtLink>
          </div>
        </div>
      </div>
      </article>

    </div>
  </main>
</template>
