import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
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
        <meta name="twitter:site" content="@nytimes" />
        <meta name="twitter:creator" content="@SarahMaslinNir" />
        <meta name="twitter:title" content="Ladies in DevOps" />
        <meta
          name="twitter:description"
          content="Join a community for women excelling in their DevOps careers!"
        />
        <meta
          name="twitter:image"
          content="https://ladiesindevops.com/LadiesInDevOpsSocial.png"
        />
      </Head>
      <img src="LadiesInDevOps.jpeg" className={styles.icon} />
      <main className={styles.main}>
        <p>
          <em>"Ladies in DevOps"</em> was first created by{" "}
          <a href="https://twitter.com/paulienuh" target="_blank">
            Pauline
          </a>{" "}
          after an recording an inspiring podcast episode{" "}
          <em>(coming soon!)</em> with 3 DevOps Engineers (
          <a href="https://twitter.com/erlydr" target="_blank">
            Erleene
          </a>
          ,{" "}
          <a href="https://twitter.com/thisis_rahmat" target="_blank">
            Rahmat
          </a>{" "}
          &{" "}
          <a href="https://twitter.com/YasminYAli" target="_blank">
            Yasmin
          </a>
          .) Off the back of that conversation, we highlighted two things:
          <ul>
            <ol>
              {" "}
              <strong>1)</strong> We often find ourselves being the only woman
              in our DevOps teams. This can be quite isolating.
            </ol>
            <ol>
              <strong>2) </strong> There lacks visibility of the exciting career
              opportunities in the DevOps space. We want to change this!
            </ol>
          </ul>
          This community welcomes all women or self-identifying women who are in
          that DevOps profession already{" "}
          <em>
            (or similar - e.g. Site Reliability Engineers, Cloud Engineers,
            Operational Support Analysts)
          </em>{" "}
          and/or those who are interested in learning more from a tight-knit
          community.
        </p>
        <p>Join us today!</p>
      </main>
      <center>
        <a href="https://discord.gg/UtPpDuxzgY" target="_blank">
          <img src="Discord.png" className={styles.discord} />
        </a>
      </center>
      <footer className={styles.footer}>
        <a href="https://clarknarvas.com/" target="_blank">
          Logo designed by Clark Narvas
        </a>
      </footer>
    </div>
  );
}
