import type { AppProps } from "next/app";
import layout from "@/layouts/Wrapper";
import Wrapper from "@/layouts/Wrapper";
import Head from "next/head";
import "../app/globals.css";

export type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    Layout?: React.ComponentType;
  };
};

export default function App({ Component, pageProps }: ComponentWithPageLayout) {
  const Layout = Component.Layout || layout;

  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export const UnauthenticatedWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Wrapper>{children}</Wrapper>;
};
