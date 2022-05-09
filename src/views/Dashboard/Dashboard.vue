<template>
  <div class="container m-auto">
    <h1 class="text-3xl font-bold mt-3 mb-5 text-darkgray">Projects Dashboard</h1>
    <Search />
    <Tabs :tabs-names="tabs"/>
    <div class="flex gap-5 mt-10">
      <div class="w-1/3" v-for="projectList in projectLists" :key="projectList.id">
        <ProjectsCol :projectLists="projectList"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Search from './components/Search.vue'
import Tabs from '@/components/Tabs.vue'
import ProjectsCol from './components/ProjectsCol.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const tabs = ref(['Employees', 'Departments'])

const projectLists = computed(() => store.getters['projects/getProjectLists'])
</script>

<style scoped>

</style>
