<template>
  <div class="sm:flex justify-between items-center">
    <div>
      <MenuUnfoldOutlined class="text-lg w-6 h-6 m-4 cursor-pointer" />
      <img
        src="https://vuejs.org/images/logo.png"
        class="w-10 h-10 inline mr-2"
      />
      <span>Lich mua</span>
    </div>
    <a-select
      v-model:value="searchQuery"
      placeholder="Cam, quyt,..."
      :filter-option="false"
      :not-found-content="searching ? undefined : null"
      :show-arrow="false"
      class="w-72"
      show-search
      @search="onSearch"
      @change="onSelect"
    >
      <template v-if="searching" #notFoundContent>
        <a-spin size="small" />
      </template>
      <a-select-option
        v-for="(event, index) in searchResults"
        :key="index"
        class="search-option"
      >
        {{ event.content }}
      </a-select-option>
    </a-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { mapMutations } from 'vuex';
import { MenuUnfoldOutlined } from '@ant-design/icons-vue';
import Event from '../../types/event';

export default defineComponent({
  name: 'Header',
  components: {
    MenuUnfoldOutlined,
  },
  props: {
    events: {
      type: Array as PropType<Event[]>,
      required: true,
    },
  },
  data() {
    return {
      searchQuery: '',
      searchResults: [],
      searching: false,
    };
  },
  methods: {
    ...mapMutations(['setCurrentEvent', 'setEventInfoCollapsed']),
    onSelect(index: number): void {
      this.setCurrentEvent(this.searchResults[index]);
      this.setEventInfoCollapsed(false);
    },
    onSearch(value: string): void {
      this.searching = true;
      const toSearch = value.toLowerCase();
      this.searchResults = this.events.filter((event) => event.content.toLowerCase().includes(toSearch));
      this.searching = false;
    },
  },
});
</script>
