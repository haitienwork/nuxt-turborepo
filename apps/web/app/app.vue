<script setup lang="ts">
const { web } = useAppConfig();
import 'vue-sonner/style.css'

useHead({
  titleTemplate: `%s | ${web.appName}`,
  title: web.appName,
  meta: [
    {
      name: "description",
      content: web.appDescription,
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />

    <Toaster position="top-right" rich-colors close-button :duration="3000"/>
  </NuxtLayout>
</template>
