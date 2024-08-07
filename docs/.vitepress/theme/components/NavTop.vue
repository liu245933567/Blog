<script lang="ts" setup>
import Tags from './Tags.vue';
import Archives from './Archives.vue';
import CommonDropDown from './CommonDropDown.vue';
import DpTrigger from './DpTrigger.vue';
</script>

<template>
  <ul class="flex gap-4 mb-8 justify-center">
    <li>
      <CommonDropDown>
        <DpTrigger icon="i-teenyicons:tag-solid"> 标签 </DpTrigger>
        <template #popper="{ hide }">
          <Tags @click-tag="hide" />
        </template>
      </CommonDropDown>
    </li>
    <li>
      <CommonDropDown>
        <DpTrigger icon="i-mdi:archive"> 存档 </DpTrigger>
        <template #popper="{ hide }">
          <Archives />
        </template>
      </CommonDropDown>
    </li>
  </ul>
</template>
