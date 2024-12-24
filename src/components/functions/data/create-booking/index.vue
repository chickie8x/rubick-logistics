<template>
  <div class="flex flex-col gap-4 w-[1024px] max-h-[600px]">
    <h1 class="text-2xl font-bold capitalize p-4">Tạo booking mới</h1>
    <div class="grid grid-cols-2 gap-8 overflow-y-auto p-4">
      <div>
        <h1 class="text-sm text-gray-700 font-bold">Khách hàng</h1>
        <input
          type="text"
          class="w-full rounded-md border border-gray-300 p-2 text-sm h-8 text-gray-500"
          disabled
          :value="customer.buyerName"
        />
      </div>
      <div>
        <h1 class="text-sm text-gray-700 font-bold">Mã số thuế</h1>
        <input
          type="text"
          class="w-full rounded-md border border-gray-300 p-2 text-sm h-8 text-gray-500"
          disabled
          :value="customer.mst"
        />
      </div>
      <div>
        <h1 class="text-sm text-gray-700 font-bold">Mã điều kiện giá hoá đơn</h1>
        <input
          type="text"
          class="w-full rounded-md border border-gray-300 p-2 text-sm h-8 text-gray-500"
          disabled
          :value="customer.invoicePriceCondition"
        />
      </div>
      <div>
        <h1 class="text-sm text-gray-700 font-bold">Loại booking</h1>
        <Select v-model="typeOptions[0].value" :options="typeOptions" />
      </div>
      <div>
        <h1 class="text-sm text-gray-700 font-bold">Dịch vụ</h1>
        <Select v-model="serviceOptions[0].value" :options="serviceOptions" />
      </div>
      <div>
        <h1 class="text-sm text-gray-700 font-bold">Phương thức vận chuyển</h1>
        <Select v-model="transportOptions[0].value" :options="transportOptions" />
      </div>
      <div>
        <h1 class="text-sm text-gray-700 font-bold">Cảng đi-POL</h1>
        <Select v-model="POL[0].value" :options="POL" />
      </div>
      <div>
        <h1 class="text-sm text-gray-700 font-bold">Cảng đến - POD</h1>
        <Select v-model="POD[0].value" :options="POD" />
      </div>
      <div>
        <h1 class="text-sm text-gray-700 font-bold">PIC name</h1>
        <input
          type="text"
          class="w-full rounded-md border border-gray-300 focus:outline focus:outline-indigo-500 p-2 text-sm h-8 text-gray-500"
        />
      </div>
      <div>
        <h1 class="text-sm text-gray-700 font-bold">PIC phone</h1>
        <input
          type="text"
          class="w-full rounded-md border border-gray-300 focus:outline focus:outline-indigo-500 p-2 text-sm h-8 text-gray-500"
        />
      </div>
      <div>
        <h1 class="text-sm text-gray-700 font-bold">PIC email</h1>
        <input
          type="email"
          class="w-full rounded-md border border-gray-300 focus:outline focus:outline-indigo-500 p-2 text-sm h-8 text-gray-500"
        />
      </div>
      <div></div>
      <div>
        <h1 class="text-sm text-gray-700 font-bold">Địa chỉ nhận hàng</h1>
        <textarea
          v-model="customer.buyerAddress"
          class="w-full h-32 resize-none rounded-md border border-gray-300 p-2 focus:outline focus:outline-indigo-500 text-sm text-gray-500"
          disabled
        />
      </div>
      <div>
        <h1 class="text-sm text-gray-700 font-bold">Ghi chú</h1>
        <textarea
          v-model="note"
          class="w-full h-32 resize-none rounded-md border border-gray-300 p-2 focus:outline focus:outline-indigo-500 text-sm"
        />
      </div>
    </div>
    <div class="flex flex-1 items-end justify-end gap-x-6 mt-4 p-4">
      <Button :variant="'primary'" class="w-28" @click="emit('createBookingWithCustomer')"
        >Tạo booking</Button
      >
      <Button :variant="'secondary'" class="w-28" @click="emit('cancelCreateBooking')">Huỷ</Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  typeOptions,
  serviceOptions,
  transportOptions,
  termOptions,
  POL,
  POD,
} from '@/components/functions/bookings/add/add.js'
import Select from '@/components/kits/select/index.vue'
import Button from '@/components/kits/button/index.vue'

const props = defineProps({
  customer: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['cancelCreateBooking', 'createBookingWithCustomer'])

const note = ref('')
</script>
