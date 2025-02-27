<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center h-screen">
    <div class="p-4 rounded-lg h-full bg-white overflow-auto">
      <div class="w-[1024px] p-4" id="my-node">
        <div class="flex border-b border-slate-300 pb-4">
          <div class="mr-10 h-40">
            <img src="/images/quotationlogo.png" alt="logo" class="h-full" />
          </div>
          <div class="text-slate-700 flex flex-col gap-y-2">
            <div>
              <h1 class="text-2xl font-bold uppercase text-center">
                Rubik Logistics Joint Stock Company
              </h1>
            </div>
            <div class="space-x-2 max-w-[700px] whitespace-pre-wrap text-center">
              <span class="font-bold">HaiPhong Head Office:</span>
              <span
                >No 10/135 Trung Luc Street, Dang Lam Ward, Hai An District, Hai Phong City,
                Vietnam</span
              >
            </div>
            <div class="space-x-2 max-w-[700px] whitespace-pre-wrap text-center">
              <span class="font-bold">Hanoi Branch:</span>
              <span
                >No 02 Galaxy 3 Street, Galaxy Urban Area, Van Phuc, Ha Dong District, Hanoi
                City</span
              >
            </div>
            <div class="space-x-2 max-w-[700px] whitespace-wrap flex justify-evenly">
              <div class="flex justify-center space-x-2">
                <span>Hotline:</span>
                <a href="tel:+84983350400" class="text-blue-500">+84 983 350 400</a>
              </div>
              <div class="flex justify-center space-x-2">
                <span>Email:</span>
                <a href="mailto:Kevin@rubiklogs.vn" class="text-blue-500">Kevin@rubiklogs.vn</a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-y-4 mt-4 text-slate-700">
          <div class="flex flex-col text-center">
            <h3 class="text-xl font-bold uppercase">Báo giá</h3>
            <span class="text-lg font-bold uppercase">Vận tải hàng hoá</span>
            <div class="flex justify-evenly">
              <span>Ngày báo giá: 05/12/2024</span>
              <span>NO. 250701/2024RUBIK</span>
            </div>
          </div>
          <div>
            <span class="text-lg font-bold uppercase block bg-slate-700 text-white px-2 py-1"
              >I - Yêu cầu hỏi giá</span
            >
            <span class="text-md font-bold uppercase block bg-slate-200 px-2 py-1"
              >1 - Chi tiết liên lạc</span
            >
            <div
              class="grid grid-cols-7 divide-x divide-y divide-slate-300 border border-slate-300 text-sm"
            >
              <div class="col-span-1 px-2 py-1 border-l border-t border-slate-300">
                <span class="font-bold">Công ty</span>
              </div>
              <div class="col-span-3 px-2 py-1">
                <span class="whitespace-pre-wrap">Rubik Logistics Joint Stock Company </span>
              </div>
              <div class="col-span-1 px-2 py-1">
                <span class="font-bold">Người liên hệ</span>
              </div>
              <div class="col-span-2 px-2 py-1">
                <span>Mr. Kevin</span>
              </div>
              <div class="col-span-1 px-2 py-1">
                <span class="font-bold">MST</span>
              </div>
              <div class="col-span-3 px-2 py-1">
                <span>0316987429</span>
              </div>
              <div class="col-span-1 px-2 py-1">
                <span class="font-bold">Di động</span>
              </div>
              <div class="col-span-2 px-2 py-1">
                <span>+84 983 350 400</span>
              </div>
              <div class="col-span-1 px-2 py-1">
                <span class="font-bold">Phone/Fax</span>
              </div>
              <div class="col-span-3 px-2 py-1">
                <span>024 3777 3333</span>
              </div>
              <div class="col-span-1 px-2 py-1">
                <span class="font-bold">Email</span>
              </div>
              <div class="col-span-2 px-2 py-1">
                <span>Kevin@rubiklogs.vn</span>
              </div>
            </div>
            <span class="text-md font-bold uppercase block bg-slate-200 px-2 py-1"
              >2 - Chi tiết lô hàng</span
            >
            <div
              class="grid grid-cols-3 divide-x divide-y divide-slate-300 border border-slate-300 text-sm"
            >
              <div class="col-span-1 px-2 py-1 border-l border-t border-slate-300">
                <span class="font-bold">Nơi giao</span>
              </div>
              <div class="col-span-2 px-2 py-1 text-center">
                <span>{{
                  quotationType === 'air' ? data.airfreight[0].origin : data.seafreight[0].POL
                }}</span>
              </div>
              <div class="col-span-1 px-2 py-1">
                <span class="font-bold">Nơi nhận</span>
              </div>
              <div class="col-span-2 px-2 py-1 text-center">
                <span>{{
                  quotationType === 'air' ? data.airfreight[0].destination : data.seafreight[0].POD
                }}</span>
              </div>
              <div class="col-span-1 px-2 py-1">
                <span class="font-bold">Điều kiện giao nhận hàng</span>
              </div>
              <div class="col-span-2 px-2 py-1 text-center">
                <span>FOB FCL</span>
              </div>
              <div class="col-span-1 px-2 py-1">
                <span class="font-bold">Điều kiện đặc biệt khác</span>
              </div>
              <div class="col-span-2 px-2 py-1 text-center">
                <span></span>
              </div>
              <div class="col-span-1 px-2 py-1">
                <span class="font-bold">Tên hàng</span>
              </div>
              <div class="col-span-2 px-2 py-1 text-center">
                <span>{{ data.product }}</span>
              </div>
              <div class="col-span-1 px-2 py-1">
                <span class="font-bold">Số lượng/Loại container</span>
              </div>
              <div class="col-span-2 px-2 py-1 text-center">
                <span>{{ data.cw }} x {{ data.containerType }}</span>
              </div>
              <div class="col-span-1 px-2 py-1">
                <span class="font-bold">Trọng lượng</span>
              </div>
              <div class="col-span-2 px-2 py-1 text-center">
                <span>Kgs</span>
              </div>
            </div>
            <span class="text-lg font-bold uppercase block bg-slate-700 text-white px-2 py-1"
              >II - Số lượng/ loại container</span
            >
            <div
              class="grid grid-cols-10 grid-rows-2 divide-x divide-y divide-slate-500 border border-slate-600 text-sm bg-slate-200"
            >
              <div
                class="col-span-4 row-span-2 px-2 flex items-center justify-center border-t border-slate-300"
              >
                <span class="font-bold">Các chi phí</span>
              </div>
              <div class="col-span-2 row-span-2 px-2 text-center flex items-center justify-center">
                <span class="font-bold">Cost</span>
              </div>
              <div class="col-span-2 row-span-1 px-2 text-center flex items-center justify-center">
                <span class="font-bold">Thành tiền</span>
              </div>
              <div
                class="col-span-1 row-span-1 col-start-7 row-start-2 text-center flex items-center justify-end px-2"
              >
                <span class="font-bold">{{ data.cw }}</span>
              </div>
              <div
                class="col-span-1 row-span-1 col-start-8 row-start-2 text-center flex items-center justify-start px-2"
              >
                <span class="font-bold">x(loại cont)</span>
              </div>
              <div
                class="col-span-2 row-span-2 px-2 py-1 text-center flex items-center justify-center"
              >
                <span class="font-bold">Ghi chú</span>
              </div>
            </div>
            <div
              class="grid grid-cols-10 divide-x divide-y divide-slate-500 border border-slate-600 text-sm"
            >
              <!-- I - Exwork fee -->
              <div
                class="col-span-1 px-2 py-1 border-l border-t border-slate-300 flex items-center justify-center"
                :class="[`row-span-${data.airfreight.length}`]"
              >
                <span class="font-bold">I</span>
              </div>

              <template v-for="(item, idx) in data.airfreight" :key="idx">
                <div class="col-span-3 px-2 py-1 flex items-center justify-center">
                  <span class="font-semibold"
                    >Cước air {{ data.airfreight[idx].origin }} -
                    {{ data.airfreight[idx].destination }}</span
                  >
                </div>
                <div class="col-span-1 px-2 py-1 flex items-center justify-end">
                  <span>{{ item.gw }}</span>
                </div>
                <div class="col-span-1 px-2 py-1 flex items-center justify-start">
                  <span>{{ data.currency }}/{{ item.unit }}</span>
                </div>
                <div class="col-span-1 px-2 py-1 flex items-center justify-end">
                  <span>{{ airfreightCost.toFixed(2) || '' }}</span>
                </div>
                <div class="col-span-1 px-2 py-1 flex items-center justify-start">
                  <span>{{ data.currency }}</span>
                </div>
                <div
                  class="col-span-2 px-2 py-1 flex flex-col items-center justify-center font-semibold"
                >
                  <span v-if="item.vat">Đã bao gồm VAT {{ item.vat }}%</span>
                  <span>{{ item.note }}</span>
                </div>
              </template>

              <!-- III - Phí local charge -->
              <div
                class="col-span-1 px-2 py-1 border-l border-t border-slate-300 flex items-center justify-center text-center"
                :class="[`row-span-${data.localcharge.length}`]"
              >
                <span class="font-bold"
                  >II <br />
                  Local charges</span
                >
              </div>

              <template v-for="(item, idx) in data.localcharge" :key="idx">
                <div class="col-span-3 px-2 py-1 flex items-center justify-center">
                  <span>{{ item.desc }}</span>
                </div>
                <div class="col-span-1 px-2 py-1 flex items-center justify-end">
                  <span>{{ item.cost }}</span>
                </div>
                <div class="col-span-1 px-2 py-1 flex items-center justify-start">
                  <span>{{ data.currency }}/{{ item.unit }}</span>
                </div>
                <div class="col-span-1 px-2 py-1 flex items-center justify-end">
                  <span>{{ toMoney(item).toFixed(2) }}</span>
                </div>
                <div class="col-span-1 px-2 py-1 flex items-center justify-start">
                  <span>{{ data.currency }}</span>
                </div>
                <div
                  class="col-span-2 px-2 py-1 flex flex-col items-center justify-center font-semibold"
                >
                  <span v-if="item.vat">Đã bao gồm VAT {{ item.vat }}%</span>
                  <span>{{ item.note }}</span>
                </div>
              </template>

              <div class="col-span-1 row-span-2 px-2 py-1">
                <span></span>
              </div>
              <div class="col-span-3 row-span-2 px-2 py-1 flex items-center justify-center">
                <span class="uppercase font-bold">Tổng phí vận tải</span>
              </div>
              <div class="col-span-1 px-2 py-1">
                <span></span>
              </div>
              <div class="col-span-1 px-2 py-1">
                <span></span>
              </div>
              <div class="col-span-1 px-2 py-1 flex items-center justify-end">
                <span>{{ formatNumber(totalCost.toFixed(2)) }}</span>
              </div>
              <div class="col-span-1 px-2 py-1 flex items-center justify-start">
                <span class="font-bold">USD</span>
              </div>
              <div class="col-span-2 px-2 py-1 flex items-center justify-center font-semibold">
                <span></span>
              </div>
              <div class="col-span-1 px-2 py-1">
                <span></span>
              </div>
              <div class="col-span-1 px-2 py-1">
                <span></span>
              </div>
              <div class="col-span-1 px-2 py-1 flex items-center justify-end">
                <span>{{ formatNumber((totalCost * props.data.transferRate).toFixed(2)) }}</span>
              </div>
              <div class="col-span-1 px-2 py-1 flex items-center justify-start">
                <span class="font-bold">VND</span>
              </div>
              <div class="col-span-2 px-2 py-1 flex items-center justify-center font-semibold">
                <span>{{ `Tỉ giá tạm tính: ${formatNumber(props.data.transferRate)}` }}</span>
              </div>

              <!-- III - Inland Charge -->
              <div
                class="col-span-1 px-2 py-1 border-l border-t border-slate-300 flex items-center justify-center text-center"
                :class="[`row-span-${data.othercharges.length}`]"
              >
                <span class="font-bold"
                  >III <br />
                  Inland Charges</span
                >
              </div>

              <template v-for="(item, idx) in data.othercharges" :key="idx">
                <div class="col-span-3 px-2 py-1 flex items-center justify-center">
                  <span>{{ item.desc }}</span>
                </div>
                <div class="col-span-1 px-2 py-1 flex items-center justify-end">
                  <span>{{ item.cost }}</span>
                </div>
                <div class="col-span-1 px-2 py-1 flex items-center justify-start">
                  <span>{{ data.currency }}/{{ item.unit }}</span>
                </div>
                <div class="col-span-1 px-2 py-1 flex items-center justify-end">
                  <span>{{
                    item.unit.includes(data.containerType)
                      ? parseFloat(item.cost) * parseFloat(data.cw)
                      : parseFloat(item.cost) || ''
                  }}</span>
                </div>
                <div class="col-span-1 px-2 py-1 flex items-center justify-start">
                  <span>{{ data.currency }}</span>
                </div>
                <div class="col-span-2 px-2 py-1 flex items-center justify-center font-semibold">
                  <span v-if="item.vat">Đã bao gồm VAT {{ item.vat }}%</span>
                  <span>{{ item.note }}</span>
                </div>
              </template>

              <!-- IV  -->
              <div
                class="col-span-1 px-2 py-1 border-l border-t border-slate-300 flex items-center justify-center text-center"
                :class="[`row-span-${data.disbursementfee.length}`]"
              >
                <span class="font-bold"
                  >IV <br />
                  Phí chi hộ</span
                >
              </div>

              <template v-for="(item, idx) in data.disbursementfee" :key="idx">
                <div class="col-span-3 px-2 py-1 flex items-center justify-center">
                  <span>{{ item.desc }}</span>
                </div>
                <div class="col-span-1 px-2 py-1 flex items-center justify-end">
                  <span>{{ item.cost }}</span>
                </div>
                <div class="col-span-1 px-2 py-1 flex items-center justify-start">
                  <span>{{ data.currency }}/{{ item.unit }}</span>
                </div>
                <div class="col-span-1 px-2 py-1 flex items-center justify-end">
                  <span></span>
                </div>
                <div class="col-span-1 px-2 py-1 flex items-center justify-start">
                  <span>{{ data.currency }}</span>
                </div>
                <div class="col-span-2 px-2 py-1 flex items-center justify-center font-semibold">
                  <span v-if="item.vat">Đã bao gồm VAT {{ item.vat }}%</span>
                  <span>{{ item.note }}</span>
                </div>
              </template>

              <!-- Tổng chi phí lô hàng -->
              <div class="col-span-4 px-2 py-1 flex items-center justify-center">
                <span class="font-bold uppercase">Tổng chi phí lô hàng</span>
              </div>
              <div class="col-span-1 px-2 py-1">
                <span></span>
              </div>
              <div class="col-span-1 px-2 py-1">
                <span></span>
              </div>
              <div class="col-span-1 px-2 py-1 flex items-center justify-end">
                <span class="font-bold">{{ formatNumber((totalCostVND * props.data.transferRate).toFixed(2)) }}</span>
              </div>
              <div class="col-span-1 px-2 py-1">
                <span class="font-bold">VND</span>
              </div>
              <div class="col-span-2 px-2 py-1">
                <span class="font-bold"></span>
              </div>
            </div>

            <span class="text-lg font-bold uppercase block bg-slate-700 text-white px-2 py-1"
              >III - Ghi chú</span
            >
            <ol class="list-decimal list-inside text-sm mb-4">
              <li>Báo giá chưa bao gồm VAT 8 %</li>
              <li>Báo giá chưa bao gồm các chi phí kiểm tra chất lượng, kiểm hoá (nếu có)…</li>
              <li>Báo giá chưa bao gồm chi phí đường cấm (nếu có)</li>
              <li>Chưa bao gồm phí dừng đỗ (nếu có)</li>
              <li>Thời hạn báo giá: 15/02/2025</li>
            </ol>

            <div
              class="border-t border-slate-300 py-2 flex justify-center space-x-80 border-b h-40"
            >
              <div class="text-center">
                <span class="font-bold">Người báo giá</span>
              </div>
              <div class="text-center">
                <span class="font-bold block">Xác nhận báo giá</span>
                <span class="text-xs">( Vui lòng ký, đóng dấu và fax lại chúng tôi)</span>
              </div>
            </div>
            <div class="text-sm flex flex-col">
              <span>Người báo giá: Trần Đức Trung</span>
              <span>Điện thoại: 0906972904</span>
            </div>
            <div class="mt-4 text-center italic">
              <span>~ Professional advice & Best solution logistics ~</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end mt-4 space-x-4">
        <Button :variant="'primary'" @click="exportQuotation">Xuất báo giá</Button>
        <Button :variant="'secondary'" @click="emit('cancelExportQuotation')">Huỷ</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Button from '@/components/kits/button/index.vue'
