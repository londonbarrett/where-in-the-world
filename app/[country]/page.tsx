import Arrow from "@/components/icons/arrow";
import { getCountries, getCountry } from "@/services/countries";
import { getCountriesfromCodes, recordToArray } from "@/util/countries";
import Link from "next/link";

type Props = {
  params: { country: string };
};

async function Country({ params }: Props) {
  const country = await getCountry(params.country);
  const countries = await getCountries();
  return (
    country && (
      <section className="flex flex-col gap-8">
        <Link href="/">
          <Arrow className="dark:fill-white inline mr-2" /> Back
        </Link>
        <article className="flex flex-col gap-8">
          <img src={country.flags.svg} alt={country.flags.alt} />
          <h2>
            <strong>{country.name.official}</strong>
          </h2>
          <div>
            <p>
              <strong>Native Names:</strong>{" "}
              {recordToArray(country.name.nativeName)
                .map((name) => name.official)
                .join(", ")}
            </p>
            <p>
              <strong>Population:</strong> {country.population}
            </p>
            <p>
              <strong>Region:</strong> {country.region}
            </p>
            <p>
              <strong>Subregion:</strong> {country.subregion}
            </p>
            <p>
              <strong>Capital:</strong> {country.capital}
            </p>
          </div>
          <div>
            <p>
              <strong>Top Level Domain:</strong> {country.tld}
            </p>
            <p>
              <strong>Currencies:</strong>{" "}
              {recordToArray(country.currencies).map(
                (currency) => currency.name
              )}
            </p>
            <p>
              <strong>Languages:</strong>{" "}
              {recordToArray(country.languages).join(", ")}
            </p>
          </div>
          {country.borders && (
            <div>
              <h3>
                <strong>Border Countries</strong>
              </h3>
              <ul>
                {getCountriesfromCodes(country.borders, countries).map(
                  (item) => (
                    <li key={item.cca3}>{item.name.official}</li>
                  )
                )}
              </ul>
            </div>
          )}
        </article>
      </section>
    )
  );
}

export default Country;
