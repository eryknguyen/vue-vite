<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from "@/plugins/i18n";

import { router, tokenKey } from "@/routers/router.ts";

const { t, locale } = useI18n();

function onLogout() {
  localStorage.removeItem(tokenKey);
  router.push("login");
}
async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales;
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length];
  await loadLanguageAsync(newLocale);
  locale.value = newLocale;
}
</script>

<template>
  <nav class="text-center w-full">
    <button
      class="btn btn-primary"
    >
      <RouterLink
        class="text-blue"
        to="/"
        :title="t('layout.button.home')"
      >
        {{ t('layout.button.home') }}
      </RouterLink>
    </button>
    <button
      class="btn btn-primary"
      @click="toggleLocales()"
    >
      {{ t('layout.button.change-language') }}
    </button>
    <button
      class="btn btn-primary"
    >
      <RouterLink
        to="/about"
        class="text-blue"
        :title="t('layout.button.about')"
      >
        {{ t('layout.button.about') }}
      </RouterLink>
    </button>
    <button
      class="btn btn-primary"
    >
      <RouterLink
        to="/contact"
        class="text-blue"
        :title="t('layout.button.contact')"
      >
        {{ t('layout.button.contact') }}
      </RouterLink>
    </button>
    <button
      class="btn btn-primary"
      @click="onLogout"
    >
      {{ t('layout.button.logout') }}
    </button>
  </nav>
</template>
