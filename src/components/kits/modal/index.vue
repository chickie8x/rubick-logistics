<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-50">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white p-2 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[480px] sm:p-6 w-auto"
            >
              <slot />
              <div class="flex justify-end gap-x-2 mt-8">
                <Button @click="$emit('submit')" :variant="'primary'" class="w-28"
                  >Tạo booking</Button
                >
                <Button @click="$emit('close')" :variant="'secondary'" class="w-28">Hủy</Button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/24/outline'
import Button from '@/components/kits/button/index.vue'

const props = defineProps({
  open: {
    type: Boolean,
    required: true,
    default: () => false,
  },
})

const emit = defineEmits(['submit', 'close'])
</script>
