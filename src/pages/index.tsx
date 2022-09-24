import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import { useKeenSlider } from "keen-slider/react";

import { HomeContainer, Product } from "../styles/pages/home";
import shirt1 from "../assets/shirt1.png";
import shirt2 from "../assets/shirt-2.png";

import "keen-slider/keen-slider.min.css";

const Home: NextPage = () => {
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
        <Product className="keen-slider__slide">
          <Image src={shirt1} alt="" width={520} height={480} />
          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image src={shirt2} alt="" width={520} height={480} />
          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image src={shirt1} alt="" width={520} height={480} />
          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image src={shirt1} alt="" width={520} height={480} />
          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image src={shirt1} alt="" width={520} height={480} />
          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
      </HomeContainer>
    </>
  );
};

export default Home;
