<script setup lang="ts">
import { useVModel } from "@vueuse/core";

const props = defineProps<{
  value?: string;
  options: { label: string; value: string }[];
}>();

const emit = defineEmits();

const value = useVModel(props, "value", emit);

const onCheck = (v: string) => {
  value.value = v;
};
</script>

<template>
  <div class="inline-flex rounded-md shadow-sm" role="group">
    <button
      v-for="({ label, value: v }, index) in options"
      :key="v"
      type="button"
      :class="[
        'px-4 py-2 text-sm font-medium text-gray-900 bg-white border-gray-200  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white',
        {
          border: index === 0 || index === options.length - 1,
          'rounded-s-lg': index === 0,
          'rounded-e-lg': index === options.length - 1,
          'z-10 ring-2 ring-blue-700 text-blue-700 dark:ring-blue-500 dark:text-white':
            v === value,
        },
      ]"
      @click="onCheck(v)"
    >
      {{ label }}
    </button>
  </div>
</template>
