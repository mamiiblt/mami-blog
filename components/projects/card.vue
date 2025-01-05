<script lang="ts" setup>
interface Props {
  title?: string
  link?: string
  description?: string
}

withDefaults(defineProps<Props>(), {
  title: 'no-title',
  date: 'no-date',
  description: 'no-description'
})
</script>

<template>
  <article
    class="group border dark:border-gray-800 m-2 rounded-2xl overflow-hidden shadow-sm text-zinc-700 dark:text-zinc-300"
  >
      <div class="sm:col-span-7 p-5">
        <h2
          class="text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"
        >
        {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-2">
          {{ description }}
        </p>
        <div class="text-black dark:text-zinc-300 text-sm mt-2 mb-1 md:flex md:space-x-6">
          <div class="flex items-center">
            <Icon name="fa-solid:link" size="1.15em" class="mr-2" />
            <p>{{ link }}</p>
          </div>
        
        </div>
      </div>
  </article>
</template>
