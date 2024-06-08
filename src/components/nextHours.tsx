import { Hour } from "@/interfaces/weather";
import HourForecast from "./hourForecast";

interface Props {
    today: Hour[]
    tomorrow: Hour[]
}
export default function NextHours({today, tomorrow} : Props) {
    const currentTime = new Date();
    const limitTime = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000);
    const data = [...today, ...tomorrow];
    console.log('DATA: ', data);
    const hours = data.filter((d) => new Date(d.time) > currentTime && new Date(d.time) < limitTime);
  return (
    <>
      <h1 className=" font-semibold lg:text-xl">Today</h1>

      <section className="overflow-x-auto mt-2 lg:overflow-x-visible">
        <div className="flex space-x-6 justify-between lg:grid lg:grid-cols-8 lg:space-x-0">
          {hours && hours.map((d,i) => <HourForecast key={i} data={d} />)}
        </div>
      </section>
      </>
  );
}
