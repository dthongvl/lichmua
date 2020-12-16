<template>
  <div
    class="sm:flex items-center justify-between"
  >
    <it-toggle
      v-model="calendarStyle"
      :options="['Dương lịch', 'Âm lịch']"
      class="w-72"
    />
    <div class="sm:flex">
      <div class="mt-4 sm:mt-0 sm:mr-5">
        <it-switch
          v-model="thisMonthOnly"
          label="Chỉ trong tháng hiện tại"
        />
      </div>
      <div class="mt-3 sm:mt-0">
        <it-switch
          v-model="onlyFavorite"
          label="Chỉ những loại yêu thích"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Filter',
  data() {
    return {
      calendarStyle: 'Dương lịch',
      thisMonthOnly: false,
      onlyFavorite: false,
    };
  },
});
</script>
