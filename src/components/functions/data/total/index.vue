<template>
  <div class="p-4 flex flex-col h-full min-h-0">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-700">Danh sách khách hàng</h1>
      <div class="flex items-center gap-2">
        <Button :variant="'primary'" class="flex items-center gap-2" @click="console.log(filter)">
          <PlusIcon class="w-4 h-4" />
          New
        </Button>
        <Button variant="primary" class="flex items-center gap-2">
          <ArrowDownTrayIcon class="w-4 h-4" />
          Import
        </Button>
        <Button :variant="'primary'" class="flex items-center gap-2" @click="pickUp">
          <FolderArrowDownIcon class="w-4 h-4" />
          Follow
        </Button>
      </div>
    </div>
    <div class="flex items-center justify-end gap-2 mt-8 text-gray-500">
      <AdjustmentsVerticalIcon class="w-6 h-6" />
      <Select v-model="filter" name="filter" :options="filterOptions" :style="'h-9'" />
      <SearchBar v-model="filterValue" @keyup="filterCustomers" />
    </div>
    <div class="mt-4 w-full h-full overflow-auto border-t border-gray-300">
      <Table
        ref="tableRef"
        :modifiable="enableChoice"
        :headers="customerHeaders"
        :data="customers"
        :rowEvent="true"
        @onRowClick="selectedRows"
        @warningPickLimit="warningPickLimit"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import SearchBar from '@/components/kits/searchbar/index.vue'
import Button from '@/components/kits/button/index.vue'
import {
  AdjustmentsVerticalIcon,
  PlusIcon,
  FolderArrowDownIcon,
  ArrowDownTrayIcon,
} from '@heroicons/vue/24/outline'
import Select from '@/components/kits/select/index.vue'
import { customerHeaders, customerPool } from './index.js'
import Table from '@/components/kits/table/index.vue'
import { toast } from 'vue-sonner'
const filterOptions = ref([
  {
    label: '---',
    value: null,
  },
  {
    label: 'Mã số thuế',
    value: 'mst',
  },
  {
    label: 'Khách hàng',
    value: 'buyerName',
  },
  {
    label: 'Điện thoại',
    value: 'buyerMobile',
  },
])

const customers = ref([])
const pool = ref([])
pool.value = JSON.parse(localStorage.getItem('customerPool'))
if (pool.value) {
  customers.value = pool.value.filter((item) => item.pickedUp === false)
} else {
  localStorage.setItem('customerPool', JSON.stringify(customerPool))
  pool.value = customerPool
  customers.value = pool.value.filter((item) => item.pickedUp === false)
}
const filter = ref(filterOptions.value[0].value)
const filterValue = ref('')
const filterCustomers = () => {
  if (filter.value && filterValue.value) {
    const ret = pool.value.filter((item) => {
      return item[filter.value].toString().toLowerCase().includes(filterValue.value.toLowerCase())
    })
    customers.value = ret
  } else {
    customers.value = pool.value
  }
}
watch([filter, filterValue], () => {
  filterCustomers()
})
const router = useRouter()
const customerPickedUp = ref([])
const enableChoice = ref(true)
const tableRef = ref(null)
const user = JSON.parse(localStorage.getItem('user'))

const selectedRows = (rows) => {
  customerPickedUp.value = rows
}

const pickUp = () => {
  const isPicked = customerPickedUp.value.map((item) => {
    item.pickedUp = true
    return item
  })
  const arr2 = new Map(isPicked.map((item) => [item.mst, item]))
  const updateArray = pool.value.map((item1) => {
    const matchingItem = arr2.get(item1.mst)
    return matchingItem ? { ...item1, ...matchingItem } : item1
  })

  localStorage.setItem('customerPool', JSON.stringify(updateArray))
  pool.value = updateArray
  customers.value = pool.value.filter((item) => item.pickedUp === false)
  tableRef.value.refreshChecked()
  if (user.pickupCustomer) {
    user.pickupCustomer = [...customerPickedUp.value, ...user.pickupCustomer]
  } else {
    user.pickupCustomer = customerPickedUp.value
  }
  localStorage.setItem('user', JSON.stringify(user))
  router.push('/data/follow')
}
const warningPickLimit = (pickLimit) => {
  toast.warning(`Bạn chỉ được chọn tối đa ${pickLimit} khách hàng`)
}
</script>
