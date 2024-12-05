<template>
  <div>
    <h1 class="text-gray-700 text-2xl text-center font-bold">Cập nhật booking</h1>
    <div class="max-h-96 w-full overflow-auto mt-4 space-y-4">
      <div v-for="header in fields" :key="header.key" class="flex flex-col">
        <span class="text-sm text-gray-600">{{ header.label }}</span>
        <input
          v-model="bookingEdit[header.key]"
          class="border border-gray-400 rounded-md px-2 py-1 outline-indigo-500 mt-1"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { headers } from '../data'
import { generalFields, docsFields, logsFields } from '@/mockdata'

const props = defineProps({
  booking: {
    type: Object,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
})

const bookingEdit = ref(props.booking)
const fields = computed(() => {
  if (props.department !== 'Ops' && props.department !== 'Docs') {
    return generalFields
  }
  if (props.department === 'Docs') {
    return docsFields
  }
  if (props.department === 'Ops') {
    return logsFields
  }
})
</script>
