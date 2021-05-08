import styles from "../styles/Home.module.css";
import Footer from "../components/footer.js";
import Button from "../components/button.js";

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

            <Button />
            <Footer />
        </div>

    );
}
