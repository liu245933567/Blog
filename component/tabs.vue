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
  <div class="sm:hidden">
    <label for="tabs" class="sr-only">请选择</label>
    <select
      id="tabs"
      :value="value"
      @change="onCheck(($event.target as HTMLSelectElement)?.value)"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option v-for="{ label, value: v } in options" :key="v" :value="v">
        {{ label }}
      </option>
    </select>
  </div>

  <ul
    class="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400"
  >
    <li
      v-for="({ label, value: v }, index) in options"
      :key="v"
      class="w-full focus-within:z-10"
    >
      <a
        @click="onCheck(v)"
        href="#"
        :class="[
          'inline-block w-full p-4  hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-white',
          v === value
            ? 'text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white'
            : 'bg-white dark:bg-gray-800',
          {
            'border-r border-r-solid border-gray-200 dark:border-gray-700':
              options.length > 1 && index !== options.length - 1,
            'rounded-s-lg': index === 0,
            'rounded-e-lg': index === options.length - 1,
          },
        ]"
        >{{ label }}</a
      >
    </li>
  </ul>
</template>
