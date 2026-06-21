<template>
  <div class="max-w-3xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-2">Contactez-nous</h1>
    <p class="text-gray-500 mb-8">Une question ? Contactez-nous via l'un des moyens ci-dessous.</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <UCard>
        <div class="flex items-center gap-3">
          <UIcon name="i-heroicons-phone" class="text-2xl text-primary" />
          <div>
            <p class="font-semibold">Téléphone</p>
            <p class="text-gray-500">+225 05 65 56 87 33</p>
          </div>
        </div>
      </UCard>

      <UCard>
        <div class="flex items-center gap-3">
          <UIcon name="i-heroicons-envelope" class="text-2xl text-primary" />
          <div>
            <p class="font-semibold">Email</p>
            <p class="text-gray-500">automarket@automarket-ci.com</p>
          </div>
        </div>
      </UCard>

      <UCard>
        <div class="flex items-center gap-3">
          <UIcon name="i-heroicons-map-pin" class="text-2xl text-primary" />
          <div>
            <p class="font-semibold">Adresse</p>
            <p class="text-gray-500">Abidjan, Côte d'Ivoire</p>
          </div>
        </div>
      </UCard>

      <UCard>
        <div class="flex items-center gap-3">
          <UIcon name="i-simple-icons-whatsapp" class="text-2xl text-primary" />
          <div>
            <p class="font-semibold">WhatsApp</p>
            <p class="text-gray-500">+225 05 65 56 87 33</p>
          </div>
        </div>
      </UCard>
    </div>

    <div class="flex gap-4 mt-8">
      <UButton icon="i-simple-icons-instagram" color="neutral" variant="outline" to="https://www.instagram.com/svmx_02?igsh=MWwyaHoyeWx0MGM2dA==" target="_blank" label="Instagram" />
      <UButton icon="i-simple-icons-tiktok" color="neutral" variant="outline" to="https://www.tiktok.com/@svmx_02?_r=1&_t=ZS-97PC0u2jamj" target="_blank" label="TikTok" />
      <UButton icon="i-simple-icons-whatsapp" color="neutral" variant="outline" to="https://wa.me/2250565568733" target="_blank" label="WhatsApp" />
    </div>
  </div>
</template>