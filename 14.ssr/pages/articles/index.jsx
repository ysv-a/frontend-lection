import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import { useMemo, useState } from "react";

export async function getServerSideProps({ res, req }) {
  //   res.setHeader(
  //     "Cache-Control",
  //     "public, s-maxage=10, stale-while-revalidate=59"
  //   );
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  // Pass data to the page via props
  return { props: { articles: data } };
}

export default function Articles({ articles }) {
  const [search, setSearch] = useState("");
  const searchArticle = useMemo(
    () => articles.filter((item) => item.title.includes(search)),
    [search, articles]
  );

  return (
    <Layout>
      <Head>
        <title>Все записи</title>
      </Head>
      <div>
        <div>
          <input
            type="text"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <ul>
          {searchArticle.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/articles/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
