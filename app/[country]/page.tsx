import Link from "next/link";

type Props = {
  params: { country: string };
};

function Country({ params }: Props) {
  return (
    <article>
      <h2>{params.country}</h2>
      <Link href="/">Back</Link>
    </article>
  );
}

export default Country;
