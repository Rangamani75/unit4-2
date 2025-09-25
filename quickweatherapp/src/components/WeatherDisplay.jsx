import React from "react";

function WeatherDisplay({ data, loading, error }) {
  if (loading) return <p >Loading...</p>;
  if (error) return <p >Error: {error}</p>;
  if (!data) return null;
  

  return (
    <div >
      <h2 >{data.name}</h2>
    </div>
  );
}

export default React.memo(WeatherDisplay);
