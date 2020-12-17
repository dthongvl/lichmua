<template>
  <transition name="slide-left">
    <div
      v-show="!collapsed"
      class="event-info-sidebar"
    >
      <div
        v-if="currentEvent"
        class="p-5 sidebar-container bg-white border-1 rounded-r-md sidebar-container shadow-lg w-screen sm:w-96"
      >
        <CloseOutlined
          class="block text-right cursor-pointer"
          @click="hideEventInfoSidebar"
        />
        <div class="flex items-center h-8">
          <span class="w-32 text-left text-lg">Tên</span>
          <span class="flex-1 text-xl text-left">{{ currentEvent.content }}</span>
        </div>
        <template
          v-for="(season, index) in formattedSeasons"
          :key="index"
        >
          <div class="text-left mt-2 text-lg">
            Mùa {{ index + 1 }}
          </div>
          <div class="flex items-center h-8">
            <div class="w-32 text-left">
              Ngày bắt đầu
            </div>
            <span class="flex-1 text-xl text-left">{{ season.startDate }}</span>
          </div>
          <div class="flex items-center h-8">
            <div class="w-32 text-left">
              Ngày kết thúc
            </div>
            <span class="flex-1 text-xl text-left">{{ season.endDate }}</span>
          </div>
        </template>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapMutations } from 'vuex';
import dayjs from 'dayjs';
import { CloseOutlined } from '@ant-design/icons-vue';
import Range from '../../types/range';

export default defineComponent({
  name: 'EventInfoSidebar',
  components: {
    CloseOutlined,
  },
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
  methods: {
    ...mapMutations(['setEventInfoCollapsed']),
    hideEventInfoSidebar(): void {
      this.setEventInfoCollapsed(true);
    },
  },
});
</script>

<style lang="scss" scoped>
.event-info-sidebar {
  .sidebar-container {
    height: calc(100vh - 200px);
    transform: translateX(-100%) translateY(100px);
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
