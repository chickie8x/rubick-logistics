<template>
  <div class="bg-slate-100 p-8">
    <h1 class="text-slate-700 text-2xl font-bold">Cập nhật booking</h1>
    <div class="max-h-96 w-full overflow-auto mt-8 grid grid-cols-3 gap-x-20 gap-y-4">
      <div v-for="header in fields" :key="header.key" class="flex flex-col">
        <span class="text-sm text-gray-600">{{ header.label }}</span>
        <input
          v-model="bookingEdit[header.key]"
          class="border border-gray-400 rounded-md px-2 py-1 outline-indigo-500 mt-1"
        />
      </div>
    </div>
    <div class="flex justify-end gap-x-6 mt-8">
      <Button :variant="'primary'" class="w-28" @click="emit('submitEdit')">Cập nhật</Button>
      <Button :variant="'secondary'" class="w-28" @click="emit('cancelEdit')">Quay lại</Button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { generalFields, docsFields, logsFields } from '@/mockdata'
import Button from '@/components/kits/button/index.vue'
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

const emit = defineEmits(['submitEdit', 'cancelEdit'])
</script>
