import styles from "../styles/Home.module.css";

export default function Why() {
    return (
       <div className={styles.lightblue}>
                                 <h1>The story behind Ladies in DevOps</h1>

                  <p>
          Ladies in DevOps was first created by{" "}
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
          ). </p>
          <p>You can listen to the episode below or whatever your favourite
          podcast platform is. 🎧{" "}  If you prefer to read the transcript of the episode,{" "}
          <a
            href="https://podcast.pawlean.com/1245857/8426766-getting-into-devops-w-erleene-yasmin-rahmat"
            target="_blank"
          >
            check it out here!
          </a>
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
          Off the back of that conversation, we highlighted two things:
          <ul>
            <ol>
              {" "}
              <strong>1|</strong> We often find ourselves being the <u>only</u> woman
              in our DevOps teams. This can be quite isolating.
            </ol>
            <ol>
              <strong>2|</strong> There lacks visibility of the exciting career
              opportunities in the DevOps space compared to Software Engineering.
            </ol>
          </ul>
         Our mission with this community is to try and change that.
        </p>
       </div>

    );
}
