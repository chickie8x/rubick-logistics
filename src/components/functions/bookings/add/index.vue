<template>
  <div class="w-full h-full flex flex-col">
    <h1 class="text-2xl font-bold capitalize">Tạo booking mới</h1>
    <div class="mt-4 px-8 py-4 grid grid-cols-3 gap-x-4">
      <div class="flex flex-col gap-y-2 mb-4">
        <span class="min-w-48 text-sm text-indigo-500">Loại booking</span>
        <Select v-model="typeOptions[0].value" :options="typeOptions" />
      </div>
      <div class="flex flex-col gap-y-2 mb-4">
        <span class="min-w-48 text-sm text-indigo-500">Dịch vụ</span>
        <Select v-model="serviceOptions[0].value" :options="serviceOptions" />
      </div>
      <div class="flex flex-col gap-y-2 mb-4">
        <span class="min-w-48 text-sm text-indigo-500">Phương thức vận chuyển</span>
        <Select v-model="transportOptions[0].value" :options="transportOptions" />
      </div>
      <div class="flex flex-col gap-y-2 mb-4">
        <span class="min-w-48 text-sm text-indigo-500">Term</span>
        <Select v-model="termOptions[0].value" :options="termOptions" />
      </div>
      <div class="flex flex-col gap-y-2 mb-4">
        <span class="min-w-48 text-sm text-indigo-500">Cảng đi-POL</span>
        <Select v-model="POL[0].value" :options="POL" />
      </div>
      <div class="flex flex-col gap-y-2 mb-4">
        <span class="min-w-48 text-sm text-indigo-500">Cảng đến - POD</span>
        <Select v-model="POD[0].value" :options="POD" />
      </div>
      <div class="flex flex-col gap-y-2 mb-4">
        <span class="min-w-48 text-sm text-indigo-500 block">Ngày hàng đến dự kiến</span>
        <input
          v-model="date"
          type="date"
          class="max-w-80 w-full rounded-md border border-gray-300 p-2 focus:outline focus:outline-indigo-500 text-sm mt-2"
        />
      </div>
    </div>
    <div class="flex flex-col gap-y-2 px-8">
      <span class="min-w-48 text-sm text-indigo-500">Ghi chú</span>
      <textarea
        v-model="note"
        class="max-w-80 w-full h-32 resize-none rounded-md border border-gray-300 p-2 focus:outline focus:outline-indigo-500 text-sm"
      />
    </div>
    <div class="flex flex-1 items-end justify-end gap-x-6 mt-4">
      <Button :variant="'primary'" class="w-28">Tạo booking</Button>
      <Button :variant="'secondary'" class="w-28" @click="router.back()">Quay lại</Button>
    </div>
  </div>
</template>

<script setup>
import Select from '@/components/kits/select/index.vue'
import { ref } from 'vue'
import { typeOptions, serviceOptions, transportOptions, termOptions, POL, POD } from './add.js'
import Button from '@/components/kits/button/index.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const bookingType = ref('')
const service = ref('')
const transport = ref('')
const term = ref('')
const date = ref('')
const note = ref('')
</script>
