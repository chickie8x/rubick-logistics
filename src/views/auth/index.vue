<template>
  <div class="flex items-center justify-center h-screen bg-indigo-100">
    <div class="w-1/2 min-h-96 h-fit flex justify-center rounded-lg shadow-md">
      <div class="w-full max-w-md border-l rounded-l-lg overflow-hidden bg-white">
        <img src="/images/bglogin.png" alt="" class="w-full h-full object-cover" />
      </div>

      <div v-if="!isSignedup" class="w-full max-w-md p-4 bg-white flex flex-col rounded-r-lg px-4">
        <h1 class="text-2xl font-bold mb-4 text-center uppercase text-gray-700">Đăng nhập</h1>
        <div v-if="!error" class="flex items-center py-4 space-x-2">
          <ExclamationTriangleIcon class="w-5 h-5 text-red-500" />
          <p class="text-red-500 text-sm">Email hoặc mật khẩu không đúng</p>
        </div>
        <label for="email" class="text-gray-700 text-sm mb-2">Email</label>
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full p-2 rounded-md border border-gray-300 mb-4 focus:outline-indigo-600 invalid:border-red-500"
        />
        <label for="password" class="text-gray-700 text-sm mb-2">Password</label>
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full p-2 rounded-md border border-gray-300 mb-4 focus:outline-indigo-600"
        />
        <div class="flex justify-end text-sm space-x-2">
          <span class="text-gray-700 text-sm">Chưa có tài khoản?</span>
          <span
            @click="isSignedup = true"
            class="text-indigo-600 text-sm cursor-pointer hover:underline"
          >
            Đăng ký</span
          >
        </div>
        <div class="flex justify-end items-end flex-1 pb-0">
          <Button @click="signIn" :variant="'primary'" class="w-full">Đăng nhập</Button>
        </div>
      </div>
      <div v-else class="w-full max-w-md p-4 bg-white flex flex-col rounded-r-lg px-4">
        <h1 class="text-2xl font-bold mb-4 text-center uppercase text-gray-700">Đăng ký</h1>
        <div v-if="!error" class="flex items-center py-4 space-x-2">
          <ExclamationTriangleIcon class="w-5 h-5 text-red-500" />
          <p class="text-red-500 text-sm">Email đã tồn tại</p>
        </div>
        <label for="email" class="text-gray-700 text-sm mb-2">Email</label>
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full p-2 rounded-md border border-gray-300 mb-4 focus:outline-indigo-600 invalid:border-red-500"
        />
        <label for="password" class="text-gray-700 text-sm mb-1">Password</label>
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full p-2 rounded-md border border-gray-300 mb-4 focus:outline-indigo-600"
        />
        <label for="confirmPassword" class="text-gray-700 text-sm mb-1">Confirm password</label>
        <input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm password"
          class="w-full p-2 rounded-md border border-gray-300 mb-4 focus:outline-indigo-600"
        />
        <div class="flex justify-end text-sm space-x-2">
          <span class="text-gray-700 text-sm">Đã có tài khoản? </span>
          <span
            @click="isSignedup = false"
            class="text-indigo-600 text-sm cursor-pointer hover:underline"
            >Đăng nhập</span
          >
        </div>
        <div class="flex justify-end items-end flex-1 mt-4">
          <Button @click="signUp" :variant="'primary'" class="w-full">Đăng ký</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from '@/components/kits/button/index.vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router'
const isSignedup = ref(false)
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref(false)
const router = useRouter()

const signIn = () => {
  router.push('/bookings')
}
const signUp = () => {
  console.log(email.value, password.value, confirmPassword.value)
}
</script>
