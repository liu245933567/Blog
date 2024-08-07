<script lang="ts" setup>
import { toRefs } from 'vue';
import { useData } from 'vitepress';
import { usePlayerStore } from '../store/player';
import md5 from 'blueimp-md5';
import DefaultTheme from 'vitepress/theme';
import Player from './Player.vue';
import PageASide from './PageASide.vue';
import Lantern from './Lantern.vue';
import NavLeft from './NavLeft.vue';
import Home from './Home.vue';
import ArticleBread from './ArticleBread.vue';
import ArticleMetadata from './ArticleMetadata.vue';
import ArticleCC from './ArticleCC.vue';
import ArticleRelate from './ArticleRelate.vue';

// import PageGZH from './PageGZH.vue';
// import Copyright from './Copyright.vue';
// import Firework from './Firework.vue';

const { isPause } = toRefs(usePlayerStore());
const { page, theme, frontmatter, isDark } = useData();
const { Layout } = DefaultTheme;
</script>

<template>
  <!-- 对页面布局做统筹管理 -->
  <Layout :class="{ home: frontmatter?.index }">
    <!-- 页面不存在 -->
    <template #not-found>
      <div class="page404">
        <PageASide type="page404" />
      </div>
    </template>

    <!-- 在布局下方添加 -->
    <template #layout-top>
      <ClientOnly>
        <div class="snow" v-if="theme.website?.showSnow && isDark">
          <div v-for="index in 80" :key="index" class="dot"></div>
        </div>
        <Lantern />
      </ClientOnly>
    </template>

    <!-- 在导航 social后添加 -->
    <template #nav-bar-content-after></template>
    <template #nav-screen-content-after></template>

    <!-- 在导航搜索框💰添加 -->
    <template #nav-bar-content-before>
      <ClientOnly>
        <div v-if="!isPause" class="" style="padding-left: 32px; position: relative; height: 40px; margin-right: 0px">
          <Player />
        </div>
      </ClientOnly>
    </template>

    <!-- 在标题后添加 -->
    <template #nav-bar-title-after></template>
    <template #sidebar-nav-before>
      <NavLeft />
      <!-- <div class="fireworkwrap">
        <Firework />
      </div> -->
    </template>
    <template #doc-top>
      <ClientOnly>
        <!-- <PageSlider v-if="frontmatter?.index" :key="md5(page.relativePath)"></PageSlider> -->
      </ClientOnly>
    </template>

    <template #doc-before>
      <Home v-if="frontmatter?.index" />
      <ArticleBread v-if="frontmatter?.post" :article="page" />
      <ArticleMetadata v-if="frontmatter?.post" type="single" :article="page" :key="md5(page.relativePath)" />
    </template>

    <template #aside-bottom>
      <ClientOnly>
        <!-- <ArticleLink v-if="(frontmatter?.post)" :key="md5(page.relativePath)" /> -->
        <PageASide v-if="frontmatter.index" />
      </ClientOnly>
      <!-- <PageGZH /> -->
      <!-- <Links v-if="(frontmatter.index)" /> -->
    </template>
    <template #doc-footer-before>
      <ArticleCC v-if="frontmatter?.post" />
      <ArticleRelate v-if="frontmatter?.post" :key="md5(page.relativePath)" />
    </template>
    <template #doc-bottom>
      <!-- <Copyright /> -->
    </template>
  </Layout>
</template>

<style scoped>
.snowbanner {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;
  pointer-events: none;

  .img {
    width: 88%;
    height: fit-content;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%);
  }
}

.snow {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 99999;
  pointer-events: none;

  .img {
    width: 88%;
    height: fit-content;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
  }
}

.page404 {
  width: 224px;
  margin: 50px auto;
}
</style>
