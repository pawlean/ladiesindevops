import styles from "../styles/Home.module.css";

export default function Links() {
    return (
       <div className={styles.main}>
         <h1>Our Community</h1>
         <blockquote>A huge thank you to Pauline, Erleene, Yasmin for initiating, setting up and facilitating this community. And of course also to everyone else here who is contribution and making this an awesome place. It feels wonderful to be here.</blockquote>

         
           <p className={styles.community}>
          {" "}
          🌱 <a href="/sponsorship">Support us!</a> // 😎{" "}
          <a href="/showcase">Showcase</a> 
          </p>
          <p className={styles.community}> 📚{" "}
          <a href="https://dev.to/ladiesindevops" target="_blank">
            Read our community posts
          </a>{" "}
          // ⭐️{" "}
          <a href="https://mee6.xyz/ladiesindevops" target="_blank">
            Meet our community
          </a>
        </p>
       </div>

    );
}
