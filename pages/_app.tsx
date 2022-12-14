import { ChakraProvider, extendTheme } from "@chakra-ui/react";
//import "../styles/globals.css";
import type { AppProps } from "next/app";
import "reset-css"; //all browser apply CSS the same
import MainPage from "../components/mainPage";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5f5f5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainPage>
        <Component {...pageProps} />
      </MainPage>
    </ChakraProvider>
  );
}
