import Link from "next/link";

export default function Home() {
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
