<template>
  <div class="py-5 px-7 border-t border-lightgray cursor-pointer" @click="isOpened = !isOpened">
    <div class="flex gap-3 ">
      <div>
        <img :src="getImg(project.projectType)" alt="">
      </div>
      <div>
        <div class="flex gap-1.5 items-center">
          <div class="text-gray">
            {{ project.name }}
          </div>
          <div class="font-bold text-darkblue">
            {{ project.userStory }}
          </div>
          <div v-if="project.isFavorite">
            <img src="../../../assets/star.svg" alt="">
          </div>
        </div>
        <div class="flex gap-1.5">
          <div>
            <router-link :to="`/ticket/${project.ticket}`" class="text-blue font-bold hover:underline">
              #{{ project.ticket }}
            </router-link>
            ticket
          </div>
          <div v-if="project.isReadyForTest" class="text-orange">
            ready for test
          </div>
        </div>
      </div>
    </div>
    <div v-if="isOpened">
      <p class="mb-3 mt-1.5 text-sm text-gray leading-4">{{project.description}}</p>
      <div class="flex gap-3 text-darkblue">
        <div class="flex items-center gap-1">
          <img src="../../../assets/like.svg" alt="">
          <span>
            {{project.public.likes}}
          </span>
        </div>
        <div class="flex items-center gap-1">
          <img src="../../../assets/eye.svg" alt="">
          <span>
            {{project.public.watching}}
          </span>
        </div>
        <div class="flex items-center gap-1">
          <img src="../../../assets/users.svg" alt="">
          <span>
            {{project.public.members}}
          </span>
        </div>
      </div>
    </div>
    <div v-if="project.isOwner" class="py-4 flex flex-col gap-3">
      <BaseButton @click.stop class="w-full" :outline="!isOpened">Manage projects</BaseButton>
      <BaseButton @click.stop class="w-full" v-if="isOpened" :outline="isOpened">Edit projects</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/button/BaseButton.vue'
import { defineProps, ref } from 'vue'
import { IProject } from '@/types/types'

const props = defineProps({
  project: Object as () => IProject
})

function getImg (img: string) {
  return require(`../../../assets/${img}.svg`)
}

const isOpened = ref(false)
</script>

<style scoped>

</style>
