<template>
  <div
    class="filter flex items-center justify-between"
  >
    <a-radio-group
      v-model:value="calendarStyle"
      button-style="solid"
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
    <div>
      <a-switch
        v-model:checked="thisMonthOnly"
        size="small"
      />
      <span class="ml-1 mr-4">Chỉ trong tháng hiện tại</span>
      <a-switch
        v-model:checked="onlyFavorite"
        size="small"
      />
      <span class="ml-1">Chỉ những loại yêu thích</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Filter',
  data() {
    return {
      calendarStyle: 'calendar',
      thisMonthOnly: false,
      onlyFavorite: false,
    };
  },
});
</script>
