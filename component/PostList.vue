<script setup lang="ts">
import { data as posts } from "../data/posts.data";
import PageContainer from "./PageContainer.vue";
import PostItem from "./PostItem.vue";
</script>

<template>
  <PageContainer>
    <ul>
      <li v-for="post of posts" class="list-none m-4">
        <PostItem :post="post" />
      </li>
    </ul>
  </PageContainer>
</template>
