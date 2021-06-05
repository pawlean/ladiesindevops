import styles from "../styles/Home.module.css";

export default function Why() {
    return (
       <div className={styles.lightblue}>
                  <p>
                      <h1>The story behind Ladies in DevOps</h1>
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
       </div>

    );
}
