<!-- 文章列表内容 -->
<template>
  <div class="articlelist" :class="{ grid: listview === 'grid', list: listview === 'list' }">
    <div class="acontent">
      <div v-if="article" class="main">
        <div class="cover">
          <a :href="renderHref(article.relativePath)" class="a">
            <img
              class="img bg-cover bg-center bg-no-repeat"
              :src="article.frontmatter?.cover || getRandomImg()?.actualsrc"
          /></a>
        </div>
        <div class="msg">
          <div class="title">
            <a :href="renderHref(article.relativePath)" class="a">
              <span class="cats" v-if="article.frontmatter?.categories">
                <span class="cat" v-for="item in article.frontmatter.categories.slice(0, 2)">{{ item }}</span>
                <span class="cat" v-if="article.frontmatter.categories.length > 2">...</span>
              </span>
              {{ article.frontmatter?.title }}</a
            >
          </div>
          <div class="desc" v-html="article.frontmatter?.description"></div>
          <div class="meta">
            <ClientOnly>
              <ArticleMetadata :article="article" />
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withBase } from 'vitepress';
import { useStorage } from '@vueuse/core';
import ArticleMetadata from './ArticleMetadata.vue';
import { data as zhihuImgs } from '../data/zhimg.data';

// const { theme, frontmatter } = useData();

import type { Post } from '../types';

const listview = useStorage('listview', 'grid');
// 定义文章属性
defineProps<{
  article?: Post;
}>();

const renderHref = (href: string | undefined) => (href ? withBase(href) : undefined);

const getRandomImg = () => {
  if (zhihuImgs.length === 0) {
    return null; // 如果数组为空，返回 null 或其他合适的默认值
  }
  const randomIndex = Math.floor(Math.random() * zhihuImgs.length);
  return zhihuImgs[randomIndex];
};

const defaultCover =
  'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hlbmt59d9kj20k00dcjyw.jpg';
</script>

<style scoped>
.articlelist.list {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  .main {
    display: flex;
    flex-direction: row;
    margin-top: 10px;

    .cover {
      width: 30%;
      max-width: 220px;
      display: flex;
      /* height: 110px; */
      overflow: hidden;
      position: relative;
      margin-right: 20px;
      /* margin-top: -30px; */
      border-radius: 8px;
      border: 1px solid var(--vp-c-gray-3);
      overflow: hidden;
      box-shadow:
        rgba(61, 72, 83, 0.36) 0px 0px 1px,
        rgba(61, 72, 83, 0.06) 0px 2px 6px;

      .img {
        transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
        transition-duration: 0.3s;
        object-fit: cover;
        width: 100%;
        height: auto;
      }

      .img:hover {
        transform: scaleX(var(1.05)) scaleY(1.05);
      }
    }

    .msg {
      flex: 1;

      .title {
        margin: 0;
        font-size: 1rem;
        line-height: 1.5rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        -webkit-font-smoothing: antialiased;
        font-weight: 500;
        overflow-wrap: normal;
        word-break: normal;

        .cats {
          .cat {
            background-color: var(--vp-c-brand);
            color: #ffffff;
            font-size: 12px;
            padding: 2px 5px;
            margin-right: 5px;
            border-radius: 2px;
          }
        }
      }

      .desc {
        color: var(--vp-c-text-1);
        font-size: 13px;
        margin-top: 10px;
        opacity: 0.6;
        font-weight: normal;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        -webkit-font-smoothing: antialiased;
      }
    }
  }
}

.articlelist.grid {
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  flex-grow: 1;
  border-radius: 8px;
  border: 0.5px solid var(--vp-c-gray-soft);
  background: var(--vp-c-bg-elv);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
  transition-property: box-shadow;
  overflow: hidden;
  box-shadow: var(--vp-shadow-1);

  .cover {
    /* height: 12rem; */
    padding-top: 66%;
    width: 100%;
    overflow: hidden;
    position: relative;

    .img {
      transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
      transition-duration: 0.3s;
      object-fit: cover;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }

    .img:hover {
      transform: scaleX(1.05) scaleY(1.05);
    }
  }

  .msg {
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 8px;
    width: 100%;
    margin-top: 1.25rem;

    .title {
      margin: 0;
      font-size: 1rem;
      line-height: 1.5rem;
      height: 3rem;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      -webkit-font-smoothing: antialiased;
      font-weight: 500;
      overflow-wrap: normal;
      word-break: normal;

      .cats {
        .cat {
          background-color: var(--vp-c-brand);
          color: #ffffff;
          font-size: 12px;
          padding: 2px 5px;
          margin-right: 5px;
          border-radius: 2px;
        }
      }
    }

    .desc {
      display: none;
    }
  }
}

.articlelist.grid:hover {
  box-shadow: var(--vp-shadow-3);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
  transition-property: box-shadow;
  background-color: var(--vp-c-bg-elv);
  overflow: hidden;
}
</style>
