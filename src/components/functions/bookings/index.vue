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

    <div class="flex items-center gap-x-2 mt-4">
      <div>
        <span class="text-sm">Department</span>
        <Select v-model="department" :options="departments" />
      </div>
      <div>
        <span class="text-sm">Permission</span>
        <Select v-model="right" :options="rights" />
      </div>
    </div>

    <div class="w-full h-full overflow-auto mt-4">
      <Table
        :selectAllEnable="true"
        :headers="tbHeaders"
        :data="bookings"
        :modifiable="actions"
        @onRowClick="onSelectedRows"
        ref="tableRef"
      />
    </div>
  </div>
  <Teleport to="body">
    <Modal :open="isModalOpen">
      <DeleteBooking
        v-if="modalVSlot === 'delete'"
        @submitDelete="onSubmitDelete"
        @closeDelete="onCloseDelete"
      />
      <EditBooking
        v-else-if="modalVSlot === 'edit'"
        :booking="bookingEdit"
        :department="department"
        @submitEdit="onSubmitEdit"
        @cancelEdit="onCancelEdit"
      />
    </Modal>
  </Teleport>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Searchbar from '@/components/kits/searchbar/index.vue'
import Button from '@/components/kits/button/index.vue'
import Table from '@/components/kits/table/index.vue'
import Modal from '@/components/kits/modal/index.vue'
import Select from '@/components/kits/select/index.vue'
import EditBooking from './edit/index.vue'
import DeleteBooking from './delete/index.vue'
import {
  PlusIcon,
  ArrowDownOnSquareIcon,
  PencilSquareIcon,
  TrashIcon,
  BookmarkIcon,
  ArrowUturnLeftIcon,
  InformationCircleIcon,
} from '@heroicons/vue/24/outline'
import { ref, computed, onMounted } from 'vue'
import { headers } from './data'
import { permissions } from '@/mockdata'
import { db } from '@/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

const isModalOpen = ref(false)
const router = useRouter()
const user = JSON.parse(localStorage.getItem('user'))
const username = user.username
const userRole = user.role
const userDepartment = user.department
const userPermission = permissions.find((permission) => permission.key === userRole).value
const actions = ref(false)
const actionRows = ref([])
const bookingEdit = ref(null)
const modalVSlot = ref(null)
const tableRef = ref(null)
const bookings = ref([])

const departments = [
  { label: 'Sale', value: 'Sale' },
  { label: 'Cus', value: 'Cus' },
  { label: 'Docs', value: 'Docs' },
  { label: 'Ops', value: 'Ops' },
  { label: 'Acc', value: 'Acc' },
  { label: 'OpsDocs', value: 'OpsDocs' },
]

const rights = [
  { label: 'Staff', value: 1 },
  { label: 'Leader +', value: 3 },
]

const department = ref(departments[0].value)
const right = ref(rights[0].value)

const tbHeaders = computed(() => {
  if (right.value >= 2) return headers
  if (department.value === 'Sale')
    return headers.filter((header) => header.dep === 'Sale' || header.dep === 'all')
  if (department.value === 'Cus')
    return headers.filter((header) => header.dep === 'Cus' || header.dep === 'all')
  if (department.value === 'Docs')
    return headers.filter((header) => header.dep === 'Docs' || header.dep === 'all')
  if (department.value === 'Ops')
    return headers.filter((header) => header.dep === 'Ops' || header.dep === 'all')
  if (department.value === 'Acc')
    return headers.filter((header) => header.dep === 'Acc' || header.dep === 'all')
  if (department.value === 'OpsDocs')
    return headers.filter((header) => header.dep === 'OpsDocs' || header.dep === 'all')
})

const getBookings = async () => {
  try {
    const bk = collection(db, 'bookings')
    const q = query(bk, where('hrSale', '==', username))
    const snapshot = await getDocs(q)
    const data = snapshot.docs.map((doc) => {
      let ret = {
        ...doc.data(),
        uid: doc.id,
      }
      return ret
    })
    bookings.value = data
  } catch (error) {
    console.log(error)
  }
}

const onSelect = () => {
  actions.value = true
}

const onCancel = () => {
  actions.value = false
  tableRef.value.refreshChecked()
}

const onSubmitDelete = () => {
  console.log('submit delete')
  isModalOpen.value = false
  modalVSlot.value = null
}

const onCloseDelete = () => {
  isModalOpen.value = false
  modalVSlot.value = null
}

const onSubmitEdit = () => {
  console.log('submit edit')
  isModalOpen.value = false
  modalVSlot.value = null
}

const onCancelEdit = () => {
  isModalOpen.value = false
  modalVSlot.value = null
}

const onSelectedRows = (selectedRows) => {
  actionRows.value = selectedRows
  console.log(actionRows.value)
  if (actionRows.value.filter(Boolean).length === 1) {
    actionRows.value.map((item, idx) => {
      if (item) {
        bookingEdit.value = bookings.value[idx]
      }
    })
  }
}

const onDelete = () => {
  modalVSlot.value = 'delete'
  isModalOpen.value = true
}

const onModify = () => {
  modalVSlot.value = 'edit'
  isModalOpen.value = true
}

const actionDelete = computed(() => {
  return actionRows.value.filter(Boolean).length > 0
})

const actionModify = computed(() => {
  return actionRows.value.filter(Boolean).length === 1
})

onMounted(() => {
  getBookings()
})
</script>
