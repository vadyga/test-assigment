<template>
  <div class="tabs text-darkblue">
    <div v-if="searchPlaceholder" class="flex"><input class="ml-auto" type="text" :placeholder="searchPlaceholder"></div>
    <div class="flex border-b border-lightgray">
      <div
        class="tab flex items-center justify-center rounded-t p-5 cursor-pointer hover:bg-lightblue transition-colors"
        :class="active === tab ? 'border-b border-blue' : ''"
        v-for="(tab, index) in tabsNames"
        :key="index"
        @click="changeTab(tab)"
      >
        {{tab}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Tabs',
  props: {
    tabsNames: {
      type: Array as PropType<Array<string>>,
      required: true
    },
    searchPlaceholder: String
  },
  data: function () {
    return {
      active: this.tabsNames && this.tabsNames.length > 0 ? this.tabsNames[0] as string : ''
    }
  },
  emits: ['changed'],
  methods: {
    changeTab: function (tab: string) {
      this.active = tab
      this.$emit('changed', tab)
    }
  }
})
</script>
