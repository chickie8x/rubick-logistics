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
          @click="handlePrint"
          class="flex items-center gap-x-2 bg-indigo-500 hover:bg-indigo-600 text-white px-2 py-1 rounded-md duration-300 shadow-sm"
        >
          <PrinterIcon class="w-6 h-6" />
          Print
        </button>
        <button
          class="flex items-center gap-x-2 bg-indigo-500 hover:bg-indigo-600 text-white px-2 py-1 rounded-md duration-300 shadow-sm"
          @click="handleSave"
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
          <div v-if="quotation.qNo">
            <span class="text-sm font-semibold text-slate-900">Quotation No.</span>
            <input
              type="text"
              class="w-full border border-slate-300 rounded-md px-2 h-8 outline-indigo-500 text-slate-700"
              disabled
              :value="quotation.qNo"
            />
          </div>
          <div>
            <span class="text-sm font-semibold text-slate-900">Customer</span>
            <div class="flex items-center gap-x-2 border border-slate-300 rounded-md h-8 bg-white">
              <input
                type="text"
                class="w-full text-slate-700 outline-none px-2"
                v-model="customer"
                disabled
              />
              <button
                @click="handleFetch('customer')"
                class="h-full hover:bg-gray-300 px-2 rounded-r-md bg-gray-200"
              >
                <UserGroupIcon class="w-6 h-6" />
              </button>
            </div>
          </div>
          <div>
            <span class="text-sm font-semibold text-slate-900">Customer Tel/Fax</span>
            <input
              type="text"
              class="w-full border border-slate-300 bg-white rounded-md px-2 h-8 outline-indigo-500 text-slate-700"
              v-model="customerPhone"
              disabled
            />
          </div>
          <div>
            <span class="text-sm font-semibold text-slate-900">Commondity</span>
            <div class="flex items-center gap-x-2 border border-slate-300 rounded-md h-8 bg-white">
              <input
                type="text"
                class="w-full text-slate-700 outline-none px-2"
                v-model="commondity"
                disabled
              />
              <button
                @click="handleFetch('commondity')"
                class="h-full hover:bg-gray-300 px-2 rounded-r-md bg-gray-200"
              >
                <ShoppingCartIcon class="w-6 h-6" />
              </button>
            </div>
          </div>
          <div>
            <span class="text-sm font-semibold text-slate-900">ATTN</span>
            <input
              type="text"
              class="w-full border border-slate-300 rounded-md px-2 h-8 outline-indigo-500 text-slate-700"
            />
          </div>
          <div>
            <span class="text-sm font-semibold text-slate-900">Shipper</span>
            <div class="flex items-center gap-x-2 border border-slate-300 rounded-md h-8 bg-white">
              <input
                type="text"
                class="w-full text-slate-700 outline-none px-2"
                v-model="shipper"
                disabled
              />
              <button
                @click="handleFetch('shipper')"
                class="h-full hover:bg-gray-300 px-2 rounded-r-md bg-gray-200"
              >
                <GlobeAltIcon class="w-6 h-6" />
              </button>
            </div>
          </div>
          <div>
            <span class="text-sm font-semibold text-slate-900">Consignee</span>
            <div class="flex items-center gap-x-2 border border-slate-300 rounded-md h-8 bg-white">
              <input
                type="text"
                class="w-full text-slate-700 outline-none px-2"
                v-model="consignee"
                disabled
              />
              <button
                @click="handleFetch('consignee')"
                class="h-full hover:bg-gray-300 px-2 rounded-r-md bg-gray-200"
              >
                <UserIcon class="w-6 h-6" />
              </button>
            </div>
          </div>
          <div>
            <span class="text-sm font-semibold text-slate-900">Service</span>
            <input
              type="text"
              class="w-full border border-slate-300 rounded-md px-2 h-8 outline-indigo-500 text-slate-700"
            />
          </div>
          <div>
            <span class="text-sm font-semibold text-slate-900">Valid In</span>
            <input
              type="date"
              class="w-full border border-slate-300 rounded-md px-2 h-8 outline-indigo-500 text-slate-700"
            />
          </div>
          <div>
            <span class="text-sm font-semibold text-slate-900">Date of Q</span>
            <input
              type="date"
              class="w-full border border-slate-300 rounded-md px-2 h-8 outline-indigo-500 text-slate-700"
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
          <SecondaryTable :headers="seaFreightHeaders" :data="seaFreightRows" />
          <button
            class="bg-indigo-500 text-white px-2 py-1 rounded-md duration-300 shadow-sm mt-2"
            @click="handleAddRow('seaFreight')"
          >
            <PlusIcon class="w-4 h-4" />
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-y-2">
        <span class="font-bold text-slate-700 text-lg">Other Charges</span>
        <div class="w-full overflow-auto">
          <SecondaryTable :headers="otherChargesHeaders" :data="otherChargesRows" />
          <button
            class="bg-indigo-500 text-white px-2 py-1 rounded-md duration-300 shadow-sm mt-2"
            @click="handleAddRow('otherCharges')"
          >
            <PlusIcon class="w-4 h-4" />
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-y-2">
        <span class="font-bold text-slate-700 text-lg">Custom Clearance Charges</span>
        <div class="w-full overflow-auto">
          <SecondaryTable
            :headers="customClearanceChargesHeaders"
            :data="customClearanceChargesRows"
          />
          <button
            class="bg-indigo-500 text-white px-2 py-1 rounded-md duration-300 shadow-sm mt-2"
            @click="handleAddRow('customClearanceCharges')"
          >
            <PlusIcon class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
    <Dialog :open="openDialog" @close="closeDialog" :target="target" @select="handleSelect" />
    <QuotationForm v-if="openQuotationForm" @cancelExportQuotation="handleCancel" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  XCircleIcon,
  CheckCircleIcon,
  PrinterIcon,
  PaperAirplaneIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  GlobeAltIcon,
  UserIcon,
} from '@heroicons/vue/24/outline'
import SecondaryTable from '@/components/kits/table/secondary.vue'
import Dialog from '@/components/kits/modal/dialog.vue'
import {
  headersOtherCharges,
  dataOtherCharges,
  headersSeaFreight,
  dataSeaFreight,
  headersCustomClearanceCharges,
  dataCustomClearanceCharges,
} from './index.js'
import { PlusIcon } from '@heroicons/vue/20/solid'
import QuotationForm from '@/components/functions/bookings/quotation-form/type3/index.vue'

