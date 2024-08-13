<script lang="ts" setup>
import { computed } from 'vue';
import { useData } from 'vitepress';
import { useStorage } from '@vueuse/core';
import { data as themeposts } from '../data/posts.data';
import ArticleList from './ArticleList.vue';
import { Post } from '../types';

/** 根据tag获取相关文章 */
function relatebyTags(post: Post[], article: any) {
  const data = {
    relate: [] as Post[],
  };
  for (let index = 0; index < post.length; index++) {
    const element = post[index];
    const tags = element?.frontmatter?.tags as string[];
    const title = element?.frontmatter?.title as string;
    if (tags) {
      tags.forEach((item) => {
        if (article.frontmatter.tags.includes(item) && title !== article.frontmatter.title) {
          data['relate'].push(element);
        }
      });
    }
  }
  let uniqueArr = Array.from(new Set(data.relate));

  return uniqueArr;
}

const { theme, page, frontmatter } = useData();
const listview = useStorage('listview', 'grid');
const article = {
  frontmatter: page.value?.frontmatter,
  relativePath: page.value?.relativePath,
};
const posts = computed(() => relatebyTags(themeposts, article));
</script>

<!-- 文章内页底部的相关文章列表 -->
<template>
  <div class="articlerelate" v-if="posts.length">
    <h2 class="h2">相关推荐</h2>
    <div
      class="postlist"
      :class="{
        grid: listview === 'grid',
        list: listview === 'list',
        hasaside: frontmatter.aside,
        hassidebar: frontmatter.sidebar || theme?.sidebar?.length,
      }"
    >
      <div class="list" v-for="(article, index) in posts.slice(0, 6)" :key="index">
        <ArticleList :article="article" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.articlerelate {
  .h2 {
    font-size: 16px;
    margin: 48px 0 16px;
    border-top: 1px solid var(--vp-c-divider);
    padding-top: 24px;
    letter-spacing: -0.02em;
    line-height: 32px;
  }
}
</style>
