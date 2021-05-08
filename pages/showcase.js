import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>🏆 Showcase</h1>
                <p>
                    <ul>
                        <li><a href="https://devxconf.org/expo" target="_blank">DevX Conf</a></li>
                        <li><a href="https://www.thedevcoach.co.uk/best-online-cloud-communities/" target="_blank">Open Up The Cloud</a></li>
                    </ul>
                </p>
            </main>

            <div className={styles.back}><a href="https://ladiesindevops.com/" >⬅️ Go back</a></div>

            <footer className={styles.footer}>
                <a href="https://twitter.com/ladiesindevops" target="_blank">
                    Twitter
                </a> //
                <a href="https://instagram.com/ladiesindevops" target="_blank">
                    Instagram
                </a> //
                <a href="https://linkedin.com/company/ladiesindevops" target="_blank">
                    LinkedIn
                </a> //

                <a href="https://clarknarvas.com/" target="_blank">
                    Logo
                </a>
            </footer>
        </div>

    );
}
