<template>
    <div class="w-full h-full bg-gray-300 p-8">
        <h1 class="text-2xl font-bold text-slate-700 text-center">Acc department update booking</h1>
        <div class="mt-4">
            <GeneralFields :booking="props.booking" />
        </div>
        <div class="mt-4 bg-white p-4 max-w-6xl mx-auto rounded-md shadow-md">
            <span class="text-lg font-bold text-slate-700">Accountant department update booking</span>
            <div class="grid grid-cols-4 gap-8 mt-4">
                <div>
                    <span class="block text-sm font-bold text-slate-700">Ngày hoàn</span>
                    <input
                        type="date"
                        class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
                        v-model="ngayHoanAcc"
                    />
                </div>
                <div>
                    <span class="block text-sm font-bold text-slate-700">Ngày gửi debit</span>
                    <input
                        type="date"
                        class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
                        v-model="ngayGuiDebitAcc"
                    />
                </div>
                <div>
                    <span class="block text-sm font-bold text-slate-700">Hạn thanh toán</span>
                    <input
                        type="date"
                        class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
                        v-model="hanThanhToanAcc"
                    />
                </div>
                <div>
                    <span class="block text-sm font-bold text-slate-700">Ngày thanh toán</span>
                    <input
                        type="date"
                        class="text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm w-full"
                        v-model="ngayThanhToanAcc"
                    />
                </div>
                <div class="col-span-4 flex items-end justify-end gap-x-2">
                    <Button class="flex items-center gap-x-2" :variant="'primary'" @click="updateBooking"><InboxArrowDownIcon class="w-5 h-5" />Update</Button>
                    <Button class="flex items-center gap-x-2" :variant="'secondary'" @click="onCancelUpdate"><ArrowUturnLeftIcon class="w-5 h-5" />Cancel</Button>
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
import { toast } from 'vue-sonner'
import { db } from '@/firebase'
import { doc, updateDoc } from 'firebase/firestore'

const props = defineProps({
  booking: {
    type: Object,
    required: true
  }
})


const emit = defineEmits(['submitUpdate', 'cancelUpdate'])

const tbHeaders = computed(() => {
  return headers.filter((header) => header.dep === 'Acc' || header.dep === 'all')
})

console.log(tbHeaders.value)
const ngayHoanAcc = ref(props.booking.ngayHoanAcc || null)
const ngayGuiDebitAcc = ref(props.booking.ngayGuiDebitAcc || null)
const hanThanhToanAcc = ref(props.booking.hanThanhToanAcc || null)
const ngayThanhToanAcc = ref(props.booking.ngayThanhToanAcc || null)

const updateBooking = async() => {
  try {
    const docRef = doc(db, 'bookings', props.booking.uid)
    await updateDoc(docRef, {
      ngayHoanAcc: ngayHoanAcc.value,
      ngayGuiDebitAcc: ngayGuiDebitAcc.value,
      hanThanhToanAcc: hanThanhToanAcc.value,
      ngayThanhToanAcc: ngayThanhToanAcc.value
    })
    toast.success('Update booking successfully')
    emit('submitUpdate')
  } catch (error) {
    console.error(error)
    toast.error('Update booking failed')
  }
}

const onCancelUpdate = () => {
  emit('cancelUpdate')
}
</script>