import type { AppProps /*, AppContext */ } from "next/app";
import Router from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme";
import Layout from "@/components/Layout";
//Nprogress
import NProgress from "nprogress";
import "@/styles/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
