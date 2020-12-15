<template>
  <div
    class="category-sidebar"
  >
    <div
      class="bg-white border-1 rounded-r-md sidebar-container opacity-0 hover:opacity-100 hover:shadow-md"
    >
      <div
        v-for="event in events"
        :key="event.content"
      >
        {{ event.content }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CategorySidebar',
  props: {
    events: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
    };
  },
});
</script>

<style lang="scss" scoped>
.category-sidebar {
  .sidebar-container {
    width: 300px;
    height: calc(-120px + 100vh);
    transition: transform 0.5s, opacity 0.3s;
    transform: translateX(-280px) translateY(60px) translateZ(0px);

    &:hover {
      transform: translateX(0px) translateY(60px) translateZ(0px);
    }
  }
}
</style>
