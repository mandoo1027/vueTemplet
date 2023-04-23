<script setup lang="ts">

const route = useRoute()

const noLayoutPage = [
  {path : '/login/login'}
]

useHead({
  title: 'Vitesse',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})
const checkPage = computed(() => noLayoutPage.filter((item => item.path === route.path))?.length > 0)
</script>

<template> 
  <Header v-if="!checkPage" />
  <main>
    <RouterView />
  </main>
  <Footer v-if="!checkPage" />
</template>
