<script setup lang="ts">
import PageContainer from "./PageContainer.vue";
import { data as books } from "../data/book.data";

const transformCoverImageUrl = (coverImageUrl: string) => {
  if (coverImageUrl.includes("douban")) {
    return `https://images.weserv.nl/?url=${encodeURIComponent(coverImageUrl)}`;
  }

  return coverImageUrl;
};
</script>

<template>
  <PageContainer>
    <ul>
      <li
        v-for="book of books"
        class="list-none m-4 flex p-4 rounded-2 border border-solid border-[--vp-c-border] bg-[rgb(249,250,251)] dark:bg-[#202022]"
      >
        <div class="w-40 h-60">
          <img
            v-if="book.coverImageUrl"
            :src="transformCoverImageUrl(book.coverImageUrl)"
            :alt="book.name"
            class="w-40 h-60 object-cover"
          />
        </div>

        <div class="ml-4 flex-1">
          <h3 class="text-lg font-semibold">
            《{{ book.name }}》 {{ book.author }}
          </h3>
          <pre
            class="block w-full h-50 overflow-y-auto whitespace-pre-wrap no-scrollbar m-0"
          >
            {{ book.contentSummary }}
          </pre>
        </div>
      </li>
    </ul>
  </PageContainer>
</template>
