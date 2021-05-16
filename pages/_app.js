import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  <Head>
    <title>Ladies in DevOps</title>
    <link rel="icon" href="/favicon.ico" />

    <meta
      property="og:title"
      content="Ladies in DevOps - Join the community today!"
    />
    <meta property="og:site_name" content="Ladies in DevOps" />
    <meta property="og:url" content="https://ladiesindevops.com" />
    <meta
      property="og:description"
      content="Join a community for women excelling in their DevOps careers!"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="https://ladiesindevops.com/LadiesInDevOpsSocial.png"
    />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="https://ladiesindevops.com" />
    <meta name="twitter:creator" content="@ladiesindevops" />
    <meta name="twitter:title" content="Ladies in DevOps" />
    <meta
      name="twitter:description"
      content="Join a community for women excelling in their DevOps careers!"
    />
    <meta
      name="twitter:image"
      content="https://ladiesindevops.com/LadiesInDevOpsSocial.png"
    />
  </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;
