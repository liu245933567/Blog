<!-- 标签页 -->
<template>
  <div class="min-w-75 min-h-25 max-h-[40vh] max-w-[40vw] overflow-y-auto p-5">
    <div class="tags">
      <span class="tag" v-for="(item, key) in data">
        <a class="a" :href="withBase(`/?tag=${key.toString()}`)">
          {{ '#' + key }}<strong class="VPBadge tip strong mini">{{ data[key].length }}</strong></a
        >
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { withBase } from 'vitepress';
import { Post } from '../types';
import { data as themeposts } from '../data/posts.data';

// 获取所有 tag
function initTags(post: Post[]) {
  const data: any = {};
  for (let index = 0; index < post.length; index++) {
    const element = post[index];
    const tags = element?.frontmatter?.tags;
    if (tags) {
      tags.forEach((item: any) => {
        if (data[item]) {
          data[item].push(element);
        } else {
          data[item] = [];
          data[item].push(element);
        }
      });
    }
  }
  return data;
}

const data = computed(() => initTags(themeposts));
</script>

<style scoped>
.wrap {
  min-width: 300px;
  min-height: 100px;
  max-height: 40vh;
  max-width: 40vw;
  overflow-y: auto;
  padding: 20px;
}

.tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  line-height: 24px;
}

.tag {
  margin: 5px;
  padding: 0 8px;
  display: inline-block;
  background-color: rgba(123, 123, 123, 0.05);
  color: var(--vp-c-text-1);
  font-size: 12px;
  border-radius: 2px;
  line-height: 24px;

  .a {
    color: var(--vp-c-text-1);
    font-weight: 500;
    text-decoration: none;
  }

  .a:hover {
    color: var(--vp-c-brand);
  }
}
</style>
