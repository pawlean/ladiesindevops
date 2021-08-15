import styles from "../styles/Home.module.css";
import Footer from "../components/footer.js";
import Button from "../components/button.js";

function Showcase() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>🏆 Showcase</h1>
        <p>
          <ul>
            <li>
              <a href="https://devxconf.org/expo" target="_blank">
                🙌🏼 DevX Conf - Partner Exposition
              </a>
            </li>
            <li>
              <a
                href="https://www.thedevcoach.co.uk/best-online-cloud-communities/"
                target="_blank"
              >
                📝 Open Up The Cloud Article - Best Online Communities
              </a>
            </li>
            <li>
              <a href="https://www.eddiehub.org/?r_done=1" target="_blank">
                🙌🏼 EddieHub Community Partner
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=b96Jp1dVuRk&ab_channel=RVUYouTube"
                target="_blank"
              >
                🎥 What I learnt from starting Ladies in DevOps community by
                Pauline Narvas
              </a>
            </li>
            <li>
              <a href="https://www.diverse.fyi/" target="_blank">
                ⚡️ Diverse.FYI
              </a>
            </li>
          </ul>
        </p>
      </main>

      <Button />
      <Footer />
    </div>
  );
}
export default Showcase;
