<script setup lang="ts">
import { computed, ref } from "vue";
import { data as tmdbData } from "../data/tmdb.data";
import Tabs from "./tabs.vue";

const currentKey = ref("movies");

const data = computed(() => {
  console.log("tmdbData = ", tmdbData);
  return currentKey.value === "tv" ? tmdbData.tv : tmdbData.movies;
});
</script>

<template>
  <div class="p-4">
    <div class="text-center mt-4 mb-8">
      <Tabs
        v-model:value="currentKey"
        :options="[
          {
            label: '电影',
            value: 'movies',
          },
          {
            label: '剧集',
            value: 'tv',
          },
        ]"
      />
    </div>

    <ul
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 2xl:w-410 m-x-auto gap-4"
    >
      <li v-for="tmdb of data" class="list-none w-full">
        <div class="w-max m-x-auto">
          <img
            class="w-220px h-330px rounded-2"
            :src="`https://image.tmdb.org/t/p/w220_and_h330_face${tmdb.poster_path}`"
          />
          <div class="mt-4">
            <h3 class="text-lg">{{ tmdb.name ?? tmdb.title }}</h3>
            <p>{{ tmdb.first_air_date ?? tmdb.release_date }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
