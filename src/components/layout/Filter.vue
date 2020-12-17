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
        <a-switch
          v-model:checked="thisMonthOnly"
          class="mr-1"
          @change="toggleThisMonthOnly"
        />
        <span>Chỉ trong tháng hiện tại</span>
      </div>
      <div class="mt-3 sm:mt-0">
        <a-switch
          v-model:checked="onlyFavorite"
          class="mr-1"
          @change="toggleOnlyFavorite"
        />
        <span>Chỉ những loại yêu thích</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations } from 'vuex';
import { MONTH_FILTER } from '../../constants';

export default defineComponent({
  name: 'Filter',
  data() {
    return {
      calendarStyle: 'Dương lịch',
      thisMonthOnly: false,
      onlyFavorite: false,
    };
  },
  methods: {
    ...mapMutations(['addFilter', 'removeFilter']),
    toggleThisMonthOnly(checked: boolean): void {
      if (checked) {
        this.addFilter({
          filterName: MONTH_FILTER,
          options: {
            month: (new Date()).getMonth(),
          },
        });
      } else {
        this.removeFilter(MONTH_FILTER);
      }
    },
    toggleOnlyFavorite(checked: boolean): void {

    },
  }
});
</script>
