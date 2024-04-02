<script setup lang="ts">
import PageContainer from "./PageContainer.vue";
import { data as tmdbs } from "../data/tmdb.data";
</script>

<template>
  <div class="p-4">
    <ul
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 2xl:w-410 m-x-auto gap-4"
    >
      <li v-for="tmdb of tmdbs" class="list-none w-full">
        <div class="w-max m-x-auto">
          <img
            class="w-220px h-330px rounded-2"
            :src="`https://image.tmdb.org/t/p/w220_and_h330_face${tmdb.poster_path}`"
          />
          <div class="mt-4">
            <h3 class="text-lg">{{ tmdb.name }}</h3>
            <p>{{ tmdb.first_air_date }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
