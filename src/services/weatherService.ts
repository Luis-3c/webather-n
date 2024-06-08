const APIKEY = "bfa1ede84622419da8d30636232904";
const ENDPOINT = "https://api.weatherapi.com/v1/";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export function truncTemp(n: string|number){
    return n.toString().substring(0,2);
}

export function truncDate(date: string){
  return date.substring(11);
}

export function getCityData(city: string): Promise<any> {
  return fetch(ENDPOINT + `forecast.json?q=${city}&key=${APIKEY}&days=3`)
    .then((res) => res.json())
    .then((res) => res);
}
