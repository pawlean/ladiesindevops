import Why from "../components/why.js";
import Learning from "../components/learnings.js";
import Discord from "../components/discord.js";
import Links from "../components/links.js";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <img src="LadiesInDevOps.jpeg" className={styles.icon} />
            <Why/>
            <Links/>
            <Learning/>
            <Discord/>
      <Footer />
    </div>
  );
}
