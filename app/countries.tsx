"use client";

import CountryListItem from "@/components/country-list-item";
import RegionDropdown from "@/components/region-dropdown";
import SearchInput from "@/components/search-input";
import { Country } from "@/types";
import { Selection } from "@nextui-org/react";
import Link from "next/link";
import { ChangeEvent, Key, memo, useCallback, useMemo, useState } from "react";

type Props = {
  countries: Country[];
  regions: string[];
};

function Countries({ countries, regions }: Props) {
  const [region, setRegion] = useState<Selection>();
  const [query, setQuery] = useState("");
  const regionChangeHandler = useCallback(
    (keys: Selection) => setRegion(keys),
    []
  );
  const filteredCountries = useMemo(
    () =>
      region
        ? countries
            .filter((country) =>
              country.name.common.match(new RegExp(query, "i"))
            )
            .filter((country) =>
              Array.from(region as Set<Key>).includes(country.region)
            )
        : countries.filter((country) =>
            country.name.common.match(new RegExp(query, "i"))
          ),
    [countries, query, region]
  );
  const queryChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value),
    []
  );
  return (
    <section>
      <div>
        <SearchInput onChange={queryChangeHandler} value={query} />
        <RegionDropdown
          onChange={regionChangeHandler}
          regions={regions}
          value={region}
        />
        <hr />
        <ul>
          {filteredCountries.map((country) => (
            <li key={country.name.common}>
              <Link href={`/${country.name.common}`}>
                <CountryListItem data={country} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default memo(Countries);
