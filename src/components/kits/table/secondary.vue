<template>
  <table class="w-full bg-white">
    <thead>
      <tr class="bg-gray-200 border border-slate-300">
        <th
          v-for="header in headers"
          :key="header.key"
          class="p-2 border-r border-slate-300 min-w-12 font-semibold text-slate-700 text-sm"
          :class="[
            header.key === 'PORcpt' || header.key === 'PODel'
              ? '!max-w-none whitespace-nowrap'
              : '',
          ]"
        >
          {{ header.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, idx) in rows" :key="idx" class="border border-slate-300">
        <td
          v-for="header in headers"
          :key="header.key"
          class="p-2 text-sm border-r border-slate-300"
          :class="[header.key === 'unit' ? 'flex items-center' : '']"
        >
          <div v-if="header.key === 'currency'" class="flex items-center gap-x-4">
            <div class="flex items-center gap-x-1">
              <input
                v-model="row[header.key]"
                value="USD"
                type="radio"
                :name="`currency-${idx}-${type}`"
                :id="`currency-${idx}-${type}`"
                class="scale-110 mt-1"
              />
              <label :for="`currency-${idx}-${type}`">USD</label>
            </div>
            <div class="flex items-center gap-x-1">
              <input
                v-model="row[header.key]"
                value="VND"
                type="radio"
                :name="`currency-${idx}-${type}`"
                :id="`currency-${idx}-${type}`"
                class="scale-110 mt-1"
              />
              <label :for="`currency-${idx}-${type}`">VND</label>
            </div>
          </div>
          <input
            v-else
            :type="
              header.key === 'gw' || header.key === 'vat' || header.key === 'cost'
                ? 'number'
                : 'text'
            "
            v-model="row[header.key]"
            class="outline-none focus:outline-indigo-500 hover:outline-indigo-500 read-only:outline-none text-slate-700"
            :size="row[header.key]?.length ? row[header.key]?.length : 18"
            :class="[
              header.key === 'gw' || header.key === 'vat' || header.key === 'cost'
                ? 'w-24 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                : '',
            ]"
          />
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
  type: {
    type: String,
    required: true,
  },
})

const rows = ref(props.data)
</script>
