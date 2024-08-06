<script lang="ts" setup>
import { computed } from 'vue';
import { withBase } from 'vitepress';
import { Post } from '../types';
import { data as themeposts } from '../data/posts.data';

const emits = defineEmits(['click-tag']);

/**
 * 获取所有 tag
 */
function initTags(post: Post[]) {
  const data: Record<string, Post[]> = {};

  for (let index = 0; index < post.length; index++) {
    const element = post[index];
    const tags = element?.frontmatter?.tags;
    if (tags) {
      tags.forEach((item) => {
        if (data[item]) {
          data[item].push(element);
        } else {
          data[item] = [element];
        }
      });
    }
  }
  return data;
}

const data = computed(() => initTags(themeposts));
</script>

<!-- 标签页 -->
<template>
  <ul class="flex flex-row flex-wrap leading-6 gap-2">
    <li
      v-for="(item, key) in data"
      :key="key"
      class="inline-block text-[var(--vp-c-text-1)] bg-[rgba(123,123,123,0.05)] rounded-sm text-xs leading-6 p-x-2"
    >
      <a class="a" :href="withBase(`/?tag=${key.toString()}`)" @click="() => emits('click-tag')">
        {{ '#' + key }}
        <Badge type="tip" :text="item.length" />
      </a>
    </li>
  </ul>
</template>
