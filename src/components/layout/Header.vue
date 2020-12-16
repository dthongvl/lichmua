<template>
  <div class="sm:flex justify-between items-center">
    <div>
      <img
        src="https://vuejs.org/images/logo.png"
        class="w-10 h-10 inline mr-2"
      />
      <span>Lich mua</span>
    </div>
    <div class="w-75">
      <it-input
        v-model="searchQuery"
        placeholder="Cam, Quyt,.."
        type="text"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  data() {
    return {
      searchQuery: '',
      searching: true,
    };
  },
  methods: {
    onSearch(value: string): void {

    },
  },
});
</script>
