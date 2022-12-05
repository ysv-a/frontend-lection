import Layout from "../../components/layout";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
// import { getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import useSWR from "swr";

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  //   const paths = [
  //     {
  //       params: {
  //         id: "ssg-ssr",
  //       },
  //     },
  //     {
  //       params: {
  //         id: "pre-rendering",
  //       },
  //     },
  //   ];
  return {
    paths,
    fallback: false,
  };
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Post({ postData }) {
  const { data } = useSWR(
    "https://jsonplaceholder.typicode.com/users/1",
    fetcher
  );

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div>
        <h1>{data?.name}</h1>
      </div>
    </Layout>
  );
}
