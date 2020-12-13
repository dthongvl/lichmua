<template>
  <div
    class="filter flex items-center justify-between mb-6"
  >
    <div>
      <a-radio-group
        v-model:value="calendarStyle"
        button-style="solid"
        class="mr-4"
      >
        <a-radio-button
          value="calendar"
          class="w-32"
        >
          Dương lịch
        </a-radio-button>
        <a-radio-button
          value="Lunar"
          class="w-32"
        >
          Âm lịch
        </a-radio-button>
      </a-radio-group>
      <a-switch
        v-model:checked="thisMonthOnly"
        size="small"
        class="mr-1"
      />
      <span class="mr-4">Chỉ trong tháng hiện tại</span>
      <a-switch
        v-model:checked="onlyFavorite"
        size="small"
        class="mr-1"
      />
      <span>Chỉ những loại yêu thích</span>
    </div>
    <div>
      <a-input
        v-model:value="searchQuery"
        placeholder="Cam, Quyt,.."
        class="w-72"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Filter',
  data() {
    return {
      searchQuery: '',
      calendarStyle: 'calendar',
      thisMonthOnly: false,
      onlyFavorite: false,
    };
  },
});
</script>
