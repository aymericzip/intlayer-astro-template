// @ts-check
import { intlayer } from "astro-intlayer";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import svelte from "@astrojs/svelte";

import vue from "@astrojs/vue";

import solidJs from "@astrojs/solid-js";

import lit from "@astrojs/lit";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), intlayer(), svelte(), vue(), solidJs(), lit(), preact()],
});