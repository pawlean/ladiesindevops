import styles from "../styles/Home.module.css";

export default function Links() {
    return (
       <div className={styles.main}>
       <p>
         <h1>Our Community</h1>
          <ul>
            <li>🌱 <a href="/sponsorship">Support our community!</a>
              </li>
              <li>😎 <a href="/showcase">Showcase</a></li>
              <li> 📚
          <a href="https://dev.to/ladiesindevops" target="_blank">
            Read our community posts
          </a></li>
          <li>⭐️{" "}
          <a href="https://mee6.xyz/ladiesindevops" target="_blank">
            Meet our community
          </a></li>
          <li>💜 {" "}
          <a href="https://www.youtube.com/watch?v=b96Jp1dVuRk&ab_channel=RVUYouTube" target="_blank">
            What Pauline learnt from starting the 'Ladies in DevOps' community
          </a></li>
              </ul>
        </p>
       </div>

    );
}
