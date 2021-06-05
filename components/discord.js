import styles from "../styles/Home.module.css";

export default function Discord() {
    return (
       <div className={styles.main}>
       <p>
          <h1>Join us today!</h1>
           We welcome all self-identifying women who are in that
          DevOps profession already{" "}
          <em>
            (or similar - e.g. Site Reliability Engineers, Cloud Engineers,
            Operational Support)
          </em>{" "}
          and/or those who are interested in learning more from a tight-knit
          community.
          </p>
          <p>
          We currently have over 450+ members from all around the
          world! 🌎{" "}
        </p>
        <p>Join our growing community today 👇🏼</p>
        <div className={styles.imagelink}>
        <a href="https://discord.gg/MGWfCuW9Ku" target="_blank" >
          <img src="Discord.png" className={styles.discord} />
        </a>
        </div>
       </div>

    );
}