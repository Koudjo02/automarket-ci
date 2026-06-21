<script setup lang="ts">
import { vehicules } from '~/data/vehicules'

const vehiculesVente = vehicules.filter(v => v.type === 'vente').slice(0, 3)
const vehiculesLocation = vehicules.filter(v => v.type === 'location').slice(0, 3)
</script>

<template>
  <div>
    <section class="bg-gray-50 py-20">
      <div class="max-w-5xl mx-auto px-4 text-center">
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">
          Trouvez le véhicule de vos rêves
        </h1>
        <p class="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          Achat et location de véhicules haut de gamme en Côte d'Ivoire. Qualité garantie, service de confiance.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton label="Voir les véhicules à vendre" color="primary" size="lg" to="/acheter" />
          <UButton label="Découvrir la location" color="neutral" variant="outline" size="lg" to="/louer" />
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 py-16">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-bold">Véhicules à vendre</h2>
        <UButton label="Voir tout" color="primary" variant="ghost" to="/acheter" trailing-icon="i-heroicons-arrow-right" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <VehiculeCard v-for="vehicule in vehiculesVente" :key="vehicule.id" :vehicule="vehicule" />
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-bold">Véhicules en location</h2>
        <UButton label="Voir tout" color="primary" variant="ghost" to="/louer" trailing-icon="i-heroicons-arrow-right" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <VehiculeCard v-for="vehicule in vehiculesLocation" :key="vehicule.id" :vehicule="vehicule" />
      </div>
    </section>

    <section class="max-w-5xl mx-auto px-4 py-16">
      <h2 class="text-2xl font-bold text-center mb-10">Pourquoi choisir AutoMarket CI ?</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div class="text-center">
          <UIcon name="i-heroicons-shield-check" class="text-4xl text-primary mb-3" />
          <h3 class="font-semibold mb-2">Véhicules vérifiés</h3>
          <p class="text-gray-500 text-sm">Chaque véhicule est contrôlé avant mise en ligne.</p>
        </div>
        <div class="text-center">
          <UIcon name="i-heroicons-currency-dollar" class="text-4xl text-primary mb-3" />
          <h3 class="font-semibold mb-2">Prix transparents</h3>
          <p class="text-gray-500 text-sm">Pas de frais cachés, ce que vous voyez est ce que vous payez.</p>
        </div>
        <div class="text-center">
          <UIcon name="i-heroicons-chat-bubble-left-right" class="text-4xl text-primary mb-3" />
          <h3 class="font-semibold mb-2">Support réactif</h3>
          <p class="text-gray-500 text-sm">Une équipe disponible pour répondre à vos questions.</p>
        </div>
      </div>
    </section>

    <section class="bg-primary py-16">
      <div class="max-w-3xl mx-auto px-4 text-center text-white">
        <h2 class="text-2xl font-bold mb-3">Une question ? Contactez-nous</h2>
        <p class="mb-6 opacity-90">Notre équipe est à votre écoute pour vous accompagner dans votre projet.</p>
        <UButton label="Nous contacter" color="neutral" variant="solid" size="lg" to="/contact" />
      </div>
    </section>
  </div>
</template>