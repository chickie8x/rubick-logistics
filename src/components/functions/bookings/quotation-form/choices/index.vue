<template>
  <div class="w-80 p-4">
    <span class="text-lg font-semibold">Chọn báo giá</span>
    <Select v-model="choice" :options="quotationChoices" class="w-full" />
    <div class="flex justify-end gap-2 mt-4">
      <Button :variant="'primary'" @click="emit('submitQuotationChoice', choice)">Chọn</Button>
      <Button :variant="'secondary'" @click="emit('cancelQuotationChoice')">Huỷ</Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Select from '@/components/kits/select/index.vue'
import Button from '@/components/kits/button/index.vue'

const emit = defineEmits(['submitQuotationChoice', 'cancelQuotationChoice'])

const quotationChoices = ref([
  { label: 'Báo giá loại 1', value: 'fcl1' },
  { label: 'Báo giá loại 2', value: 'fcl2' },
])

const choice = ref(quotationChoices.value[0].value)
</script>
