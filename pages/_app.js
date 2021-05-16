import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  <Head>
    <title>Ladies in DevOps</title>
    <link rel="icon" href="/favicon.ico" />

    <meta
      property="og:title"
      content="Ladies in DevOps - Join the community today!"
      key="title"
    />
    <meta property="og:site_name" content="Ladies in DevOps" key="title" />
    <meta property="og:url" content="https://ladiesindevops.com" key="title" />
    <meta
      property="og:description"
      content="Join a community for women excelling in their DevOps careers!"
      key="title"
    />
    <meta property="og:type" content="website" key="title" />
    <meta
      property="og:image"
      content="https://ladiesindevops.com/LadiesInDevOpsSocial.png"
      key="title"
    />

    <meta name="twitter:card" content="summary_large_image" key="title" />
    <meta
      name="twitter:site"
      content="https://ladiesindevops.com"
      key="title"
    />
    <meta name="twitter:creator" content="@ladiesindevops" key="title" />
    <meta name="twitter:title" content="Ladies in DevOps" key="title" />
    <meta
      name="twitter:description"
      content="Join a community for women excelling in their DevOps careers!"
      key="title"
    />
    <meta
      name="twitter:image"
      content="https://ladiesindevops.com/LadiesInDevOpsSocial.png"
      key="title"
    />
  </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;
