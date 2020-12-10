<template>
  <div>
    <CalendarHeader />
    <CalendarGridContent
      :levels="levels"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  toRefs,
  onMounted, watch,
} from 'vue';
import dayjs from 'dayjs';
import CalendarHeader from './CalendarHeader.vue';
import CalendarGridContent from './CalendarGridContent.vue';
import mergeEventsByStartAndEndDate from '../services/mergeEventsByStartAndEndDate';
import sortEventsByStartDate from '../services/sortEventsByStartDate';
import breakdownEventsToSegments from '../services/breakdownEventsToSegments';
import Segment from '../types/segment';
import Event from '../types/event';

export default defineComponent({
  name: 'Calendar',
  components: {
    CalendarHeader,
    CalendarGridContent,
  },
  props: {
    events: {
      type: Array as PropType<Event[]>,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  setup(props) {
    const { events } = toRefs(props);

    const levels = ref<Array<Array<Segment>>>([]);
    const calculateEvents = (): void => {
      const mergedEvents = mergeEventsByStartAndEndDate(props.events);
      const sortedEvents = sortEventsByStartDate(mergedEvents);
      levels.value = breakdownEventsToSegments(sortedEvents);
    };

    onMounted(calculateEvents);
    watch(events, calculateEvents);

    return {
      levels,
    };
  },
});
</script>
