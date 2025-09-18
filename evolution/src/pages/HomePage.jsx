import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";

function HomePage() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch("https://restcountries.com/v3.1/region/europe");
        if (!res.ok) throw new Error("Failed to fetch the  countries");
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCountries();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      {countries.map((country) => (
        <CountryCard
         
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital ? country.capital[0] : "None"}
          flag={country.flags.png}
        />
      ))}
    </div>
  );
}

export default HomePage;
