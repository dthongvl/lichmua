<template>
  <div
    class="h-32 absolute inset-0"
    :class="{ 'bg-gray-200': isEvenRow }"
  >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RowBackground',
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    return {
      isEvenRow: (props.index % 2) === 0,
    };
  },
});
</script>
