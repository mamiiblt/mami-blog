<script setup lang="ts">
import { aboutPage, footerData, navbarData } from '~/data'

useHead({
  title: 'About',
  meta: [
    {
      name: 'description',
      content: footerData.author,
    },
  ],
})

defineOgImageComponent('About', {
  headline: 'Hello 👋',
  title: navbarData.homeTitle,
  description: 'You can find the articles I have written about my projects and other things here.',
  link: '/mamiiblt.jpg',
})
</script>

<template>
  <div class="py-5">
    <div class="sm:grid grid-cols-8 px-6 py-5 sm:py-9 gap-5 container max-w-5xl mx-auto">
      <div class="col-span-5 max-w-md">
        <div class="hidden sm:block flex justify-between">
          <div>
            <h1 class="text-xl sm:text-4xl pb-2 font-bold">
              Muhammed Ali
            </h1>
            <p class="text-sm sm:text-2xl pb-2 font-bold">
              a.k.a mami, muhammedmgs
            </p>
            <p class="text-sm sm:text-2xl pb-2 font-bold">
              🇹🇷
            </p>

            <div class="my-3 space-x-2 md:space-x-3 pb-10">
              <NuxtLink
                to="https://github.com/mamiiblt"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Github"
              >
                <Icon name="fa:github" size="1em" />
              </NuxtLink>
              <NuxtLink
                to="https://twitter.com/mamiiblt"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Twitter"
              >
                <Icon name="fa:twitter-square" size="1em" />
              </NuxtLink>
              <NuxtLink
                to="https://t.me/mamiiblt"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Telegram"
              >
                <Icon name="fa:telegram" size="1em" />
              </NuxtLink>
            </div>
          </div>
          <div class="sm:hidden block col-span-3 pb-5 dark:text-[#F1F2F4]">
            <NuxtImg src="/mamiiblt.jpg" width="125" height="115" quality="50" class="rounded-md" />
          </div>
        </div>
        <div class="sm:hidden flex justify-center text-center">
          <div>
            <div class="sm:hidden col-span-3 pb-10 flex justify-center dark:text-[#F1F2F4] text-center">
              <NuxtImg src="/mamiiblt.jpg" width="140" height="140" quality="50" class="rounded-full" />
            </div>
            <h1 class="text-xl sm:text-4xl pb-2 font-bold text-center">
              Muhammed Ali Bulut
            </h1>
            <p class="text-sm sm:text-2xl pb-2 font-normal text-center">
              a.k.a mami, muhammedmgs
            </p>
            <p class="text-sm sm:text-2xl pb-2 font-bold text-center">
              🇹🇷
            </p>

            <div class="my-3 space-x-2 md:space-x-3 pb-10">
              <NuxtLink
                to="https://github.com/mamiiblt"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Github"
              >
                <Icon name="fa:github" size="1em" />
              </NuxtLink>
              <NuxtLink
                to="https://twitter.com/mamiiblt"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Twitter"
              >
                <Icon name="fa6-brands:x-twitter" size="1em" />
              </NuxtLink>
              <NuxtLink
                to="https://open.spotify.com/user/qpg4rzp2n15covoviu0tkyj69?si=AkiQulRPRdO6ENBCAT7SHw"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Spotify"
              >
                <Icon name="fa-brands:spotify" size="1em" />
              </NuxtLink>
              <NuxtLink
                to="https://t.me/mamiiblt"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Telegram"
              >
                <Icon name="fa-brands:telegram-plane" size="1em" />
              </NuxtLink>
              <NuxtLink
                to="https://www.patreon.com/mamiiblt"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Patreon"
              >
                <Icon name="fa-brands:patreon" size="1em" />
              </NuxtLink>
              <NuxtLink
                to="mailto:mami@mamiiblt.me"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Mail"
              >
                <Icon name="fa-regular:envelope" size="1em" />
              </NuxtLink>
            </div>
          </div>
        </div>

        <p class="text-center">{{ aboutPage.aboutMe }}</p>
      </div>
      <div class="hidden sm:block col-span-3">
        <NuxtImg src="/mamiiblt.jpg" width="450" height="500" quality="50" class="rounded-md" />
      </div>
    </div>
  </div>
</template>
