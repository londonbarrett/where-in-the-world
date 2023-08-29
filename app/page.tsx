import Link from "next/link";

export default function Home() {
  // const countries = fetch("https://restcountries.com/v3.1/all");
  // console.log("COUNTTRIES", countries);
  return (
    <section>
      <div>
        <h2>Countries</h2>
        <ul>
          <li>
            <Link href="/canada">Canada</Link>
          </li>
          <li>
            <Link href="/colombia">Colombia</Link>
          </li>
          <li>
            <Link href="/germany">Germany</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
