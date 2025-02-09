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
        >
          <input
            :type="header.key === 'KB' || header.key === 'TTO' ? 'checkbox' : 'text'"
            v-model="row[header.key]"
            class="outline-none outline-indigo-500 read-only:outline-none px-2 text-slate-700"
            :size="row[header.key]?.length ? row[header.key]?.length : 6"
            :class="[header.key === 'KB' || header.key === 'TTO' ? 'scale-125' : '']"
            readonly
            @click="editOn($event)"
            @blur="editOff($event)"
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
})

const rows = ref(props.data)
const editOn = (e) => {
  e.target.readOnly = false
}

const editOff = (e) => {
  e.target.readOnly = true
}
</script>
