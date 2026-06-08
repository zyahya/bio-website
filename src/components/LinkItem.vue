<script setup lang="ts">
defineProps<{
  title: string
  href?: string
  icon?: string
  bgClass?: string
  subtitle?: string
}>()
</script>

<template>
  <a :href="href || '#'" 
     class="group block w-full bg-white border border-gray-300 rounded-[30px] p-2 pr-5 flex items-center justify-between hover:shadow-md transition-shadow">
    
    <div class="flex items-center space-x-4 min-w-0 flex-1">
      <div :class="['w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center text-white text-lg', bgClass || 'bg-gray-400']">
        <i :class="icon || 'fa-solid fa-link'"></i>
      </div>
      
      <div class="min-w-0 truncate">
        <span class="block font-semibold text-gray-800 truncate">{{ title }}</span>
        <div v-if="subtitle" class="text-xs text-gray-500 truncate">{{ subtitle }}</div>
      </div>
    </div>
    
    <i class="fa-solid fa-arrow-right-long flex-shrink-0 ml-2 text-gray-500 group-hover:text-gray-800 transition-colors"></i>
  </a>
</template>

<style scoped></style>
