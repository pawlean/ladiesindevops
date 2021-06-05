import styles from "../styles/Home.module.css";

export default function Discord() {
    return (
       <div className={styles.main}>
       <p>
          <h1>Join us today!</h1>
          We currently have over 400+ community members from all around the
          world! 🌎{" "}
        </p>
        <p>Join our growing community today 👇🏼</p>
        <a href="https://discord.gg/MGWfCuW9Ku" target="_blank">
          <img src="Discord.png" className={styles.discord} />
        </a>
       </div>

    );
}
