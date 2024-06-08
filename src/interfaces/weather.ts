export interface Weather {
  current: Current;
  forecast: Forecast;
  location: Location;
}

export interface Current {
  temp_c: string;
  condition: Condition;
}

interface Condition {
  text: string;
  icon: string;
  code: string;
}

interface Forecast {
  forecastday: ForecastDay[];
}

export interface ForecastDay {
  date: string;
  day: Day;
  hour: Hour[];
}

export interface Day {
  maxtemp_c: number;
  mintemp_c: number;
  daily_chance_of_rain: number;
  avghumidity: number;
  maxwind_kph: number;
}

export interface Hour {
  temp_c: number;
  time: string;
  condition: {
    text: string;
    icnon: string;
  };
}

export interface Location {
  country: string;
  localTime: string;
  name: string;
  region: string;
}
