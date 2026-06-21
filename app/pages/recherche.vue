<script setup lang="ts">
import { vehicules } from '~/data/vehicules'

const route = useRoute()

const query = computed(() => (route.query.q as string) || '')

const resultats = computed(() => {
  if (!query.value) return vehicules
  const q = query.value.toLowerCase()
  return vehicules.filter(v => v.title.toLowerCase().includes(q))
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-2">Résultats de recherche</h1>
    <p class="text-gray-500 mb-8">
      {{ resultats.length }} véhicule(s) trouvé(s) pour "{{ query }}"
    </p>

    <div v-if="resultats.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <VehiculeCard v-for="vehicule in resultats" :key="vehicule.id" :vehicule="vehicule" />
    </div>

    <div v-else class="text-center py-20">
      <p class="text-gray-500">Aucun véhicule ne correspond à votre recherche.</p>
    </div>
  </div>
</template>