<script setup lang="ts">
interface Vehicule {
  id: number
  title: string
  price: string
  year: number
  km: string
  image: string
  type: 'vente' | 'location'
}

defineProps<{
  vehicule: Vehicule
}>()
</script>

<template>
  <UCard class="overflow-hidden">
    <template #header>
      <img
        :src="vehicule.image"
        :alt="vehicule.title"
        class="w-full h-48 object-cover -m-4 mb-0"
      >
    </template>

    <div class="space-y-2">
      <h3 class="text-lg font-semibold">{{ vehicule.title }}</h3>
      <p class="text-2xl font-bold text-primary">
        {{ vehicule.price }} FCFA<span v-if="vehicule.type === 'location'" class="text-sm font-normal text-gray-500"> /jour</span>
      </p>
      <div class="flex items-center gap-4 text-sm text-gray-500">
        <span class="flex items-center gap-1">
          <UIcon name="i-heroicons-calendar" />
          {{ vehicule.year }}
        </span>
        <span class="flex items-center gap-1">
          <UIcon name="i-heroicons-map" />
          {{ vehicule.km }} km
        </span>
      </div>
    </div>

    <template #footer>
<UButton
  :to="vehicule.type === 'location' ? `/louer/${vehicule.id}` : `/acheter/${vehicule.id}`"
  label="Voir le détail"
  color="primary"
  block
/>
    </template>
  </UCard>
</template>