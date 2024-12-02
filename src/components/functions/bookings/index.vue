<template>
  <div>
    <div class="flex items-center justify-between gap-x-4">
      <h1 class="text-2xl font-bold">Bookings list</h1>
      <div class="flex items-center gap-x-4">
        <Searchbar />
        <div v-if="!actions" class="flex items-center space-x-4">
          <Button class="flex items-center" @click="router.push('/bookings/add')">
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
          <Button class="flex items-center">
            <PencilSquareIcon class="size-5 mr-2" />
            Modify
          </Button>
          <Button class="flex items-center" :variant="'danger'">
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
    <div class="mt-4 w-full overflow-auto">
      <Table :headers="headers" :data="rows" :modifiable="actions" />
    </div>
  </div>
  <Teleport to="body">
    <Modal :open="isModalOpen" @submit="onSubmit" @close="isModalOpen = false">
      <!-- <Add /> -->
    </Modal>
  </Teleport>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Searchbar from '@/components/kits/searchbar/index.vue'
import Button from '@/components/kits/button/index.vue'
import Table from '@/components/kits/table/index.vue'
import {
  PlusIcon,
  ArrowDownOnSquareIcon,
  PencilSquareIcon,
  TrashIcon,
  BookmarkIcon,
  ArrowUturnLeftIcon,
} from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import { headers, rows } from './data'
import Modal from '@/components/kits/modal/index.vue'
import Add from './add/index.vue'

const router = useRouter()

const actions = ref(false)

const onSelect = () => {
  actions.value = true
}

const onCancel = () => {
  actions.value = false
}

const isModalOpen = ref(false)

const onSubmit = () => {
  isModalOpen.value = false
}
</script>
