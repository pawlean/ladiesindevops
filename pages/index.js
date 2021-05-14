import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer.js";

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
      </Head>
      <img src="LadiesInDevOps.jpeg" className={styles.icon} />
      <main className={styles.main}>
        <p>
          <em>"Ladies in DevOps"</em> was first created by{" "}
          <a href="https://twitter.com/paulienuh" target="_blank">
            Pauline
          </a>{" "}
          after recording an inspiring podcast episode with 3 DevOps Engineers (
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
          ). You can listen to the episode below or whatever your favourite
          podcast platform is. 🎧{" "}
        </p>
        <p>
          <iframe
            src="https://open.spotify.com/embed-podcast/episode/0P9mLG4NY1lVu4F79onwnA"
            width="100%"
            height="232"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </p>
        <p>
          If you prefer to read the transcript of the episode,{" "}
          <a
            href="https://podcast.pawlean.com/1245857/8426766-getting-into-devops-w-erleene-yasmin-rahmat"
            target="_blank"
          >
            check it out here!
          </a>
        </p>
        <p>
          Off the back of that conversation, we highlighted two things:
          <ul>
            <ol>
              {" "}
              <strong>1) </strong> We often find ourselves being the only woman
              in our DevOps teams. This can be quite isolating.
            </ol>
            <ol>
              <strong>2) </strong> There lacks visibility of the exciting career
              opportunities in the DevOps space. We want to change this!
            </ol>
          </ul>
          This community welcomes all self-identifying women who are in that
          DevOps profession already{" "}
          <em>
            (or similar - e.g. Site Reliability Engineers, Cloud Engineers,
            Operational Support)
          </em>{" "}
          and/or those who are interested in learning more from a tight-knit
          community.
        </p>
        <p>
          {" "}
          🌱 <a href="/sponsorship">Support our community!</a> // 😎{" "}
          <a href="/showcase">Showcase</a> // 📚{" "}
          <a href="https://dev.to/ladiesindevops" target="_blank">
            Read our community posts
          </a>{" "}
          // ⭐️{" "}
          <a href="https://mee6.xyz/ladiesindevops" target="_blank">
            Meet our community
          </a>
        </p>
      </main>
      <center>
        <p>
          We currently have over 400+ community members from all around the
          world! 🌎{" "}
        </p>
        <p>Join our growing community today 👇🏼</p>
        <a href="https://discord.gg/MGWfCuW9Ku" target="_blank">
          <img src="Discord.png" className={styles.discord} />
        </a>
      </center>
      <Footer />
    </div>
  );
}