import domtoimage from 'dom-to-image'
import html2pdf from 'html2pdf.js'
import { formatNumber } from '@/utils'
const props = defineProps({
  data: {
    type: Object,
    require: true,
    default: () => {},
  },
  quotationType: {
    type: String,
    require: true,
    default: () => 'air',
  },
})

console.log(props.data.currency)

const airfreightCost = computed(() => {
  let cost = 0
  try {
    props.data.airfreight.forEach((item) => {
      if (item.unit.toLowerCase().includes(props.data.containerType.toLowerCase())) {
        cost += item.vat
          ? parseFloat(item.gw || 0) *
            parseFloat(props.data.cw || 1) *
            (1 + parseFloat(item.vat) / 100)
          : parseFloat(item.gw || 0) * parseFloat(props.data.cw || 1)
      } else {
        cost += item.vat
          ? parseFloat(item.gw || 0) * (1 + parseFloat(item.vat) / 100)
          : parseFloat(item.gw || 0)
      }
    })
    return cost
  } catch (error) {
    return 0
  }
})

const totalCost = computed(() => {
  let cost = 0
  try {
    props.data.airfreight.forEach((item) => {
      if (item.unit.toLowerCase().includes(props.data.containerType.toLowerCase())) {
        cost += item.vat
          ? parseFloat(item.gw || 0) *
            parseFloat(props.data.cw || 1) *
            (1 + parseFloat(item.vat) / 100)
          : parseFloat(item.gw || 0) * parseFloat(props.data.cw || 1)
      } else {
        cost += item.vat
          ? parseFloat(item.gw || 0) * (1 + parseFloat(item.vat) / 100)
          : parseFloat(item.gw || 0)
      }
    })
    props.data.localcharge.forEach((item) => {
      if (item.unit.toLowerCase().includes(props.data.containerType.toLowerCase())) {
        cost += item.vat
          ? parseFloat(item.cost || 1) *
            parseFloat(props.data.cw || 1) *
            (1 + parseFloat(item.vat) / 100)
          : parseFloat(item.cost || 1) * parseFloat(props.data.cw || 1)
      } else {
        cost += item.vat
          ? parseFloat(item.cost || 0) * (1 + parseFloat(item.vat) / 100)
          : parseFloat(item.cost || 0)
      }
    })
    return cost
  } catch (error) {
    return 0
  }
})

