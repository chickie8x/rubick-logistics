<template>
    <div class="w-full h-full overflow-y-auto bg-gray-300 p-8">
        <h1 class="text-2xl font-bold text-slate-700 text-center">Ops department update booking</h1>
        <div class="mt-4">
            <GeneralFields :booking="booking" />
        </div>
        <div class="mt-4 bg-white p-4 rounded-md shadow-md max-w-6xl mx-auto">
            <span class="text-lg font-bold text-slate-700">OpsDocs department update booking</span>
            <div class="grid grid-cols-4 gap-8 mt-4">
                <div class="col-span-1">
                    <span class="text-sm font-bold text-slate-700">Chi cục</span>
                    <input type="text" class="w-full text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm" v-model="chicuc" />
                </div>
                <div class="col-span-1">
                    <span class="text-sm font-bold text-slate-700">Số tờ khai</span>
                    <input type="text" class="w-full text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm" v-model="sotokhai" />
                </div>
                <div class="col-span-1">
                    <span class="text-sm font-bold text-slate-700">Luồng</span>
                    <input type="text" class="w-full text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm" v-model="lane" />
                </div>
                <div class="col-span-1">
                    <span class="text-sm font-bold text-slate-700">Nhập/Xuất</span>
                    <input type="text" class="w-full text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm" v-model="nhapxuat" />
                </div>
                <div class="col-span-1">
                    <span class="text-sm font-bold text-slate-700">Ngày mở tờ khai</span>
                    <input type="date" class="w-full text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm" v-model="ngaymotokhai" />
                </div>
                <div class="col-span-1">
                    <span class="text-sm font-bold text-slate-700">Ngày thông quan</span>
                    <input type="date" class="w-full text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm" v-model="ngaythongquan" />
                </div>
                <div class="col-span-1" v-if="booking.bookingType === 'LG'">
                    <span class="text-sm font-bold text-slate-700">CBM</span>
                    <input type="text" class="w-full text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm" v-model="cbm" />
                </div>
                <div class="col-span-1">
                    <span class="text-sm font-bold text-slate-700">TEU</span>
                    <input type="text" class="w-full text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm" v-model="teu" />
                </div>
                <div class="col-span-1">
                    <span class="text-sm font-bold text-slate-700">Type</span>
                    <input type="text" class="w-full text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm" v-model="type" />
                </div>
                <div class="col-span-1">
                    <span class="text-sm font-bold text-slate-700">Type Quantity</span>
                    <input type="text" class="w-full text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm" v-model="typeQuantity" />
                </div>
                <div class="col-span-1">
                    <span class="text-sm font-bold text-slate-700">Số cont/Chì</span>
                    <input type="text" class="w-full text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm" v-model="containerNumberDocOps" />
                </div>
                <div class="col-span-1">
                    <span class="text-sm font-bold text-slate-700">Depot/CFS</span>
                    <input type="text" class="w-full text-slate-700 h-8 border disabled:border-slate-300 border-indigo-500 rounded-md p-2 mt-1 outline-indigo-500 shadow-sm" v-model="depotCfsDocOps" />
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
import GeneralFields from '../generalFields/index.vue'
import { ref, computed } from 'vue'
import { headers } from '@/components/functions/bookings/data'
import Button from '@/components/kits/button/index.vue'
import { InboxArrowDownIcon, ArrowUturnLeftIcon } from '@heroicons/vue/24/outline'
import { db } from '@/firebase'
import { updateDoc, doc } from 'firebase/firestore'
import { toast } from 'vue-sonner'


const props = defineProps({
    booking: {
        type: Object,
        required: true
    }
})

const tbHeaders = computed(() => {
    return headers.filter((header) => header.dep === 'OpsDocs' || header.dep === 'all')
})

console.log(tbHeaders.value)

const emit = defineEmits(['submitUpdate', 'cancelUpdate'])

const chicuc = ref(props.booking.chicuc || null)
const sotokhai = ref(props.booking.sotokhai || null)
const lane = ref(props.booking.lane || null)
const nhapxuat = ref(props.booking.nhapxuat || null)
const ngaymotokhai = ref(props.booking.ngaymotokhai || null)
const ngaythongquan = ref(props.booking.ngaythongquan || null)
const cbm = ref(props.booking.cbm || null)
const teu = ref(props.booking.teu || null)
const type = ref(props.booking.type || null)
const typeQuantity = ref(props.booking.typeQuantity || null)
const containerNumberDocOps = ref(props.booking.containerNumberDocOps || null)
const depotCfsDocOps = ref(props.booking.depotCfsDocOps || null)

const updateBooking = () => {
    let obj = {}
    if(props.booking.bookingType === 'LG'){
        obj = {
            chicuc: chicuc.value,
            sotokhai: sotokhai.value,
            lane: lane.value,
            nhapxuat: nhapxuat.value,
            ngaymotokhai: ngaymotokhai.value,
            ngaythongquan: ngaythongquan.value,
            cbm: cbm.value,
            teu: teu.value,
            type: type.value,
            typeQuantity: typeQuantity.value,
            containerNumberDocOps: containerNumberDocOps.value,
            depotCfsDocOps: depotCfsDocOps.value
        }
    } else {
        obj = {
            chicuc: chicuc.value,
            sotokhai: sotokhai.value,
            lane: lane.value,
            nhapxuat: nhapxuat.value,
            ngaymotokhai: ngaymotokhai.value,
            ngaythongquan: ngaythongquan.value,
        }
    }
    const docRef = doc(db, 'bookings', props.booking.uid)
    updateDoc(docRef, obj)
    .then(() => {
        toast.success('Update booking successfully')
        emit('submitUpdate')
    })
    .catch((error) => {
        toast.error('Update booking failed')
        emit('cancelUpdate')
    })
}

const onCancel = () => {
    emit('cancelUpdate')
}
</script>