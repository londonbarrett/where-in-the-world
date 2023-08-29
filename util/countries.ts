import { Country } from "@/types";

export const getCountriesfromCodes = (codes: string[], countries: Country[]) =>
  countries.filter((country) => codes.includes(country.cca3));

export const recordToArray = (record: Record<string, any>) =>
  Object.keys(record).map((key) => record[key]);
