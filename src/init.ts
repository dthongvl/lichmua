import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import vi from 'dayjs/locale/vi';

dayjs.extend(localeData);
dayjs.locale(vi);
