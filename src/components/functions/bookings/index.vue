<template>
  <div class="h-full flex flex-col">
    <div class="flex items-center justify-between gap-x-4">
      <h1 class="text-2xl font-bold">Bookings list</h1>
      <div class="flex items-center gap-x-4">
        <Searchbar />
        <div v-if="!actions" class="flex items-center space-x-4">
          <Button
            v-if="userDepartment === 'Sale'"
            class="flex items-center"
            @click="router.push('/bookings/add')"
          >
            <PlusIcon class="size-5 mr-2" />
            New
          </Button>
          <Button class="flex items-center">
            <ArrowDownOnSquareIcon class="size-5 mr-2" />
            Export
          </Button>
          <Button class="flex items-center" @click="onSelect">
            <BookmarkIcon class="size-5 mr-2" />
            Select
          </Button>
        </div>
        <div v-else class="flex items-center space-x-4">
          <Button
            :variant="'primary'"
            class="flex items-center"
            :class="[!actionModify ? 'opacity-50 cursor-not-allowed' : '']"
            :disabled="!actionModify"
            @click="onModify"
          >
            <PencilSquareIcon class="size-5 mr-2" />
            Modify
          </Button>
          <Button
            :variant="'danger'"
            class="flex items-center"
            :class="[!actionDelete ? 'opacity-50 cursor-not-allowed' : '']"
            :disabled="!actionDelete"
            @click="onDelete"
          >
            <TrashIcon class="size-5 mr-2" />
            Delete
          </Button>
          <Button class="flex items-center" @click="onCancel" :variant="'secondary'">
            <ArrowUturnLeftIcon class="size-5 mr-2" />
            Cancel
          </Button>
        </div>
      </div>
    </div>
    <div v-if="actions" class="mt-4 flex items-center justify-center gap-x-2 text-orange-500">
      <InformationCircleIcon class="size-5" />
      <span class="text-sm"
        >Lưu ý , có thể chọn nhiều booking để xoá , chỉnh sửa chỉ được phép chọn 1 booking</span
      >
    </div>
    <div class="mt-4 w-full overflow-auto flex-1">
      <Table
        :headers="headers"
        :data="rowDataByRule"
        :modifiable="actions"
        @selectedRows="onSelectedRows"
      />
    </div>
  </div>
  <Teleport to="body">
    <Modal :open="isModalOpen" @close="onCloseModal" @submit="onSubmitModal">
      <EditBooking :booking="bookingEdit" />
    </Modal>
  </Teleport>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Searchbar from '@/components/kits/searchbar/index.vue'
import Button from '@/components/kits/button/index.vue'
import Table from '@/components/kits/table/index.vue'
import Modal from '@/components/kits/modal/index.vue'
import EditBooking from './edit/index.vue'
import {
  PlusIcon,
  ArrowDownOnSquareIcon,
  PencilSquareIcon,
  TrashIcon,
  BookmarkIcon,
  ArrowUturnLeftIcon,
  InformationCircleIcon,
} from '@heroicons/vue/24/outline'
import { ref, computed } from 'vue'
import { headers, rows } from './data'
import { permissions } from '@/mockdata'

const router = useRouter()
const user = JSON.parse(localStorage.getItem('user'))
const username = user.username
const userRole = user.role
const userDepartment = user.department
const userPermission = permissions.find((permission) => permission.key === userRole).value
const actions = ref(false)
const actionRows = ref([])
const bookingEdit = ref(null)

const rowDataByRule = computed(() => {
  if (userPermission >= 2) return rows
  const rowsBySaler = rows.filter((row) => row.saler === username)
  return rowsBySaler
})

const onSelect = () => {
  actions.value = true
}

const onCancel = () => {
  actions.value = false
}

const isModalOpen = ref(false)

const onCloseModal = () => {
  isModalOpen.value = false
  console.log('closed modal')
}

const onSelectedRows = (selectedRows) => {
  actionRows.value = selectedRows
  if(actionRows.value.filter(Boolean).length === 1) {
    actionRows.value.map((item, idx) => {
      if(item) {
        bookingEdit.value = rowDataByRule.value[idx]
        console.log(bookingEdit.value)
      }
    })  
  }
}

const onDelete = () => {
  isModalOpen.value = true
}

const onSubmitModal = () => {
  isModalOpen.value = false
  console.log('submitted modal')
}

const onModify = () => {
  isModalOpen.value = true
}

const actionDelete = computed(() => {
  return actionRows.value.filter(Boolean).length > 0
})

const actionModify = computed(() => {
  return actionRows.value.filter(Boolean).length === 1
})
</script>
