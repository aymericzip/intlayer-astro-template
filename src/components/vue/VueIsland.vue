<script setup lang="ts">
import { ref, getCurrentInstance } from "vue";
import { useIntlayer, useLocale, installIntlayer } from "vue-intlayer";
import { getLocalizedUrl, getLocaleName, getPathWithoutLocale, type Locales, type LocalesValues } from "intlayer";

const props = defineProps<{ locale: LocalesValues }>();

const app = getCurrentInstance()?.appContext.app;

if (app) {
  installIntlayer(app, { locale: props.locale });
}

const { locale: currentLocale, availableLocales, setLocale } = useLocale({
  onLocaleChange: (newLocale: LocalesValues) => {
    window.location.href = getLocalizedUrl(window.location.pathname, newLocale);
  },
});

const count = ref(0);
const { greeting, description, counter, increment } = useIntlayer("vue-demo");
</script>

<template>
  <div class="demo-container">
    <h2 class="greeting">
      {{greeting}}
    </h2>
    <p class="description">
      <description />
    </p>
    <div class="counter-section">
      <p class="counter-text">{{ counter({ count }) }}</p>
      <button class="btn-primary" @click="count++">
        <increment />
      </button>
    </div>
    <div class="locale-switcher">
      <span class="switcher-label">Switch locale:</span>
      <div class="locale-buttons">
        <button
          v-for="localeItem in availableLocales"
          :key="localeItem"
          :class="['locale-btn', { active: localeItem === currentLocale }]"
          @click="setLocale(localeItem)"
        >
          <div class="ls-item-left">
            <span class="ls-own-name">{{ getLocaleName(localeItem) }}</span>
            <span class="ls-current-name">{{ getLocaleName(localeItem, currentLocale) }}</span>
          </div>
          <span class="ls-code">{{ localeItem.toUpperCase() }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
