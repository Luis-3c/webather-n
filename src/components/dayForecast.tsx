import { Day } from '@/interfaces/weather';
import { truncTemp } from '@/services/weatherService';
import {format} from 'date-fns'
interface Props {
    date: string,
    day: Day
}
export default function DayForecast({date, day}: Props) {
    const {mintemp_c, maxtemp_c} = day;
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <span className='w-32 text-left font-semibold lg:text-lg'>{format(date, 'EEEE dd')}</span>
        <div className=' w-16'>
        <svg
          className="h-6 w-6 lg:h-8 lg:w-8 text-white mx-auto"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <circle cx="12" cy="12" r="5" />{" "}
          <line x1="12" y1="1" x2="12" y2="3" />{" "}
          <line x1="12" y1="21" x2="12" y2="23" />{" "}
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />{" "}
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />{" "}
          <line x1="1" y1="12" x2="3" y2="12" />{" "}
          <line x1="21" y1="12" x2="23" y2="12" />{" "}
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />{" "}
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
        </div>
        <span className=' w-24 text-right'> {truncTemp(mintemp_c)}° / {truncTemp(maxtemp_c)}°</span>
      </div>
    </div>
  );
}
