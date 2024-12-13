<template>
  <table class="min-w-full border-t-0 border border-gray-300 relative">
    <thead class="sticky top-0">
      <tr class="bg-slate-300 divide-x divide-gray-200">
        <th v-if="modifiable" scope="col" class="w-10">
          <input
            type="checkbox"
            class="scale-125"
            v-model="isAllSelected"
            @change="selectAllToggle"
          />
        </th>
        <th
          v-for="header in headers"
          :key="header.key"
          scope="col"
          class="py-3.5 pl-4 pr-6 text-left text-sm font-semibold text-gray-700 w-auto whitespace-nowrap"
        >
          {{ header.key === 'sortIdx' ? '' : header.label }}
          <ChevronUpDownIcon
            v-if="header.key === 'sortIdx' && !sortable"
            @click="enableSort"
            class="w-6 h-6 cursor-pointer hover:text-indigo-500 bg-gray-200 p-1 rounded-md scale-110"
          />
          <div
            v-else-if="header.key === 'sortIdx' && sortable"
            class="flex items-center justify-center gap-2"
          >
            <CheckIcon
              @click="emit('confirmIdxSort', sortIndex)"
              class="w-6 h-6 text-green-500 bg-white p-1 rounded-md hover:bg-green-500 hover:text-white"
            />
            <XMarkIcon
              @click="emit('rejectIdxSort')"
              class="w-6 h-6 text-red-500 bg-white p-1 rounded-md hover:bg-red-500 hover:text-white"
            />
          </div>
        </th>
      </tr>
    </thead>
    <tbody v-if="data.length > 0" class="divide-y divide-gray-200">
      <tr
        v-for="(row, idx) in data"
        :key="idx"
        @click="rowClicked(row)"
        class="divide-x hover:bg-slate-200 cursor-default"
        :class="{
          '!bg-indigo-100': rowsSelected[idx],
          'bg-gray-50': idx % 2 !== 0,
          'cursor-pointer': rowEvent,
        }"
      >
        <td v-if="modifiable" class="px-4">
          <input type="checkbox" class="scale-125" v-model="rowsSelected[idx]" />
        </td>
        <td
          v-for="header in headers"
          :key="header.key"
          class="py-2 pl-4 pr-6 text-left text-sm text-gray-600 w-auto whitespace-nowrap"
        >
          {{ header.key === 'sortIdx' && sortable ? '' : row[header.key] }}
          <input
            v-if="sortable && header.key === 'sortIdx'"
            type="number"
            class="scale-125 w-14 text-xs px-2 py-1"
            :class="[sortable ? 'border border-gray-500 outline-indigo-500 rounded-md ' : '']"
            v-model="row.sortIdx"
            min="0"
            @click.stop
          />
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr>
        <td colspan="100%" class="text-center text-sm text-gray-600 mt-4 p-8">
          <div class="flex items-center justify-center">
            <NoSymbolIcon class="size-5 mr-2 text-red-600" /> Không có dữ liệu
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { NoSymbolIcon, ChevronUpDownIcon, CheckIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
  modifiable: {
    type: Boolean,
    default: false,
  },
  rowEvent: {
    type: Boolean,
    default: false,
  },
  sortable: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits([
  'selectedRows',
  'onRowClick',
  'enableSort',
  'confirmIdxSort',
  'rejectIdxSort',
])

const isAllSelected = ref(false)
const rowsSelected = ref(new Array(props.data.length).fill(false))
const selectAllToggle = () => {
  rowsSelected.value = new Array(props.data.length).fill(isAllSelected.value)
}

const sortIndex = computed(() => {
  return props.data.map((row, idx) => row.sortIdx)
})

watch(
  rowsSelected,
  (newVal) => {
    emit('selectedRows', newVal)
  },
  { deep: true },
)

const rowClicked = (row) => {
  if (props.rowEvent) {
    emit('onRowClick', row)
  } else {
    return
  }
}

const enableSort = () => {
  emit('enableSort', props.data)
}
</script>
