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
          <Button class="flex items-center" @click="onExport">
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
    <div class="mt-4 w-full h-full overflow-auto">
      <Table
        :selectAllEnable="true"
        :headers="headers"
        :data="rowDataByRule"
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
        :department="userDepartment"
        @submitEdit="onSubmitEdit"
        @cancelEdit="onCancelEdit"
      />
      <QuotationFormType1
        v-else-if="quotationForm === 'fcl1'"
        @submitExportQuotation="onSubmitExportQuotation"
        @cancelExportQuotation="onCancelExportQuotation"
      />
      <QuotationFormType2
        v-else-if="quotationForm === 'fcl2'"
        @submitExportQuotation="onSubmitExportQuotation"
        @cancelExportQuotation="onCancelExportQuotation"
      />
      <QuotationChoice
        v-else-if="quotationChoice"
        @submitQuotationChoice="onSubmitQuotationChoice"
        @cancelQuotationChoice="onCancelQuotationChoice"
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
import EditBooking from './edit/index.vue'
import DeleteBooking from './delete/index.vue'
import QuotationFormType2 from './quotation-form/type2/index.vue'
import QuotationFormType1 from './quotation-form/type1/index.vue'
import QuotationChoice from './quotation-form/choices/index.vue'
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
const quotationForm = ref(null)
const quotationChoice = ref(false)
const tableRef = ref(null)
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
  if (actionRows.value.filter(Boolean).length === 1) {
    actionRows.value.map((item, idx) => {
      if (item) {
        bookingEdit.value = rowDataByRule.value[idx]
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

const onExport = () => {
  quotationChoice.value = true
  isModalOpen.value = true
}

const onSubmitQuotationChoice = (choice) => {
  quotationChoice.value = false
  console.log(choice)
  quotationForm.value = choice
}

const onCancelQuotationChoice = () => {
  quotationChoice.value = false
  modalVSlot.value = null
  isModalOpen.value = false
}

const onSubmitExportQuotation = () => {
  console.log('submit export quotation')
  quotationForm.value = null
  modalVSlot.value = null
  isModalOpen.value = false
}

const onCancelExportQuotation = () => {
  console.log('cancel export quotation')
  quotationForm.value = null
  modalVSlot.value = null
  isModalOpen.value = false
}

const actionDelete = computed(() => {
  return actionRows.value.filter(Boolean).length > 0
})

const actionModify = computed(() => {
  return actionRows.value.filter(Boolean).length === 1
})
</script>
