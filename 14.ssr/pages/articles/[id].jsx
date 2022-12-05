import Head from "next/head";
import Layout from "../../components/layout";

export async function getServerSideProps({ req, res, query }) {
  // Fetch data from external API
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${query.id}`
  );
  const data = await response.json();

  // Pass data to the page via props
  return { props: { article: data } };
}

const ArticlePage = ({ article }) => {
  return (
    <Layout>
      <Head>
        <title>{article.title}</title>
      </Head>
      <div>
        <h1>{article.title}</h1>
        <div>{article.body}</div>
      </div>
    </Layout>
  );
};

export default ArticlePage;
