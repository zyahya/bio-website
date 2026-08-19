<script setup lang="ts"></script>

<template>
  <header class="flex flex-col items-center w-full" data-purpose="profile-header">
    <div class="w-28 h-28 rounded-full border-2 border-transparent overflow-hidden mb-4 shadow-sm bg-[#FDD075] flex items-end justify-center relative">
      <i class="fa-solid fa-user-astronaut text-[#3A4561] text-6xl translate-y-2"></i>
    </div>

    <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-3 flex items-baseline">
      ziad<span class="text-teal-400 text-4xl leading-none">.</span>
    </h1>

    <p class="text-center text-[15px] font-medium text-gray-700 max-w-[280px] leading-relaxed mb-6">
      A Software Engineer who loves coding, problem solving &amp; building.
    </p>

    <nav aria-label="Social Profiles" class="flex space-x-5 text-xl text-gray-800 mb-10">
      <a aria-label="Twitter" class="hover:text-gray-600 transition-colors" href="https://x.com/ziadlabs"><i class="fa-brands fa-x-twitter"></i></a>
      <a aria-label="GitHub" class="hover:text-gray-600 transition-colors" href="https://github.com/zyahya"><i class="fa-brands fa-github"></i></a>
      <a aria-label="LinkedIn" class="hover:text-gray-600 transition-colors" href="https://linkedin.com/in/zyahya"><i class="fa-brands fa-linkedin"></i></a>
      <a aria-label="Email" class="hover:text-gray-600 transition-colors" href="mailto:contact@zyahya.dev"><i class="fa-solid fa-envelope"></i></a>
    </nav>
  </header>
</template>

<style scoped></style>
