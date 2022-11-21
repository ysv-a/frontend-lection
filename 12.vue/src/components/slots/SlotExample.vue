<script setup>
import FancyBorder from './FancyBorder.vue'

const imgUrl =
  'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'
const alt = 'alt text'
</script>

<template>
  <FancyBorder>
    <h1>Text 1</h1>
    <template #footer>
      <h2 class="border-2 border-fuchsia-600 p-2">Text 2</h2>
    </template>

    <div class="m-3">
      <img :src="imgUrl" :alt="alt" />
    </div>

    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non maiores fuga
      voluptate deleniti iure sit qui, quas, quisquam et dolore asperiores
      blanditiis atque quaerat cupiditate obcaecati, hic a vitae mollitia!
    </p>
  </FancyBorder>
</template>
