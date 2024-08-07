<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core';
import { computed, ref } from 'vue';

const count = ref(0);

const { width } = useWindowSize();

const isMobile = computed(() => width.value <= 768);

const onShow = () => {
  if (count.value === 0) {
    document.body.classList.add('no-scroll');
  }
  count.value++;
};

const onHide = () => {
  count.value--;
  if (count.value === 0) {
    document.body.classList.remove('no-scroll');
  }
};
</script>

<template>
  <VDropdown
    :distance="6"
    placement="bottom"
    :positioning-disabled="isMobile"
    @apply-show="isMobile && onShow()"
    @apply-hide="isMobile && onHide()"
  >
    <button
      class="flex flex-row items-center h-11 leading-none text-sm translate-x-0 transition duration-300 w-full cursor-pointer"
    >
      <slot></slot>
    </button>

    <template #popper="{ hide }">
      <div :class="['p-4 max-h-[40vh] overflow-y-auto min-h-[100px]', isMobile ? '' : 'min-w-[300px] max-w-[40vw]']">
        <slot name="popper" :hide="hide"></slot>
      </div>
    </template>
  </VDropdown>
</template>

<style>
body.no-scroll {
  overflow: hidden;
}

.v-popper__popper--no-positioning {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
}

.v-popper__popper--no-positioning .v-popper__backdrop {
  display: block;
  background: rgba(0 0 0 / 90%);
}

.v-popper__popper--no-positioning .v-popper__wrapper {
  width: 100%;
  pointer-events: auto;
  transition: transform 0.15s ease-out;
}

.v-popper__popper--no-positioning.v-popper__popper--hidden .v-popper__wrapper {
  transform: translateY(100%);
}
</style>
