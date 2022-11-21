<script setup>
defineProps({
  rows: {
    type: Array,
    default: () => [],
  },
  columns: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <table class="w-full">
    <thead>
      <tr>
        <td v-for="column in columns" :key="column.id">
          {{ column.title }}
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.id">
        <td v-for="column in columns" :key="column.id" class="border p-1">
          <slot :name="`cell(${column.id})`" :item="row[column.id]">
            {{ row[column.id] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>
