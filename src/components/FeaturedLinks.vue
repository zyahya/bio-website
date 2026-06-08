<script setup lang="ts">
import LinkItem from './LinkItem.vue'

const links = [
  { title: 'My Website', href: 'https://zyahya.dev', icon: 'fa-solid fa-globe', bgClass: 'bg-gray-900' },
  { title: 'Kashida (+1.3K Downloads)', href: 'https://www.nuget.org/packages/kashida', icon: 'fa-solid fa-box-open', bgClass: 'bg-gray-900' },
  { title: 'Qabilah', href: 'https://qabilah.com/profile/zyahya', bgClass: 'bg-gray-900' },
  { title: 'Leetcode', href: 'https://leetcode.com/u/zyahya/', bgClass: 'bg-gray-900' },
  { title: 'HackerRank', href: 'https://www.hackerrank.com/profile/ziadyahya', bgClass: 'bg-gray-900' },
]
</script>

<template>
  <section class="w-full flex flex-col items-center" data-purpose="featured-links">
    <h2 class="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">Featured Links</h2>
    <div class="w-full space-y-4">
      <LinkItem v-for="(l, i) in links" :key="i" :title="l.title" :href="l.href" :icon="l.icon" :bgClass="l.bgClass" />
    </div>
  </section>
</template>

<style scoped></style>
