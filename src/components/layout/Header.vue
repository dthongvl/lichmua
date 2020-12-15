<template>
  <div class="flex justify-between items-center">
    <div>
      <img
        src="https://vuejs.org/images/logo.png"
        class="w-10 h-10 inline mr-2"
      />
      <span>Lich mua</span>
    </div>
    <div class="w-75">
      <a-input-search
        v-model:value="searchQuery"
        placeholder="Cam, Quyt,.."
        :loading="searching"
        @search="onSearch"
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
