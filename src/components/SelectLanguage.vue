<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from "@/plugins/i18n";

const { locale } = useI18n();

const openDropdown = ref(false);

async function changeLanguage(newLocale: string) {
  await loadLanguageAsync(newLocale);
  locale.value = newLocale;
}
</script>

<template>
  <div class="text-sm tracking-wide relative m-0.5 w-fit text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg">
    <button
      class="flex items-center font-bold justify-between px-5 py-2 bg-white w-fit border border-gray-200 rounded-lg"
      @click="openDropdown = !openDropdown"
      @blur="openDropdown = false"
    >
      <span>{{ locale.toUpperCase() }}</span>
    </button>
    <transition
      enter-active-class="transform transition duration-500 ease-custom"
      enter-to-class="translate-y-0 scale-y-100 opacity-100"
      leave-active-class="transform transition duration-300 ease-custom"
      leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
    >
      <ul
        v-show="openDropdown"
        class="absolute text-center left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden"
      >
        <li
          v-for="(option, index) in availableLocales"
          :key="index"
          class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200 cursor-pointer"
          @click="changeLanguage(option)"
        >
          {{ option.toUpperCase() }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped>

</style>
