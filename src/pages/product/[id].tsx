import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/future/image";
import { PriceProps, stripe } from "../../lib/stripe";

import {
  ImageContainer,
  Loading,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";
import { formattedCurrency } from "../../utils/formattedCurrency";
import { useRouter } from "next/router";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: string;
}

interface ProductProps {
  product: Product;
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <Loading>Carregando Produto...</Loading>;
  }

  return (
    <>
      <Head>
        <title>Produtos</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={400} />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button>Comprar Agora</button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { id: "prod_MUJ11RnIDwZeIM" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  if (!params) return { props: {} };

  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as PriceProps;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        description: product.description,
        price: formattedCurrency({ priceInCents: price.unit_amount || 0 }),
      },
    },
    revalidate: 60 * 60 * 1, // 1hour
  };
};
