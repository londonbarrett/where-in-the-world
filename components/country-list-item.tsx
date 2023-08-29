import { Country } from "@/types";
import { memo } from "react";

type Props = {
  data: Country;
};

function CountryListItem({ data }: Props) {
  return (
    <article>
      <h2>{data.name.official}</h2>
      <section>
        <div>
          <strong>Population:</strong> {data.population}
        </div>
        <div>
          <strong>Region: </strong> {data.region}
        </div>
        <div>
          <strong>Capital: </strong> {data.capital}
        </div>
      </section>
    </article>
  );
}

export default memo(CountryListItem);
