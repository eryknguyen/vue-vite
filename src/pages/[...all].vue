<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="container flex items-center min-h-screen px-6 py-12 mx-auto">
    <div class="flex flex-col items-center max-w-sm mx-auto text-center">
      <p class="p-3 font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-16 h-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
      </p>
      <h1 class="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
        {{ t('404.page-not-found') }}
      </h1>
      <p class="mt-4 text-gray-500">
        {{ t('404.description') }}
      </p>

      <div class="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
        <button
          class="flex items-center justify-center gap-x-2 btn btn-outline"
          @click="$router.go(-1)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:rotate-180">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>

          <span>{{ t('404.button.back') }}</span>
        </button>

        <button
          class="w-1/2 btn btn-primary"
        >
          <RouterLink
            to="/"
            :title="t('404.button.home')"
          >
            {{ t('404.button.home') }}
          </RouterLink>
        </button>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
