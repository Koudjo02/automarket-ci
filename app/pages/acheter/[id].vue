<script setup lang="ts">
import { vehicules } from '~/data/vehicules'

const route = useRoute()

const vehicule = computed(() =>
  vehicules.find(v => v.id === Number(route.params.id))
)
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-10">
    <UButton
      icon="i-heroicons-arrow-left"
      label="Retour"
      color="neutral"
      variant="ghost"
      to="/acheter"
      class="mb-6"
    />

    <div v-if="vehicule" class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <img
        :src="vehicule.image"
        :alt="vehicule.title"
        class="w-full h-80 object-cover rounded-lg"
      >

      <div>
        <h1 class="text-2xl font-bold mb-2">{{ vehicule.title }}</h1>
        <p class="text-3xl font-bold text-primary mb-4">{{ vehicule.price }} FCFA</p>

        <div class="flex gap-4 mb-6 text-gray-500">
          <span class="flex items-center gap-1">
            <UIcon name="i-heroicons-calendar" />
            {{ vehicule.year }}
          </span>
          <span class="flex items-center gap-1">
            <UIcon name="i-heroicons-map" />
            {{ vehicule.km }} km
          </span>
        </div>

        <p class="text-gray-600 mb-6">{{ vehicule.description }}</p>

        <UButton label="Contacter le vendeur" color="primary" size="lg" to="/contact" block />
      </div>
    </div>

    <div v-else class="text-center py-20">
      <p class="text-gray-500">Véhicule introuvable.</p>
    </div>
  </div>
</template>