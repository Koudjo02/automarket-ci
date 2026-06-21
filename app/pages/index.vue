<script setup lang="ts">
const vehiculesVente = [
  { id: 1, title: 'Audi RS7', price: '40 000 000', year: 2022, km: '35 000', image: '/images/vehicules/rs7.jpg', type: 'vente' }
]
</script>

<template>
  <div class="p-10">
    <h1 class="text-3xl font-bold">Test sans import</h1>
    <p>{{ vehiculesVente.length }} véhicule(s)</p>
  </div>
</template>