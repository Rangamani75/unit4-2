import { useState } from "react";
import useFetch from "./hooks/useFetch";
import WeatherDisplay from "./components/WeatherDisplay";
import SearchBar from "./components/SearchBar";


const api = "dbd716344467cd660fa3973f01181818";

export default function App() {
  const [city, setCity] = useState("");
  const apiUrl = city
    ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
    : null;

  const { data, loading, error } = useFetch(apiUrl);

  return (
    <div>
      <SearchBar/>
    
      <WeatherDisplay data={data} loading={loading} error={error} />
    </div>

    
    
  );
}
