import type { AppProps } from "next/app";
import { LayoutDefault } from "../layout/LayoutDefault";
import { globalStyles } from "../styles/global";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutDefault>
      <Component {...pageProps} />
    </LayoutDefault>
  );
}
