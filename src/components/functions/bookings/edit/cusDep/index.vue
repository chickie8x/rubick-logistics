<template>
  <div class="w-full h-full overflow-y-auto bg-gray-300 p-8">
    <h1 class="text-2xl font-bold text-slate-700 text-center">Cus department update booking</h1>
    <div class="mt-4">
      <GeneralFields :booking="booking" />
    </div>
    <div class="mt-4 bg-white p-4 max-w-6xl mx-auto rounded-md shadow-md">
      <span class="text-lg font-bold text-slate-700">Update information</span>
      <div class="grid grid-cols-4 gap-8 mt-2">
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">Shipper</span>
          <input
            type="text"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="shipper"
          />
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">Consignee</span>
          <input
            type="text"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="consignee"
          />
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">Agent</span>
          <select
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="agent"
          >
            <option v-for="agent in agents" :key="agent.value" :value="agent.value">
              {{ agent.label }}
            </option>
          </select>
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">CBM</span>
          <input
            type="text"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="cbm"
          />
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">TEU</span>
          <input
            type="text"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="teu"
          />
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">Type</span>
          <input
            type="text"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="type"
          />
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">Type Quantity</span>
          <input
            type="text"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="typeQuantity"
          />
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">Vessel</span>
          <input
            type="text"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="vessel"
          />
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">Vessel Transit</span>
          <input
            type="text"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="vesselTransit"
          />
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">Shipping/Airline</span>
          <input
            type="text"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="shippingAirline"
          />
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">Loading Date</span>
          <input
            type="date"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="loadingDate"
          />
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">CLS</span>
          <input
            type="text"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="cls"
          />
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">ETD</span>
          <input
            type="date"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="etd"
          />
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">ETA</span>
          <input
            type="date"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="eta"
          />
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">POR</span>
          <input
            type="text"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="por"
          />
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">POL</span>
          <input
            type="text"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="pol"
          />
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">POD</span>
          <input
            type="text"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="pod"
          />
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">MBL No</span>
          <input
            type="text"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="mbl"
          />
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">HBL No</span>
          <input
            type="text"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="hbl"
          />
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">Cont & Sea No</span>
          <input
            type="text"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="containerNumber"
          />
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">Depot</span>
          <input
            type="text"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="depot"
          />
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">CFS</span>
          <input
            type="text"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="cfs"
          />
        </div>
        <div class="col-span-1">
          <span class="text-sm font-bold text-slate-700">Arrival Actually</span>
          <input
            type="date"
            class="w-full px-2 h-8 border border-indigo-500 outline-indigo-500 rounded-md shadow-sm"
            v-model="arrivalActually"
          />
        </div>
        <div class="flex items-end gap-2">
          <Button
            @click="updateBooking"
            :variant="'primary'"
            class="h-8 w-full flex items-center justify-center"
            ><InboxArrowDownIcon class="size-5 mr-2" />Submit</Button
          >
          <Button
            @click="onCancelUpdate"
            :variant="'secondary'"
            class="h-8 w-full flex items-center justify-center"
            ><ArrowUturnLeftIcon class="size-5 mr-2" />Cancel</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { headers } from '@/components/functions/bookings/data'
import GeneralFields from '../generalFields/index.vue'
import Button from '@/components/kits/button/index.vue'
import { ArrowUturnLeftIcon, InboxArrowDownIcon } from '@heroicons/vue/24/outline'
import { agents } from '@/components/functions/bookings/data'
import { db } from '@/firebase'
import { doc, updateDoc } from 'firebase/firestore'
import { toast } from 'vue-sonner'
import { format } from 'date-fns'

const tbHeaders = computed(() => {
  return headers.filter((header) => header.dep === 'Cus' || header.dep === 'all')
})

const props = defineProps({
  booking: {
    type: Object,
    required: true,
  },
})

console.log(props.booking)

const emit = defineEmits(['submitUpdate', 'cancelUpdate'])

const shipper = ref(props.booking.shipper || null)
const consignee = ref(props.booking.consignee || null)
const agent = ref(props.booking.agent || null)
const cbm = ref(props.booking.cbm || null)
const teu = ref(props.booking.teu || null)
const type = ref(props.booking.type || null)
const typeQuantity = ref(props.booking.typeQuantity || null)
const vessel = ref(props.booking.vessel || null)
const vesselTransit = ref(props.booking.vesselTransit || null)
const shippingAirline = ref(props.booking.shippingAirline || null)
const loadingDate = ref(format(new Date(props.booking.loadingDate), 'yyyy-MM-dd') || null)
const cls = ref(props.booking.cls || null)
const etd = ref(format(new Date(props.booking.etd), 'yyyy-MM-dd') || null)
const eta = ref(format(new Date(props.booking.eta), 'yyyy-MM-dd') || null)
const por = ref(props.booking.por || null)
const pol = ref(props.booking.pol || null)
const pod = ref(props.booking.pod || null)
const mbl = ref(props.booking.mbl || null)
const hbl = ref(props.booking.hbl || null)
const containerNumber = ref(props.booking.containerNumber || null)
const depot = ref(props.booking.depot || null)
const cfs = ref(props.booking.cfs || null)
const arrivalActually = ref(format(new Date(props.booking.arrivalActually), 'yyyy-MM-dd') || null)

const updateBooking = async () => {
  try {
    await updateDoc(doc(db, 'bookings', props.booking.uid), {
      shipper: shipper.value,
      consignee: consignee.value,
      agent: agent.value,
      cbm: cbm.value,
      teu: teu.value,
      type: type.value,
      typeQuantity: typeQuantity.value,
      vessel: vessel.value,
      vesselTransit: vesselTransit.value,
      shippingAirline: shippingAirline.value,
      loadingDate: loadingDate.value,
      cls: cls.value,
      etd: etd.value,
      eta: eta.value,
      por: por.value,
      pol: pol.value,
      pod: pod.value,
      mbl: mbl.value,
      hbl: hbl.value,
      containerNumber: containerNumber.value,
      depot: depot.value,
      cfs: cfs.value,
      arrivalActually: arrivalActually.value,
    })
    toast.success('Booking updated successfully')
    emit('submitUpdate')
  } catch (error) {
    console.error('Error updating booking:', error)
    toast.error('Error updating booking')
  }
}

const onCancelUpdate = () => {
  emit('cancelUpdate')
  toast.info('Booking update cancelled')
}
</script>
