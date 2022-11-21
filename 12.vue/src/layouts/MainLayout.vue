<script setup>
import MenuList from '@/components/MenuList.vue'
</script>
<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-6 min-h-screen">
      <div class="col-span-1 border-r-2 border-gray-700 p-5">
        <MenuList />
      </div>
      <div class="col-span-5 p-5">
        <router-view />
      </div>
    </div>
  </div>
</template>
