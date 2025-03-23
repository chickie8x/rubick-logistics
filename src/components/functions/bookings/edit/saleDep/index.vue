<template>
  <div class="w-full h-full bg-gray-300 p-8">
    <div class="flex items-center justify-between max-w-6xl mx-auto">
      <h1 class="text-2xl font-bold text-slate-700 text-center">Update Booking Sale Department</h1>
    </div>
    <div class="mt-4">
      <GeneralFields :booking="booking" />
    </div>

    <div class="mt-4 max-w-6xl mx-auto bg-white p-4 rounded-md shadow-md">
      <span class="text-slate-700 font-bold text-lg">Update information sale department </span>
      <div class="grid grid-cols-4 gap-8 mt-4">
        <div class="col-span-1">
          <div class="flex items-center gap-x-1">
            <LockClosedIcon v-if="!!props.booking.returnDateSale" class="w-5 h-5 text-slate-700" />
            <span class="block text-sm font-bold text-slate-700">Ngày trả</span>
          </div>
          <input
            type="date"
            class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
            v-model="returnDateSale"
            :disabled="!!props.booking.returnDateSale"
          />
        </div>
        <div class="col-span-1">
          <div class="flex items-center gap-x-1">
            <LockClosedIcon
              v-if="!!props.booking.deliveryAddressSale"
              class="w-5 h-5 text-slate-700"
            />
            <span class="block text-sm font-bold text-slate-700">Địa chỉ trả hàng</span>
          </div>
          <input
            type="text"
            class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
            v-model="deliveryAddressSale"
            :disabled="!!props.booking.deliveryAddressSale"
          />
        </div>
        <div class="col-span-1">
          <div class="flex items-center gap-x-1">
            <LockClosedIcon v-if="!!props.booking.recipientSale" class="w-5 h-5 text-slate-700" />
            <span class="block text-sm font-bold text-slate-700">Người nhận</span>
          </div>
          <input
            type="text"
            class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
            v-model="recipientSale"
            :disabled="!!props.booking.recipientSale"
          />
        </div>
        <div class="col-span-1">
          <div class="flex items-center gap-x-1">
            <LockClosedIcon v-if="!!props.booking.picPhoneSale" class="w-5 h-5 text-slate-700" />
            <span class="block text-sm font-bold text-slate-700">Số điện thoại</span>
          </div>
          <input
            type="text"
            class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
            v-model="picPhoneSale"
            :disabled="!!props.booking.picPhoneSale"
          />
        </div>
        <div class="col-span-1">
          <div class="flex items-center gap-x-1">
            <LockClosedIcon
              v-if="!!props.booking.confirmationReturnDateSale"
              class="w-5 h-5 text-slate-700"
            />
            <span class="block text-sm font-bold text-slate-700">Xác nhận trả hàng</span>
          </div>
          <input
            type="date"
            class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
            v-model="confirmationReturnDateSale"
            :disabled="!!props.booking.confirmationReturnDateSale"
          />
        </div>
        <div class="col-span-1">
          <div class="flex items-center gap-x-1">
            <LockClosedIcon v-if="!!props.booking.incomeSale" class="w-5 h-5 text-slate-700" />
            <span class="block text-sm font-bold text-slate-700">Income</span>
          </div>
          <input
            type="text"
            class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
            v-model="incomeSale"
            :disabled="!!props.booking.incomeSale"
          />
        </div>
        <div class="col-span-1">
          <div class="flex items-center gap-x-1">
            <LockClosedIcon v-if="!!props.booking.vatIncomeSale" class="w-5 h-5 text-slate-700" />
            <span class="block text-sm font-bold text-slate-700">VAT(income)</span>
          </div>
          <input
            type="text"
            class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
            v-model="vatIncomeSale"
            :disabled="!!props.booking.vatIncomeSale"
          />
        </div>
        <div class="col-span-1">
          <div class="flex items-center gap-x-1">
            <LockClosedIcon v-if="!!props.booking.doorOrNot" class="w-5 h-5 text-slate-700" />
            <span class="block text-sm font-bold text-slate-700">Door or not</span>
          </div>
          <input
            type="checkbox"
            class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm scale-150"
            v-model="doorOrNot"
            :disabled="!!props.booking.doorOrNot"
          />
        </div>
        <div class="col-span-2">
          <div class="flex items-center gap-x-1">
            <LockClosedIcon v-if="!!props.booking.note" class="w-5 h-5 text-slate-700" />
            <span class="block text-sm font-bold text-slate-700">Ghi chú</span>
          </div>
          <input
            type="text"
            class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
            v-model="note"
            :disabled="!!props.booking.note"
          />
        </div>
        <div class="flex items-end justify-end gap-x-2 col-span-2">
          <Button
            :variant="'primary'"
            class="px-4 py-1 w-40 flex items-center justify-center"
            @click="updateBooking"
          >
            <InboxArrowDownIcon class="size-5 mr-2" />
            Save changes
          </Button>
          <Button
            :variant="'secondary'"
            class="px-4 py-1 w-40 flex items-center justify-center"
            @click="onCancelUpdate"
          >
            <ArrowUturnLeftIcon class="size-5 mr-2" />
            Cancel
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { headers } from '../../data'
import { LockClosedIcon, ArrowUturnLeftIcon, InboxArrowDownIcon } from '@heroicons/vue/24/solid'
import GeneralFields from '../generalFields/index.vue'
import Button from '@/components/kits/button/index.vue'
import { db } from '@/firebase'
import { updateDoc, doc } from 'firebase/firestore'
import { toast } from 'vue-sonner'

