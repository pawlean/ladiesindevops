import styles from "../styles/Home.module.css";

export default function Learning() {
    return (
       <div className={styles.lightblue}>
  
          <h1>Re-learning Community Building</h1>
     <p>
       Blurb 
        </p>
     
      <div className={styles.videoWrapper}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/b96Jp1dVuRk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
       </div>

    );
}
