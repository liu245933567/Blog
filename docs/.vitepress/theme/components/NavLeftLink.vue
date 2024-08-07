<script lang="ts" setup>
defineProps<{
  href: string;
  badge?: string;
  icon?: string;
  checked?: boolean;
}>();
</script>

<template>
  <a
    :href="href"
    :class="[
      'p-0 flex flex-row items-center h-11 text-sm leading-none translate-x-0 transition duration-300 w-full cursor-pointer hover:text-brand',
      {
        'font-700': checked,
      },
    ]"
  >
    <span :class="[icon ? `${icon} w-1em h-1em mr-1` : '']" />
    <slot />

    <Badge v-if="badge" type="tip" :text="badge" />
  </a>
</template>
