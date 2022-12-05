import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticProps() {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await data.json();

  return {
    props: {
      users,
    },
  };
}

export default function Users({ users }) {
  return (
    <Layout>
      <Head>
        <title>Все пользователи</title>
      </Head>
      <div>
        <ul>
          {users.map(({ id, name, email }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/users/${id}`}>{name}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <span>{email}</span>
              </small>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
