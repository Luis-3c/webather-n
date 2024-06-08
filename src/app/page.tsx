"use client";
import Current from "@/components/current";
import NextDays from "@/components/nextDays";
import NextHours from "@/components/nextHours";
import { Weather } from "@/interfaces/weather";
import { getCityData } from "@/services/weatherService";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<Weather>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const cords = position.coords.latitude + "," + position.coords.longitude;
      getCityData(cords).then((data) => {
        setData(data);
      });
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-start pt-6 lg:pt-0 lg:flex-row">
      {data && (
        <>
          <Current
            location={data.location}
            current={data.current}
            today={data.forecast.forecastday[0]}
          />
          <div
            className=" w-full flex-1 text-center py-4 px-6 bg-slate-800 curved-border mt-[-62px]"
          >
            <NextHours today={data.forecast.forecastday[0].hour} tomorrow={data.forecast.forecastday[1].hour} />
            <NextDays className="mt-6 lg:mt-10 lg:px-6 md:w-96" days={data.forecast.forecastday} />
          </div>
        </>
      )}
    </main>
  );
}
