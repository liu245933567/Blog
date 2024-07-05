<script setup lang="ts">
import dayjs from "dayjs";
import type { Post } from "../data/posts.data";

defineProps<{
  post: Post;
}>();
</script>

<template>
  <a
    :href="post.url"
    class="block p-4 rounded-2 border border-solid border-[--vp-c-border] bg-[rgb(249,250,251)] dark:bg-[#202022]"
  >
    <div class="flex justify-between">
      <h3 class="text-lg font-bold">{{ post.title }}</h3>
      <div>
        <div
          class="i-arcticons:simple-calendar w-1em h-1em relative top--.5"
        ></div>
        {{ dayjs(post.date).format("YYYY-MM-DD") }}
      </div>
    </div>
    <div v-if="post.categories" class="mt-2">
      <span v-for="categorie of post.categories" class="mr-4">
        <span class="i-arcticons:folder w-1.2em h-1.2em"></span>
        {{ categorie }}</span
      >
    </div>
  </a>
</template>
