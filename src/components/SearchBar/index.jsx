import { Result } from "antd";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GET_Weather_Detail } from "../../services/weather/index.service";
import WeatherDetailCard from "../WeatherDetailCard";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const [weatherDetail, setWeatherDetail] = useState({});

  const handleData = async (e) => {
    e.preventDefault();
    const cityWeatherDetail = await GET_Weather_Detail(city);
    setWeatherDetail(cityWeatherDetail);
  };

  return (
    <>
      <div className="searchBar-container">
        <form
          onSubmit={handleData}
          style={{ display: "flex", alignItems: "center" }}
        >
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="searchBar-container--inputfield"
          />
          <BsSearch />
        </form>
      </div>
      {weatherDetail.error ? (
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong.Enter Correct City Name"
        />
      ) : (
        <WeatherDetailCard {...weatherDetail} CityName={city} />
      )}
    </>
  );
};
export default SearchBar;
