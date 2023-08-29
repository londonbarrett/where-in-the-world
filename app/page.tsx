import Countries from "@/components/countries";
import { getCountries } from "@/services/countries";

async function Home() {
  const countries = await getCountries();
  const regions = countries
    .map((country) => country.region)
    .filter((item, i, ar) => ar.indexOf(item) === i);
  return <Countries countries={countries} regions={regions} />;
}

export default Home;
