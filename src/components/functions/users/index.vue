<template>
  <div class="p-4 mt-4">
    <div class="flex items-center justify-between gap-x-4">
      <h1 class="text-2xl font-bold">Users</h1>
      <div class="flex items-center gap-x-4">
        <Searchbar />
        <Button :variant="'primary'" class="flex items-center">
          <PlusIcon class="size-5 mr-2" />
          Create user
        </Button>
      </div>
    </div>
    <div class="mt-8">
      <Table :headers="headers" :data="users" />
    </div>
  </div>
</template>

<script setup>
import Searchbar from '@/components/kits/searchbar/index.vue'
import Button from '@/components/kits/button/index.vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import Table from '@/components/kits/table/index.vue'
import { headers, users } from './user'
</script>
