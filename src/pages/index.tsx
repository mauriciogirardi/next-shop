import { GetStaticProps } from "next";
import { useKeenSlider } from "keen-slider/react";
import Head from "next/head";
import Image from "next/future/image";

import { HomeContainer, Product } from "../styles/pages/home";
import { stripe, PriceProps } from "../lib/stripe";

import "keen-slider/keen-slider.min.css";
import { formattedCurrency } from "../utils/formattedCurrency";
import Link from "next/link";

interface Products {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

interface HomeProps {
  products: Products[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    breakpoints: {
      "(max-width: 1500px)": {
        slides: {
          perView: 2,
          spacing: 45,
        },
      },
      "(max-width: 500px)": {
        slides: {
          origin: "center",
          perView: 1,
          spacing: 10,
        },
      },
    },
    slides: {
      perView: 3,
      spacing: 45,
    },
  });

  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            passHref
            prefetch={false}
          >
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} alt="" width={520} height={480} />

              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as PriceProps;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formattedCurrency({ priceInCents: price.unit_amount || 0 }),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, //2 hours
  };
};
