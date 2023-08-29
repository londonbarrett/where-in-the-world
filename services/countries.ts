import { Country } from "@/types";

export const getCountry = async (name: string): Promise<Country> => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const data = await response.json();
  return data[0];
};

export const getCountries = async (): Promise<Country[]> => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return await response.json();
};
