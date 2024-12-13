<template>
  <div class="p-4 flex flex-col h-full min-h-0">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-700">Danh sách khách hàng</h1>
      <div class="flex items-center gap-2">
        <Button :variant="'primary'" class="flex items-center gap-2" @click="console.log(filter)">
          <PlusIcon class="w-4 h-4" />
          New Customer
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
        :headers="customerHeaders"
        :data="customers"
        :rowEvent="true"
        @onRowClick="onRowClick"
      />
    </div>
    <Teleport to="body">
      <Modal :open="customerModal" @close="customerModal = false">
        <CustomerSelect
          v-if="modalVslot === 'customerDetail'"
          :customer="customer"
          @pickupCustomer="pickupCustomer"
          @cancelPickupCustomer="cancelPickupCustomer"
        />
      </Modal>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import SearchBar from '@/components/kits/searchbar/index.vue'
import Button from '@/components/kits/button/index.vue'
import { AdjustmentsVerticalIcon, PlusIcon } from '@heroicons/vue/24/outline'
import Select from '@/components/kits/select/index.vue'
import { customerHeaders, customerPool } from './index'
import Table from '@/components/kits/table/index.vue'
import Modal from '@/components/kits/modal/index.vue'
import CustomerSelect from './custumer-select/index.vue'

const router = useRouter()

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

const filter = ref(filterOptions.value[0].value)
const filterValue = ref('')
const customers = ref(customerPool)
const filterCustomers = () => {
  if (filter.value && filterValue.value) {
    const ret = customerPool.filter((item) => {
      return item[filter.value].toString().toLowerCase().includes(filterValue.value.toLowerCase())
    })
    customers.value = ret
  } else {
    customers.value = customerPool
  }
}
watch([filter, filterValue], () => {
  filterCustomers()
})

const modalVslot = ref(null)
const customerModal = ref(false)
const customer = ref(null)
const onRowClick = (row) => {
  customerModal.value = true
  modalVslot.value = 'customerDetail'
  customer.value = row
}

const user = ref(JSON.parse(localStorage.getItem('user')))
const pickupCustomer = () => {
  const sortedCustomer = { ...customer.value }
  sortedCustomer.sortIdx = null
  if (user.value.pickupCustomer) {
    user.value.pickupCustomer.push(sortedCustomer)
  } else {
    user.value.pickupCustomer = [sortedCustomer]
  }
  localStorage.setItem('user', JSON.stringify(user.value))
  router.push({
    path: '/follow-data',
  })
}

const cancelPickupCustomer = () => {
  modalVslot.value = null
  customerModal.value = false
}
</script>
