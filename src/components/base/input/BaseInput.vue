<template>
  <div class="group">
    <label
      :for="id"
      class="block mb-2.5 text-sm leading-5 font-bold text-darkgray"
    >
      {{ label }}
    </label>
    <input
      class="bg-white placeholder-gray text-darkgray rounded px-3.5 py-3 focus:outline-none border border-lightgray focus:border-blue w-full hover:border-darkgray transition-colors"
      :id="id"
      :type="type"
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="label"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    placeholder: String,
    label: String,
    modelValue: {
      type: [String, Number],
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style scoped></style>
