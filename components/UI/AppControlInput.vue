<template>
  <div class="input-control flex flex-wrap mb-6">
    <label class="text-sm mb-2 block text-gray-600 uppercase"><slot /></label>
    <input
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="border p-2 rounded text-gray-600 text-sm leading-tight w-full focus:border-blue-400 focus:outline-none"
      >
    <textarea
      v-if="controlType === 'textarea'"
      rows="10"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="border h-20 p-2 rounded text-gray-600 text-sm leading-tight w-full focus:border-blue-400 focus:outline-none"></textarea>
  </div>
</template>

<script>
export default {
  name: 'AppInputControl',
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>


