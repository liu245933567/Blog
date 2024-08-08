<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useData, withBase } from 'vitepress';
import { data as themeposts } from '../data/posts.data';
import { Post } from '../types';
import NavLeftLink from './NavLeftLink.vue';

/** 获取所有分类 */
function initCats(post: Post[]) {
  const data: any = {};
  for (let index = 0; index < post.length; index++) {
    const element = post[index];
    const categories = element?.frontmatter?.categories;
    if (categories) {
      categories.forEach((item: any) => {
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

const url = window.location.href.split('?')[1];

const params = new URLSearchParams(url);

const { page } = useData();

const data = computed(() => initCats(themeposts));
defineProps<{
  type?: string;
}>();

const selected = ref('');

const choose = (e: string) => {
  selected.value = e;
};
</script>

<!-- 自定义主菜单。侧栏和首页顶栏菜单 -->
<!-- 左侧边栏菜单 -->
<template>
  <div class="relative w-[80%] text-sm z-1000 min-h-[calc(100vh - 200px)]">
    <ul class="p-y-2">
      <li @click="choose('home')">
        <NavLeftLink
          :href="withBase(`/`)"
          :checked="
            (page.relativePath == 'index.md' && selected === '' && !params.get('category') && !params.get('tag')) ||
            selected === 'home'
          "
          >首页</NavLeftLink
        >
      </li>
      <li v-for="(_, key) in data" @click="choose(key.toString())">
        <NavLeftLink
          :href="withBase(`/?category=${key.toString()}`)"
          :badge="data[key].length"
          :checked="(params.get('category') === key.toString() && selected === '') || selected === key.toString()"
        >
          {{ key }}
        </NavLeftLink>
      </li>
    </ul>

    <h4 class="m-0 p-0 font-bold text-xs mt-5 flex flex-row items-center">其他</h4>

    <ul class="p-y-2">
      <li @click="choose('feed')">
        <NavLeftLink
          :href="withBase('/pages/feed')"
          :checked="(page.relativePath == 'pages/feed.md' && selected === '') || selected === 'feed'"
          icon="i-el:rss"
        >
          订阅更新
        </NavLeftLink>
      </li>
      <li @click="choose('tools')">
        <NavLeftLink
          :href="withBase(`/pages/tools`)"
          :checked="(page.relativePath == 'pages/tools.md' && selected === '') || selected === 'tools'"
          icon="i-octicon:link-16"
        >
          友情链接
        </NavLeftLink>
      </li>
      <li @click="choose('about')">
        <NavLeftLink
          :href="withBase(`/pages/about`)"
          :checked="(page.relativePath == 'pages/tools.md' && selected === '') || selected === 'tools'"
          icon="i-streamline:tea-cup"
        >
          关于本站
        </NavLeftLink>
      </li>
    </ul>
  </div>
</template>
