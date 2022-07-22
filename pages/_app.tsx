import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      background: "#E5E5E5",
      purple: "#4B4AEF",
      yellow: "#FFCA1D",
      darkgray: "#1F1F1F",
    },
    defaultYellow: "FFCA1D",
  },
});

// const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
