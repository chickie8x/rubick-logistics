<template>
  <div class="bg-white p-4 rounded-md shadow-md max-w-6xl mx-auto">
    <span class="text-slate-700 font-bold text-lg">General information</span>
    <div class="grid grid-cols-4 gap-8 mt-4">
      <div class="col-span-1">
        <div class="flex items-center gap-x-1">
          <LockClosedIcon class="w-5 h-5 text-slate-700" />
          <span class="block text-sm font-bold text-slate-700">Booking No</span>
        </div>
        <input
          type="text"
          class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
          disabled
          :value="booking.bkNo"
        />
      </div>
      <div class="col-span-1">
        <div class="flex items-center gap-x-1">
          <LockClosedIcon class="w-5 h-5 text-slate-700" />
          <span class="block text-sm font-bold text-slate-700">File No</span>
        </div>
        <input
          type="text"
          class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
          disabled
          :value="booking.fileNo"
        />
      </div>
      <div class="col-span-2">
        <div class="flex items-center gap-x-1">
          <LockClosedIcon class="w-5 h-5 text-slate-700" />
          <span class="block text-sm font-bold text-slate-700">Customer Name</span>
        </div>
        <input
          type="text"
          class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
          disabled
          :value="booking.customerName"
        />
      </div>
      <div class="col-span-1">
        <div class="flex items-center gap-x-1">
          <LockClosedIcon class="w-5 h-5 text-slate-700" />
          <span class="block text-sm font-bold text-slate-700">MST</span>
        </div>
        <input
          type="text"
          class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
          disabled
          :value="booking.mst"
        />
      </div>
      <div class="col-span-1">
        <div class="flex items-center gap-x-1">
          <LockClosedIcon class="w-5 h-5 text-slate-700" />
          <span class="block text-sm font-bold text-slate-700">Term</span>
        </div>
        <input
          type="text"
          class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
          disabled
          :value="booking.term"
        />
      </div>
      <div class="col-span-1">
        <div class="flex items-center gap-x-1">
          <LockClosedIcon class="w-5 h-5 text-slate-700" />
          <span class="block text-sm font-bold text-slate-700">Service</span>
        </div>
        <input
          type="text"
          class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
          disabled
          :value="booking.service"
        />
      </div>
      <div class="col-span-1">
        <div class="flex items-center gap-x-1">
          <LockClosedIcon class="w-5 h-5 text-slate-700" />
          <span class="block text-sm font-bold text-slate-700">Transporter</span>
        </div>
        <input
          type="text"
          class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
          disabled
          :value="booking.transport"
        />
      </div>
      <div class="col-span-1">
        <div class="flex items-center gap-x-1">
          <LockClosedIcon class="w-5 h-5 text-slate-700" />
          <span class="block text-sm font-bold text-slate-700">Created by saler</span>
        </div>
        <input
          type="text"
          class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
          disabled
          :value="booking.hrSale"
        />
      </div>
      <div>
        <div class="flex items-center gap-x-1">
          <LockClosedIcon class="w-5 h-5 text-slate-700" />
          <span class="block text-sm font-bold text-slate-700">Ngày tạo</span>
        </div>
        <input
          type="text"
          class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
          :value="format(booking.timestamp, 'dd/MM/yyyy')"
          disabled
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { format } from 'date-fns'
import { LockClosedIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  booking: {
    type: Object,
    required: true,
  },
})
</script>
