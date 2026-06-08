<script setup lang="ts">
import ProfileHeader from './components/ProfileHeader.vue'
import FeaturedLinks from './components/FeaturedLinks.vue'
</script>

<template>
  <!-- Main container centers the card on the screen -->
  <main class="bg-gray-900 flex justify-center items-center min-h-screen text-gray-800 antialiased p-6">
    
    <!-- Card container wraps content and is centered -->
    <div class="w-full max-w-md bg-white shadow-xl rounded-2xl flex flex-col items-center py-12 px-8">
      <ProfileHeader />
      <FeaturedLinks />
    </div>
    
  </main>
</template>

<style scoped></style>
