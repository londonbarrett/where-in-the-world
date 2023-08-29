import { Country } from "@/types";
import { memo } from "react";
import Countries from "./countries";

const getCountries = async (): Promise<Country[]> => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  return data;
};

async function Home() {
  const countries = await getCountries();
  const regions = countries
    .map((country) => country.region)
    .filter((item, i, ar) => ar.indexOf(item) === i);
  return <Countries countries={countries} regions={regions} />;
}

export default Home;
