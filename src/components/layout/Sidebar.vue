<template>
  <div
    class="relative"
  >
    <div
      class="absolute inset-y-0 z-10"
      :class="{ 'left-0': leftPosition, 'right-0': !leftPosition }"
    >
      <div
        class="bg-white border-1 rounded-r-md opacity-0 hover:opacity-100 hover:shadow-md sidebar"
        :style="sidebarVars"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sidebar',
  props: {
    collapsed: {
      type: Boolean,
      required: true,
    },
    width: {
      type: Number,
      default: 300,
    },
    position: {
      type: String,
      required: true,
      validator: (pos: string) => ['left', 'right'].includes(pos),
    },
  },
  data() {
    return {
      showSidebar: this.collapsed,
    };
  },
  computed: {
    sidebarVars(): Record<string, string> {
      const translateX = this.leftPosition ? (-this.width + 20) : (this.width - 20);

      return {
        '--width': `${this.width}px`,
        '--translateX': `${translateX}px`,
      };
    },
    leftPosition(): boolean {
      return this.position === 'left';
    },
  },
  methods: {
  },
});
</script>

<style lang="scss" scoped>
.sidebar {
  width: var(--width);
  height: calc(-120px + 100vh);
  transition: transform 0.5s, opacity 0.3s;
  transform: translateX(var(--translateX)) translateY(60px) translateZ(0px);

  &:hover {
    transform: translateX(0px) translateY(60px) translateZ(0px);
  }
}
</style>