const totalCostVND = computed(() => {
  let cost = 0
  try {
    props.data.airfreight.forEach((item) => {
      if (item.unit.toLowerCase().includes(props.data.containerType.toLowerCase())) {
        cost += item.vat
          ? parseFloat(item.gw || 0) *
            parseFloat(props.data.cw || 1) *
            (1 + parseFloat(item.vat) / 100)
          : parseFloat(item.gw || 0) * parseFloat(props.data.cw || 1)
      } else {
        cost += item.vat
          ? parseFloat(item.gw || 0) * (1 + parseFloat(item.vat) / 100)
          : parseFloat(item.gw || 0)
      }
    })
    props.data.localcharge.forEach((item) => {
      if (item.unit.toLowerCase().includes(props.data.containerType.toLowerCase())) {
        cost += item.vat
          ? parseFloat(item.cost || 1) *
            parseFloat(props.data.cw || 1) *
            (1 + parseFloat(item.vat) / 100)
          : parseFloat(item.cost || 1) * parseFloat(props.data.cw || 1)
      } else {
        cost += item.vat
          ? parseFloat(item.cost || 0) * (1 + parseFloat(item.vat) / 100)
          : parseFloat(item.cost || 0)
      }
    })
    props.data.othercharges.forEach((item) => {
      if (item.unit.toLowerCase().includes(props.data.containerType.toLowerCase())) {
        cost += item.vat
          ? parseFloat(item.cost || 1) *
            parseFloat(props.data.cw || 1) *
            (1 + parseFloat(item.vat) / 100)
          : parseFloat(item.cost || 1) * parseFloat(props.data.cw || 1)
      } else {
        cost += item.vat
          ? parseFloat(item.cost || 0) * (1 + parseFloat(item.vat) / 100)
          : parseFloat(item.cost || 0)
      }
    })
    return cost
  } catch (error) {
    return 0
  }
})

const toMoney = (item) => {
  let money = 0
  try {
    if (item.unit.toLowerCase().includes(props.data.containerType.toLowerCase())) {
      money = parseFloat(item.cost || 0) * parseFloat(props.data.cw || 1)
    } else {
      money = parseFloat(item.cost || 0)
    }
  if (item.vat) {
      money = money * (1 + parseFloat(item.vat) / 100)
    }
    return money
  } catch (error) {
    return 0
  }
}

const emit = defineEmits(['submitExportQuotation', 'cancelExportQuotation'])

const exportQuotation = () => {
  const node = document.getElementById('my-node')
  domtoimage
    .toPng(node, { quality: 0.95, width: node.scrollWidth, height: node.scrollHeight })
    .then((dataUrl) => {
      const img = document.createElement('img')
      img.setAttribute('src', dataUrl)
      img.setAttribute('id', 'generated-img')
      html2pdf(img, {
        margin: 1,
        filename: `Báo giá`,
        image: { type: 'png', quality: 0.98 },
        html2canvas: { scale: 3 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      })
    })
}
</script>
