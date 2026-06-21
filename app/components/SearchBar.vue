<script setup lang="ts">
import { vehicules } from '~/data/vehicules'

const router = useRouter()
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
  <div class="border-b border-default bg-white">
    <div class="max-w-7xl mx-auto px-4 py-3">
      <UInputMenu
  v-model="searchQuery"
  v-model:search-term="searchQuery"
  :items="suggestions"
  placeholder="Rechercher un véhicule..."
  icon="i-heroicons-magnifying-glass"
  class="w-full"
  @update:model-value="onSelect"
/>
    </div>
  </div>
</template>