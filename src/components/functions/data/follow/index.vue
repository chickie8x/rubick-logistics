<template>
  <div class="w-full h-full flex flex-col">
    <h1 class="text-2xl font-bold mt-2 text-slate-700">Danh sách khách hàng đã lấy</h1>
    <div class="mt-8 w-full overflow-auto flex-1">
      <Table
        :data="customer"
        :headers="followHeaders"
        :sortable="sortable"
        :rowEvent="true"
        @enableSort="enableSort"
        @confirmIdxSort="confirmIdxSort"
        @rejectIdxSort="rejectIdxSort"
        @onRowClick="onRowClick"
      />
    </div>
    <Teleport to="body">
      <Modal :open="customerModal">
        <CreateBooking
          :customer="selectedCustomer"
          @cancelCreateBooking="cancelCreateBooking"
          @createBookingWithCustomer="createBookingWithCustomer"
        />
      </Modal>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import Table from '@/components/kits/table/index.vue'
import { customerHeaders } from '@/components/functions/data/total'
import Modal from '@/components/kits/modal/index.vue'
import CreateBooking from '@/components/functions/data/create-booking/index.vue'
import { toast } from 'vue-sonner'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = ref({})
const customerModal = ref(false)
const selectedCustomer = ref({})
try {
  user.value = JSON.parse(localStorage.getItem('user')) || {}
} catch (e) {
  console.error('Failed to load user data from localStorage:', e)
}

const sortable = ref(false)
const followHeaders = [{ label: 'Sort', key: 'sortIdx' }, ...customerHeaders]

const customer = ref(
  user.value.pickupCustomer?.sort((a, b) => {
    if (a.sortIdx === null && b.sortIdx !== null) return 1
    if (a.sortIdx !== null && b.sortIdx === null) return -1
    if (a.sortIdx !== null && b.sortIdx !== null) return a.sortIdx - b.sortIdx
    return 0
  }) || [],
)

const enableSort = (data) => {
  sortable.value = true
}

const confirmIdxSort = (data) => {
  customer.value = customer.value.map((item, idx) => ({
    ...item,
    sortIdx: data[idx],
  }))

  user.value.pickupCustomer = [...customer.value]
  nextTick(() => {
    localStorage.setItem('user', JSON.stringify(user.value))
    user.value = JSON.parse(localStorage.getItem('user'))
  })
  customer.value =
    user.value.pickupCustomer?.sort((a, b) => {
      if (a.sortIdx === null && b.sortIdx !== null) return 1
      if (a.sortIdx !== null && b.sortIdx === null) return -1
      if (a.sortIdx !== null && b.sortIdx !== null) return a.sortIdx - b.sortIdx
      return 0
    }) || []

  sortable.value = false
}

const rejectIdxSort = () => {
  user.value = JSON.parse(localStorage.getItem('user'))
  customer.value =
    user.value.pickupCustomer?.sort((a, b) => {
      if (a.sortIdx === null && b.sortIdx !== null) return 1
      if (a.sortIdx !== null && b.sortIdx === null) return -1
      if (a.sortIdx !== null && b.sortIdx !== null) return a.sortIdx - b.sortIdx
      return 0
    }) || []
  sortable.value = false
}

const onRowClick = (row) => {
  selectedCustomer.value = row
  customerModal.value = true
}

const cancelCreateBooking = () => {
  customerModal.value = false
}

const createBookingWithCustomer = () => {
  const bookedCustomer = user.value.bookedCustomer ? user.value.bookedCustomer : []
  bookedCustomer.push(selectedCustomer.value)
  user.value.bookedCustomer = bookedCustomer
  user.value.pickupCustomer = user.value.pickupCustomer.filter(
    (item) => item.mst !== selectedCustomer.value.mst,
  )
  nextTick(() => {
    localStorage.setItem('user', JSON.stringify(user.value))
    user.value = JSON.parse(localStorage.getItem('user'))
  })
  customerModal.value = false
  toast.success('Tạo booking thành công')
  router.push('/data/booked')
}
</script>
