import Head from "next/head";
import { SearchContextProvider } from "../context/SearchContext";

import Footer from "../components/layout/Footer";
import SearchContainer from "../components/layout/SearchContainer";
import ExternalLink from "../components/utils/ExternalLink";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Esito Mappatura Infratel 2021 | Ricerca il tuo numero civico
        </title>
        <meta
          name="description"
          content="Scopri le informazioni riguardanti la copertura in fibra ottica prevista entro il 2026 al tuo indirizzo."
        />
        <meta
          name="google-site-verification"
          content="J21o39Q5f6SmTWkCZmkgJq6KV6aZ-FC5E6WSOQxgL0U"
        />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      </Head>
      <main className="flex flex-1 flex-col p-5 justify-center items-center w-full">
        <h1 className="text-2xl sm:text-4xl font-medium mb-1 drop-shadow-lg">
          Mappatura Infratel 2021
        </h1>
        <h2 className="sm:text-lg italic font-light text-blue-300 drop-shadow-lg mb-10">
          Copertura prevista entro il 2026 in Italia
        </h2>
        <SearchContextProvider>
          <SearchContainer />
        </SearchContextProvider>
        <ExternalLink
          className="text-center whitespace-pre-line mt-6"
          href="https://www.paypal.com/donate/?hosted_button_id=KYWCW2M82AY28"
          text={
            "Questo sito è gratis e senza pubblicità.\nOffrimi un 🍵 per tenere in vita questo progetto."
          }
        />
      </main>
      <Footer />
    </>
  );
}