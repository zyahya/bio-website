<script setup lang="ts">
import LinkItem from './LinkItem.vue'
import { links } from '@/data/links' 
</script>

<template>
  <section class="w-full flex flex-col items-center">
    <h2 class="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">Featured Links</h2>
    <div class="w-full space-y-4">
      <LinkItem 
        v-for="(link, index) in links" 
        :key="index" 
        v-bind="link" 
      />
    </div>
  </section>
</template>