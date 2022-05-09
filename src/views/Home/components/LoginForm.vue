<template>
  <form action="" class="flex flex-col gap-5 mx-auto border border-lightgray rounded p-5"
        :class="{'opacity-20':isPending}" @submit="submit">
    <BaseInput type="text" v-model="email" :label="'Email'" :placeholder="'you@example.com'"/>
    <BaseInput type="text" v-model="password" :label="'Password'" :placeholder="'Password'"/>
    <div class="flex justify-between mb-8">
      <div class="text-sm">
        <BaseCheckbox :label="'Keep me logged in'" v-model="keepLogin"
                      :name="keepLogin"/>
      </div>
      <router-link to="/forgot" class="text-blue font-bold hover:text-darkblue">
        Forgot password?
      </router-link>
    </div>
    <BaseButton>
      Login
    </BaseButton>
    <button type="submit">
    </button>
  </form>
</template>

<script setup lang="ts">
import BaseInput from '@/components/base/input/BaseInput.vue'
import BaseButton from '@/components/base/button/BaseButton.vue'
import BaseCheckbox from '@/components/base/checkbox/BaseCheckbox.vue'
import { ref } from 'vue'
import { login } from '@/services/AuthService.ts'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()

const email = ref('')
const password = ref('')
const keepLogin = ref(false)
const isPending = ref(false)

const submit = (e: MouseEvent) => {
  e.preventDefault()
  isPending.value = true
  login({ email, password })
    .then((request) => {
      store.commit('user/SET_TOKEN', request.access_token)
      router.push('/dashboard')
    })
}
</script>

<style>

</style>
