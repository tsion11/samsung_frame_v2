import NextNProgress from "nextjs-progressbar";
import Head from "next/head";

import "../public/css/vendors.css";
import "../public/css/animate.min.css";
import "../public/css/main.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Samsung Frame Art - a collection of art specifically created for
          Samsung Frame TVs
        </title>
        <meta
          name="keywords"
          content="samsamsung frame,samsung the frame, samsung art, art samsung, art samsung frame, frame art, the frame, frame tv, samsung tv, samsung tv art, samsung abstract,samsung digital, african, animals, architecture, art, black and white, city, fashion, food, kids, landscape, nature, , people, photography, vintage, classics, AI, AI art, AI generate, Generative art, surreal, Abstract, Abstract art, Abstract painting, Abstract photography, Abstract realism, Abstract series, Abstract structure, Surrealism "
        />
      </Head>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}