const openQuotationForm = ref(false)

const props = defineProps({
  quotation: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['closeModal'])

const closeModal = () => {
  emit('closeModal')
}

const customer = ref(props.quotation.customer ? props.quotation.customer : null)
const customerPhone = ref(props.quotation.customerPhone ? props.quotation.customerPhone : null)
const commondity = ref(props.quotation.commondity ? props.quotation.commondity : null)
const shipper = ref(props.quotation.shipper ? props.quotation.shipper : null)
const consignee = ref(props.quotation.consignee ? props.quotation.consignee : null)

const seaFreightHeaders = ref(headersSeaFreight())
const otherChargesHeaders = ref(headersOtherCharges())
const customClearanceChargesHeaders = ref(headersCustomClearanceCharges())

const seaFreightRows = ref([dataSeaFreight()[0]])
const otherChargesRows = ref([dataOtherCharges()[0]])
const customClearanceChargesRows = ref([dataCustomClearanceCharges()[0]])

const handleFetch = (tg) => {
  openDialog.value = true
  target.value = tg
}

const openDialog = ref(false)
const target = ref('')

const closeDialog = () => {
  openDialog.value = false
}

const handleSelect = (data) => {
  if (target.value === 'customer') {
    customer.value = data.name
    customerPhone.value = data.phone
  } else if (target.value === 'commondity') {
    commondity.value = data.name
  } else if (target.value === 'shipper') {
    shipper.value = data.name
  } else if (target.value === 'consignee') {
    consignee.value = data.name
  }
}

const handleSave = () => {
  console.log(dataSeaFreight)
  emit('closeModal')
}

const handleAddRow = (type) => {
  if (type === 'seaFreight') {
    seaFreightRows.value.push(dataSeaFreight()[0])
    console.log(seaFreightRows.value)
  } else if (type === 'otherCharges') {
    otherChargesRows.value.push(dataOtherCharges()[0])
    console.log(otherChargesRows.value)
  } else if (type === 'customClearanceCharges') {
    customClearanceChargesRows.value.push(dataCustomClearanceCharges()[0])
    console.log(customClearanceChargesRows.value)
  }
}

const handlePrint = () => {
  openQuotationForm.value = true
}

const handleCancel = () => {
  openQuotationForm.value = false
}
</script>
