<script lang="ts" setup>
defineProps<{
  icon?: string;
}>();
</script>

<template>
  <button class="block bg-bg-alt rounded-10 p-x-5 leading-10 cursor-pointer hover:text-brand">
    <span :class="[icon ? `${icon} w-1em h-1em mr-1` : '']"></span>
    <slot></slot>
  </button>
</template>