const props = defineProps({
  booking: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['submitUpdate', 'cancelUpdate'])
const tbHeaders = computed(() => {
  return headers.filter((header) => header.dep === 'Sale' || header.dep === 'all')
})

const returnDateSale = ref(props.booking.returnDateSale || null)
const deliveryAddressSale = ref(props.booking.deliveryAddressSale || null)
const recipientSale = ref(props.booking.recipientSale || null)
const picPhoneSale = ref(props.booking.picPhoneSale || null)
const confirmationReturnDateSale = ref(props.booking.confirmationReturnDateSale || null)
const incomeSale = ref(props.booking.incomeSale || null)
const vatIncomeSale = ref(props.booking.vatIncomeSale || null)
const doorOrNot = ref(props.booking.doorOrNot || null)
const note = ref(props.booking.note || null)

const onCancelUpdate = () => {
  emit('cancelUpdate')
}

const updateBooking = () => {
  try {
    const updateObj = {}
    if (!!props.booking.returnDateSale) updateObj.returnDateSale = returnDateSale.value
    if (!!!props.booking.deliveryAddressSale)
      updateObj.deliveryAddressSale = deliveryAddressSale.value
    if (!!!props.booking.recipientSale) updateObj.recipientSale = recipientSale.value
    if (!!!props.booking.picPhoneSale) updateObj.picPhoneSale = picPhoneSale.value
    if (!!!props.booking.confirmationReturnDateSale)
      updateObj.confirmationReturnDateSale = confirmationReturnDateSale.value
    if (!!!props.booking.incomeSale) updateObj.incomeSale = incomeSale.value
    if (!!!props.booking.vatIncomeSale) updateObj.vatIncomeSale = vatIncomeSale.value
    if (!!!props.booking.doorOrNot) updateObj.doorOrNot = doorOrNot.value
    if (!!!props.booking.note) updateObj.note = note.value
    const changes = Object.values(updateObj).every((value) => !value)
    if (changes) {
      toast.info('No changes to update')
      return
    }
    const bookingRef = doc(db, 'bookings', props.booking.uid)
    updateDoc(bookingRef, updateObj)
    toast.success('Update booking successfully')
    emit('submitUpdate')
  } catch (error) {
    console.log(error)
    toast.error('Update booking failed')
  }
}
</script>
