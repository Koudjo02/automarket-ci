<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { vehicules } from '~/data/vehicules'

const route = useRoute()
const router = useRouter()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Accueil',
    to: '/',
    active: route.path === '/'
  },
  {
    label: 'Acheter',
    to: '/acheter',
    active: route.path.startsWith('/acheter')
  },
  {
    label: 'Louer',
    to: '/louer',
    active: route.path.startsWith('/louer')
  },
  {
    label: 'Contact',
    to: '/contact',
    active: route.path.startsWith('/contact')
  }
])

const searchQuery = ref('')

const suggestions = computed<any[]>(() => {
  if (!searchQuery.value) return []
  const q = searchQuery.value.toLowerCase()
  return vehicules
    .filter(v => v.title.toLowerCase().includes(q))
    .map(v => ({
      label: v.title,
      id: v.id,
      type: v.type
    }))
})

function onSelect(item: any) {
  if (!item) return
  const path = item.type === 'location' ? `/louer/${item.id}` : `/acheter/${item.id}`
  router.push(path)
  searchQuery.value = ''
}
</script>

<template>
  <UHeader>
    <template #title>
      <span class="text-lg font-bold text-primary">AutoMarket CI</span>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>