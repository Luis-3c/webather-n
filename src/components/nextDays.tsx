import { ForecastDay } from "@/interfaces/weather"
import DayForecast from "./dayForecast";

interface Props extends React.HTMLAttributes<HTMLElement> {
    days: ForecastDay[]
}
export default function NextDays({className, days}: Props) {
    days = days.slice(1);
    return(
        <div className={`${className}`}>
            {days.map(d => <DayForecast key={d.date} date={d.date} day={d.day}/>)}
        </div>
    )
}