<script setup lang="ts">
import PageContainer from "./PageContainer.vue";
import { data as tmdbs } from "../data/tmdb.data";
</script>

<template>
  <PageContainer>
    <ul>
      <li
        v-for="tmdb of tmdbs"
        class="list-none m-4 flex p-4 rounded-2 border border-solid border-[--vp-c-border] bg-[rgb(249,250,251)] dark:bg-[#202022]"
      >
        {{ tmdb.name }}
      </li>
    </ul>
  </PageContainer>
</template>
