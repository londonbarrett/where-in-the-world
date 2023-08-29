import { Country } from "@/types";
import { Image } from "@nextui-org/react";
import cx from "classnames";
import { memo } from "react";

type Props = {
  data: Country;
};

function CountryListItem({ data }: Props) {
  return (
    <article
      className={cx(
        "border-r",
        "dark:bg-darkBlue-50",
        "rounded",
        "border-none",
        "shadow-lg"
      )}
    >
      <Image
        src={data.flags.svg}
        alt={data.flags.alt}
        width="100%"
        className="rounded-md h-40 w-full object-cover"
      />
      <section className="p-4">
        <h2>
          <strong>{data.name.official}</strong>
        </h2>
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
