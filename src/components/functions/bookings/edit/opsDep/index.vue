<template>
  <div class="w-full h-full overflow-y-auto bg-gray-300 p-8">
    <h1 class="text-2xl font-bold text-slate-700 text-center">Ops department update booking</h1>
    <div class="mt-4">
      <GeneralFields :booking="booking" />
    </div>
    <div class="mt-4 bg-white p-4 rounded-md shadow-md max-w-6xl mx-auto">
      <span class="text-lg font-bold text-slate-700">Ops department update booking</span>
      <div class="grid grid-cols-4 gap-x-8 gap-y-2 mt-2">
            <div class="flex items-center space-x-2">
                <input type="checkbox" class="scale-150 text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm" v-model="soiChieu" />
                <span class="text-sm font-bold text-slate-700">Soi chiếu</span>
            </div>
            <div class="flex items-center space-x-2">
                <input type="checkbox" class="scale-150 text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm" v-model="cuocContOps" />
                <span class="text-sm font-bold text-slate-700">Cược cont</span>
            </div>
            <div class="flex items-center space-x-2">
                <input type="checkbox" class="scale-150 text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm" v-model="vanChuyenOps" />
                <span class="text-sm font-bold text-slate-700">Vận chuyển</span>
            </div>
        <div class="col-span-1">

        </div>
        <div class="col-span-1">
            <span class="text-sm font-bold text-slate-700">Tiền cược</span>
            <input type="text" class="w-full text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm" v-model="tienCuocOps" />
        </div>

        <div class="col-span-1">
            <span class="text-sm font-bold text-slate-700">Ngày cược</span>
            <input type="date" class="w-full text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm" v-model="ngayCuocOps" />
        </div>
        <div class="col-span-1">
            <span class="text-sm font-bold text-slate-700">Nhà xe</span>
            <input type="text" class="w-full text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm" v-model="carrierOps" />
        </div>
        <div class="col-span-1 flex items-end space-x-2">
            <Button :variant="'primary'" @click="updateBooking" class="w-full flex justify-center items-center"><InboxArrowDownIcon class="size-5 mr-2" />Update</Button>
            <Button :variant="'secondary'" @click="onCancel" class="w-full flex justify-center items-center"><ArrowUturnLeftIcon class="size-5 mr-2" />Cancel</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import GeneralFields from '../generalFields/index.vue'
import { headers } from '@/components/functions/bookings/data'
import { ArrowUturnLeftIcon, InboxArrowDownIcon } from '@heroicons/vue/24/outline'
import Button from '@/components/kits/button/index.vue'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase'
import { toast } from 'vue-sonner'

const props = defineProps({
  booking: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['submitUpdate', 'cancelUpdate'])

const tbHeaders = computed(() => {
  return headers.filter((header) => header.dep === 'Ops' || header.dep === 'all')
})

const soiChieu = ref(props.booking.soiChieu || false)
const cuocContOps = ref(props.booking.cuocContOps || false)
const vanChuyenOps = ref(props.booking.vanChuyenOps || false)
const tienCuocOps = ref(props.booking.tienCuocOps || null)
const ngayCuocOps = ref(props.booking.ngayCuocOps || null)
const carrierOps = ref(props.booking.carrierOps || null)

const updateBooking = async () => {
  try {
    await updateDoc(doc(db, 'bookings', props.booking.uid), {
      soiChieu: soiChieu.value,
      cuocContOps: cuocContOps.value,
      vanChuyenOps: vanChuyenOps.value,
      tienCuocOps: tienCuocOps.value,
      ngayCuocOps: ngayCuocOps.value,
      carrierOps: carrierOps.value
    })
    emit('submitUpdate')
    toast.success('Booking updated successfully')
  } catch (error) {
    console.error('Error updating booking:', error)
  }
}

const onCancel = () => {
  emit('cancelUpdate')
}

</script>
