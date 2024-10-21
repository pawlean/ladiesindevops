import styles from "../styles/Home.module.css";

export default function Learning() {
    return (
       <div className={styles.lightblue}>
  
          <h1>The lessons from building community</h1>
     <p>
       Pauline delivered this talk at <a href="https://www.programmedinpencil.com/" target="_blank">Programmed in Pencil meet-up.</a> She shared her learnings on building an inclusive community, making mistakes, taking on feedback and creating a safe space for all. 
        </p>

        <p>This may give you an insight on what it's like in the Ladies in DevOps community.</p>
     
      <div className={styles.videoWrapper}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/b96Jp1dVuRk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
       </div>

    );
}
