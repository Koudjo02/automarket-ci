<script setup lang="ts">
import { vehicules } from '../data/vehicules'

const vehiculesVente = vehicules.filter(v => v.type === 'vente').slice(0, 3)
</script>

<template>
  <div class="p-10">
    <h1 class="text-3xl font-bold">Test import données</h1>
    <p>{{ vehiculesVente.length }} véhicules trouvés</p>
  </div>
</template>