import Head from "next/head";
import Layout from "../../components/layout";

const UserPage = ({ user }) => {
  return (
    <Layout>
      <Head>
        <title>{user.name}</title>
      </Head>
      <div>
        <h1>{user.name}</h1>
        <h3>Username: {user.username}</h3>
        <h3>Email: {user.email}</h3>
        <h3>Phone: {user.phone}</h3>
        <h3>Website: {user.website}</h3>
      </div>
      <hr />
      <div>
        <h2>Company:</h2>
        <ul>
          <li>{user.company.name}</li>
          <li>{user.company.catchPhrase}</li>
          <li>{user.company.bs}</li>
        </ul>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await data.json();

  return {
    props: {
      user,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  return {
    paths: users.map((user) => ({
      params: { id: user.id.toString() },
    })),
    fallback: false,
  };
}

export default UserPage;
