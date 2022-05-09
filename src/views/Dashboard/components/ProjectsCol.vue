<template>
<div class="rounded border border-lightgray">
  <div class="bg-milk p-3 font-bold text-xs text-purple">
    {{projectLists.name}}
  </div>
  <div>
    <div class="project-wrapper" v-for="project in projectLists.projects" :key="project.id">
      <Project :project="project"  />
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import Project from './Project.vue'
import { IProjectList } from '@/types/types'
import { defineProps } from 'vue'

const props = defineProps({
  projectLists: Object as () => IProjectList
})
</script>

<style scoped>
.project-wrapper:nth-child(even){
  background-color: #F9FAFB;
}
</style>
