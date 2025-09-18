function CountryCard({ name, population, region, capital, flag }) {
  return (
    <div
    >
      <img src={flag} alt="None"  />
      <h3>{name}</h3>
      <p>Population:{population}</p>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
    </div>
  );
}

export default CountryCard;
