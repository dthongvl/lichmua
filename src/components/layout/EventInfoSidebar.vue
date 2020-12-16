<template>
  <transition name="slide-left">
    <div
      v-show="!collapsed"
      class="event-info-sidebar"
    >
      <div
        v-if="currentEvent"
        class="p-5 sidebar-container bg-white border-1 rounded-r-md sidebar-container shadow-md"
      >
        <div class="flex items-center h-8">
          <span class="w-32 text-left">Tên</span>
          <span class="flex-1 text-xl text-left">{{ currentEvent.content }}</span>
        </div>
        <template
          v-for="(season, index) in formattedSeasons"
          :key="index"
        >
          <div class="flex items-center h-8">
            <span class="w-32 text-left">
              Mùa {{ index + 1 }}
            </span>
            <span class="flex-1 text-xl text-left">{{ season.startDate }} -> {{ season.endDate }}</span>
          </div>
        </template>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import dayjs from 'dayjs';
import Range from '../../types/range';

export default defineComponent({
  name: 'EventInfoSidebar',
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState(['currentEvent']),
    formattedSeasons(): Array<any> {
      const formatted: Array<any> = [];

      this.currentEvent.seasons.forEach((season: Range) => {
        formatted.push({
          startDate: dayjs(season.startDate).format('DD MMMM'),
          endDate: dayjs(season.endDate).format('DD MMMM'),
        });
      });

      return formatted;
    },
  },
});
</script>

<style lang="scss" scoped>
.event-info-sidebar {
  .sidebar-container {
    width: 30vw;
    height: calc(100vh - 160px);
    transform: translateX(-30vw) translateY(80px);
  }
}

.slide-left-enter-active, .slide-left-leave-active {
  transition: all .15s ease-in-out;
}
.slide-left-enter, .slide-left-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>
