import "@/styles/globals.css";
import Head from "next/head";
import { useState, useEffect } from "react";
import { SwitchModeProvider } from "@/context/ModeProvider";
import { BlockItemsProvider } from "@/context/BlockItemsProvider";
import { SingleOptionsProvider } from "@/context/SingleOptionsProvider";
import { MultipleOptionsProvider } from "@/context/MultipleOptions";

function MyApp({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <>
          <Head>
            <meta
              name="viewport"
              content="width=device-width,minimum-scale=1,initial-scale=1"
            />
          </Head>
          <MultipleOptionsProvider>
            <SingleOptionsProvider>
              <BlockItemsProvider>
                <SwitchModeProvider>
                  <Component {...pageProps} />
                </SwitchModeProvider>
              </BlockItemsProvider>
            </SingleOptionsProvider>
          </MultipleOptionsProvider>
        </>
      )}
    </>
  );
}

export default MyApp;
