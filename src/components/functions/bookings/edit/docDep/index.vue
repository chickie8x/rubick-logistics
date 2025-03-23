<template>
  <div class="w-full h-full bg-gray-300 p-8">
    <h1 class="text-2xl font-bold text-slate-700 text-center">Docs department update booking</h1>
    <div class="mt-4">
      <GeneralFields :booking="props.booking" />
    </div>
    <div class="grid grid-cols-4 gap-8 mt-4 bg-white p-4 max-w-6xl mx-auto rounded-md shadow-md">
      <div class="col-span-1 flex items-center space-x-2">
        <input
          type="checkbox"
          class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm scale-150"
          v-model="mnf"
          :checked="booking.mnf"
        />
        <span class="text-sm font-bold text-slate-700">MNF</span>
      </div>
      <div class="col-span-1 flex items-center space-x-2">
        <input
          type="checkbox"
          class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm scale-150"
          v-model="cfMnf"
          :checked="booking.cfMnf"
        />
        <span class="text-sm font-bold text-slate-700">CF MNF</span>
      </div>
      <div class="col-span-1 flex items-center space-x-2">
        <input
          type="checkbox"
          class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm scale-150"
          v-model="cuocContDoc"
          :checked="booking.cuoccontDoc"
        />
        <span class="text-sm font-bold text-slate-700">Cược cont</span>
      </div>

      <div class="col-span-1 flex items-center space-x-2">
        <input
          type="checkbox"
          class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm scale-150"
          v-model="releaseOrNot"
          :checked="booking.releaseOrNot"
        />
        <span class="text-sm font-bold text-slate-700">Release or Not</span>
      </div>

      <div class="col-span-1">
        <span class="block text-sm font-bold text-slate-700">DO/EDO</span>
        <input
          type="text"
          class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
          v-model="doEdo"
        />
      </div>
      <div class="col-span-1">
        <span class="block text-sm font-bold text-slate-700">Release Type</span>
        <input
          type="text"
          class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
          v-model="releaseType"
        />
      </div>
      <div class="col-span-2 flex items-end justify-end gap-x-6">
        <Button
          class="w-36 flex items-center justify-center"
          :variant="'primary'"
          @click="updateBooking"
          ><InboxArrowDownIcon class="w-5 h-5 mr-2" />Update</Button
        >
        <Button
          class="w-36 flex items-center justify-center"
          :variant="'secondary'"
          @click="onCancelUpdate"
          ><ArrowUturnLeftIcon class="w-5 h-5 mr-2" />Cancel</Button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { headers } from '@/components/functions/bookings/data'
import GeneralFields from '../generalFields/index.vue'
import Button from '@/components/kits/button/index.vue'
import { ArrowUturnLeftIcon, InboxArrowDownIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import { db } from '@/firebase'
import { updateDoc, doc } from 'firebase/firestore'
import { toast } from 'vue-sonner'

const props = defineProps({
  booking: {
    type: Object,
    required: true,
  },
})

console.log(props.booking)

const emit = defineEmits(['submitUpdate', 'cancelUpdate'])

const tbHeaders = computed(() => {
  return headers.filter((header) => header.dep === 'Docs' || header.dep === 'all')
})

const mnf = ref(props.booking.mnf || null)
const cfMnf = ref(props.booking.cfMnf || null)
const cuocContDoc = ref(props.booking.cuocContDoc || null)
const releaseOrNot = ref(props.booking.releaseOrNot || null)
const doEdo = ref(props.booking.doEdo || null)
const releaseType = ref(props.booking.releaseType || null)

const updateBooking = async () => {
  try {
    await updateDoc(doc(db, 'bookings', props.booking.uid), {
      mnf: mnf.value,
      cfMnf: cfMnf.value,
      cuocContDoc: cuocContDoc.value,
      releaseOrNot: releaseOrNot.value,
      doEdo: doEdo.value,
      releaseType: releaseType.value,
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
}
</script>
