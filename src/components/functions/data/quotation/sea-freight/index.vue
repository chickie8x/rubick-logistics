<template>
  <div class="h-full w-full bg-white p-4 flex flex-col gap-y-4">
    <div class="flex justify-between mt-4">
      <h1 class="text-2xl font-bold text-slate-700">Sea Freight Quotation</h1>
      <div class="flex items-center gap-x-4">
        <button
          class="flex items-center gap-x-2 bg-indigo-500 hover:bg-indigo-600 text-white px-2 py-1 rounded-md duration-300 shadow-sm"
        >
          <PaperAirplaneIcon class="w-6 h-6" />
          Internal Booking
        </button>
        <button
          class="flex items-center gap-x-2 bg-indigo-500 hover:bg-indigo-600 text-white px-2 py-1 rounded-md duration-300 shadow-sm"
        >
          <PrinterIcon class="w-6 h-6" />
          Print
        </button>
        <button
          class="flex items-center gap-x-2 bg-indigo-500 hover:bg-indigo-600 text-white px-2 py-1 rounded-md duration-300 shadow-sm"
        >
          <CheckCircleIcon class="w-6 h-6" />
          Save
        </button>
        <button
          @click="closeModal"
          class="flex items-center gap-x-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md duration-300 shadow-sm"
        >
          <XCircleIcon class="w-6 h-6" />
          Cancel
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-y-4 flex-1 overflow-auto">
      <div class="flex flex-col gap-y-2 p-2 rounded-md">
        <span class="font-bold text-slate-700 text-lg">Thông tin chứng từ</span>
        <div class="grid grid-cols-4 gap-x-6 gap-y-2 bg-gray-100 p-2 rounded-md">
          <div>
            <span class="text-sm font-semibold text-slate-900">Quotation No.</span>
            <input
              type="text"
              class="w-full border border-slate-300 rounded-md px-2 py-1 outline-indigo-500 text-slate-700"
            />
          </div>
          <div>
            <span class="text-sm font-semibold text-slate-900">Customer</span>
            <input
              type="text"
              class="w-full border border-slate-300 rounded-md px-2 py-1 outline-indigo-500 text-slate-700"
            />
          </div>
          <div>
            <span class="text-sm font-semibold text-slate-900">Customer Tel/Fax</span>
            <input
              type="text"
              class="w-full border border-slate-300 rounded-md px-2 py-1 outline-indigo-500 text-slate-700"
            />
          </div>
          <div>
            <span class="text-sm font-semibold text-slate-900">Commondity</span>
            <input
              type="text"
              class="w-full border border-slate-300 rounded-md px-2 py-1 outline-indigo-500 text-slate-700"
            />
          </div>
          <div>
            <span class="text-sm font-semibold text-slate-900">ATTN</span>
            <input
              type="text"
              class="w-full border border-slate-300 rounded-md px-2 py-1 outline-indigo-500 text-slate-700"
            />
          </div>
          <div>
            <span class="text-sm font-semibold text-slate-900">Shipper</span>
            <input
              type="text"
              class="w-full border border-slate-300 rounded-md px-2 py-1 outline-indigo-500 text-slate-700"
            />
          </div>
          <div>
            <span class="text-sm font-semibold text-slate-900">Consignee</span>
            <input
              type="text"
              class="w-full border border-slate-300 rounded-md px-2 py-1 outline-indigo-500 text-slate-700"
            />
          </div>
          <div>
            <span class="text-sm font-semibold text-slate-900">Service</span>
            <input
              type="text"
              class="w-full border border-slate-300 rounded-md px-2 py-1 outline-indigo-500 text-slate-700"
            />
          </div>
          <div>
            <span class="text-sm font-semibold text-slate-900">Valid In</span>
            <input
              type="date"
              class="w-full border border-slate-300 rounded-md px-2 py-1 outline-indigo-500 text-slate-700"
            />
          </div>
          <div>
            <span class="text-sm font-semibold text-slate-900">Date of Q</span>
            <input
              type="date"
              class="w-full border border-slate-300 rounded-md px-2 py-1 outline-indigo-500 text-slate-700"
            />
          </div>
        </div>
      </div>
      <div class="flex items-end gap-x-8 bg-gray-100 p-2 rounded-md">
        <div class="flex flex-col">
          <span class="text-sm font-semibold text-slate-900">Container Type</span>
          <input
            type="text"
            class="border border-slate-300 rounded-md px-2 py-1 outline-indigo-500 text-slate-700"
          />
        </div>
        <div class="flex flex-col gap-y-2">
          <div class="flex items-center gap-x-2">
            <input
              type="radio"
              id="selling"
              name="buy-sell"
              checked
              class="border border-slate-300 rounded-md px-2 py-1 outline-indigo-500 text-slate-700 scale-125 mt-1"
            />
            <label for="selling" class="text-sm font-semibold text-slate-900">Selling</label>
          </div>
          <div class="flex items-center gap-x-2">
            <input
              type="radio"
              id="buying"
              name="buy-sell"
              class="border border-slate-300 rounded-md px-2 py-1 outline-indigo-500 text-slate-700 scale-125 mt-1"
            />
            <label for="buying" class="text-sm font-semibold text-slate-900">Buying</label>
          </div>
        </div>
        <div class="flex flex-col">
          <span class="text-sm font-semibold text-slate-900">Currency</span>
          <select
            type="text"
            class="border border-slate-300 rounded-md px-2 py-1 outline-indigo-500 text-slate-700 min-w-24"
          >
            <option value="USD">USD</option>
            <option value="VND">VND</option>
          </select>
        </div>
        <div class="flex flex-col justify-between gap-y-2">
          <div class="flex items-center gap-x-2 w-full">
            <input
              type="checkbox"
              id="nominate"
              class="border border-slate-300 rounded-md px-2 py-1 outline-indigo-500 text-slate-700 scale-125 mt-1"
            />
            <label for="nominate" class="text-sm font-semibold text-slate-900"
              >Nominated Shipment</label
            >
          </div>
          <div class="flex items-center gap-x-2 w-full">
            <input
              type="checkbox"
              id="general"
              class="border border-slate-300 rounded-md px-2 py-1 outline-indigo-500 text-slate-700 scale-125 mt-1"
            />
            <label for="general" class="text-sm font-semibold text-slate-900">General Mode</label>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-y-2">
        <span class="font-bold text-slate-700 text-lg">Ocean Freight</span>
        <div class="w-full overflow-auto">
          <SecondaryTable :headers="headersSeaFreight" :data="dataSeaFreight" />
        </div>
      </div>

      <div class="flex flex-col gap-y-2">
        <span class="font-bold text-slate-700 text-lg">Other Charges</span>
        <div class="w-full overflow-auto">
          <SecondaryTable :headers="headersOtherCharges" :data="dataOtherCharges" />
        </div>
      </div>

      <div class="flex flex-col gap-y-2">
        <span class="font-bold text-slate-700 text-lg">Custom Clearance Charges</span>
        <div class="w-full overflow-auto">
          <SecondaryTable
            :headers="headersCustomClearanceCharges"
            :data="dataCustomClearanceCharges"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { XCircleIcon, CheckCircleIcon, PrinterIcon, PaperAirplaneIcon } from '@heroicons/vue/24/outline'
import SecondaryTable from '@/components/kits/table/secondary.vue'
import {
  headersOtherCharges,
  dataOtherCharges,
  headersSeaFreight,
  dataSeaFreight,
  headersCustomClearanceCharges,
  dataCustomClearanceCharges,
} from './index.js'

const emit = defineEmits(['closeModal'])

const closeModal = () => {
  emit('closeModal')
}
</script>
