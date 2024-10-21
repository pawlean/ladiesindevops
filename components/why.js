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
        <p>
          Off the back of that conversation, we highlighted two things:
          </p>
          <p>
              {" "}
              <strong>1|</strong> We often find ourselves being the <u>only</u> woman
              in our DevOps teams. This can be quite isolating.
            </p>
            <p>
              <strong>2|</strong> There lacks visibility of the exciting career
              opportunities in the DevOps space compared to Software Engineering.
            </p>
            <p>
         Our mission with this community is to try and change that.
        </p>
       </div>

    );
}
