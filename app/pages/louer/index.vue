<script setup lang="ts">
import { vehicules } from '../../data/vehicules'

const vehiculesLocation = vehicules.filter(v => v.type === 'location')
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-2">Véhicules en location</h1>
    <p class="text-gray-500 mb-8">Louez le véhicule adapté à vos besoins, à la journée</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <VehiculeCard v-for="vehicule in vehiculesLocation" :key="vehicule.id" :vehicule="vehicule" />
    </div>
  </div>
</template>