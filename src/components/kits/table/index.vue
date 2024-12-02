<template>
  <table class="min-w-full divide-y divide-gray-300 table-auto border">
    <thead class="bg-gray-50">
      <tr class="divide-x">
        <th v-if="modifiable" scope="col" class="w-10">
          <input type="checkbox" class="scale-125" v-model="isAllSelected" />
        </th>
        <th
          v-for="header in headers"
          :key="header.key"
          scope="col"
          class="py-3.5 pl-4 pr-6 text-left text-sm font-semibold text-gray-900 w-auto whitespace-nowrap"
        >
          {{ header.label }}
        </th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr
        v-for="(row, idx) in data"
        :key="idx"
        class="divide-x"
        :class="{ 'bg-gray-100': rowsSelected[idx] }"
      >
        <td v-if="modifiable" class="px-4">
          <input type="checkbox" class="scale-125" v-model="rowsSelected[idx]" />
        </td>
        <td
          v-for="header in headers"
          :key="header.key"
          class="py-2 pl-4 pr-6 text-left text-sm text-gray-600 w-auto whitespace-nowrap"
        >
          {{ row[header.key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
  modifiable: {
    type: Boolean,
    default: false,
  },
})

const isAllSelected = ref(false)
const rowsSelected = ref(new Array(props.data.length).fill(false))
</script>
