import { Current, ForecastDay, Location } from "@/interfaces/weather";
import { truncTemp } from "@/services/weatherService";

interface Props {
    location: Location,
    current: Current,
    today: ForecastDay
};

export default function Current({location, current, today}: Props) {
    const {name, country} = location;
    const {temp_c, condition} = current;
    const {day} = today;
  return (
    <div className=" text-center pb-28 px-8 lg:px-14 lg:flex lg:flex-col lg:justify-center" style={{'backgroundImage':'linear-gradient(rgb(106,6,182,1), rgb(117 17 184 / 15%)), url("https://images.pexels.com/photos/108941/pexels-photo-108941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")', backgroundPosition: "center", backgroundSize: "cover"}}>
      <span className=" font-semibold text-lg lg:text-2xl lg:min-w-[600px]">{`${name},${country}`}</span>
      <section className="flex items-center mt-4 justify-center">
        <span className=" text-8xl lg:text-9xl">{truncTemp(temp_c)}°</span>
        <svg
          className="w-12 h-12 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
            clip-rule="evenodd"
          />
        </svg>
      </section>
      <span className="text-sm lg:text-lg">{condition.text} {truncTemp(day.mintemp_c)}° / {truncTemp(day.maxtemp_c)}°</span>
      <section className=" flex justify-around mt-4 bg-gray-800 bg-opacity-70 rounded-xl px-4 py-4">
      <div className=" flex flex-col items-center gap-1">
      <svg className="h-6 w-6 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 18a4.6 4.4 0 0 1 0 -9h0a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />  <path d="M11 13v2m0 3v2m4 -5v2m0 3v2" /></svg>
      <span className=" block font-bold text-sm">{day.daily_chance_of_rain}%</span>
      <span className=" block text-xs mt-0">Precipitation</span>
      </div>
      <div className=" flex flex-col items-center gap-1">
      <svg className="h-6 w-6 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 3l5 5a7 7 0 1 1 -10 0l5 -5" /></svg>      
      <span className=" block font-bold text-sm">{day.avghumidity}%</span>
      <span className=" block text-xs mt-0">Humidity</span>
      </div>
      <div className=" flex flex-col items-center gap-1">
      <svg className="h-6 w-6 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />  <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />  <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" /></svg>      
      <span className=" block font-bold text-sm">{day.maxwind_kph}km/h</span>
      <span className=" block text-xs mt-0">Wind Speed</span>
      </div>
      </section>
    </div>
  );
}
