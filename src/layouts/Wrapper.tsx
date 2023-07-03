import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";

export interface WrapperProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  wrapperClasses?: string;
  title?: string;
  className?: string;
}

const Wrapper = ({ children, title }: WrapperProps) => {
  return (
    <div>
      <Head>
        <title>XRP Moon Launch Site</title>
        <meta
          name="description"
          content="Unleash the power of personalized software solutions. Our experts combine cutting-edge technology and industry expertise to create custom software perfectly tailored to your business."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{children}</div>
    </div>
  );
};

export const UnauthenticatedWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Wrapper;
