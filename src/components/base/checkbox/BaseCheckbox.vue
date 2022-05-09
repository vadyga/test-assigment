<template>
  <div class="flex items-center justify-between">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      class="field hidden"
      :class="{ checked: modelValue }"
      :id="name"
      :disabled="is_disabled"
    />
    <label
      v-if="label"
      :for="name"
      class="relative cursor-pointer p-0 text-black flex items-center"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    is_disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  + label::before {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 10px;
    vertical-align: text-top;
    content: "";
    background: white;
    border: 1px solid #8f8f8f;
    border-radius: 2px;
  }

  &:focus + label::before {
    @apply border-blue;
  }

  &.checked + label::before {
    @apply bg-blue border-blue;
  }

  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  &:disabled + label::before {
    background: #ddd;
    box-shadow: none;
  }

  &.checked + label::after {
    position: absolute;
    top: 7px;
    left: 2px;
    width: 9px;
    height: 7px;
    content: "";
    background-image: url("~@/assets/checked.svg");
  }
}
</style>
