import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Product: NextPage = () => {
  const { query } = useRouter();

  return (
    <div>
      <Head>
        <title>Produtos</title>
      </Head>

      <h1>Produto: {query.id}</h1>
    </div>
  );
};

export default Product;
