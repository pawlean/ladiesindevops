import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Thank you for your interest in sponsoring the “Ladies in DevOps” community!</h1>
                <p>"Ladies in DevOps" started in April 2021 with one mission in mind: to bring together self-identifying women who either work in the DevOps space or are looking to explore the exciting career opportunities. We currently have over <strong>400 members</strong> from across the world all with various degrees of experience (<em>from students, early career professionals to managers!</em>) We really appreciate your support in our community.</p>
                <p>Here are ways that you can get involved and support us:</p>
                <h2>Paid support 💰</h2>
                <h3><strong>1.</strong> Have a dedicated channel on our Discord </h3><p>
                    This will be a dedicated space for you to hang out with our community and share opportunities e.g. events/workshops that your company is holding or jobs that you’d like to advertise.</p>

                <h3><strong>2.</strong> Fund learning & development opportunities</h3><p>
                    In this support tier, you’ll be able to fund a course or resource for our community members to thrive in their journey in the DevOps space. This resource can be of your choosing or you can send us funds directly to purchase courses/resources for the folks that need it most. <u>Examples:</u> O'Reilly books, Udemy courses, Tech World With Nana courses, ACloudGuru membership.</p>
                <h3><strong>3.</strong> Sponsor a giveaway!</h3><p>
                    You can support us by sponsoring a giveaway! This can be anything of your choice, examples include learning resources, tech (e.g. headphones, laptops, keyboards etc.), things to help with WFH and more. Your choice to be creative and give back to our community!</p>
                <h3><strong>4.</strong> Sponsor our community events (coming soon)</h3>
                <p>
                    We’re hoping to organise some community events within our Discord server. You can support this by sponsoring the event which gives you a dedicated channel on our Discord and your logo on event presentations and other assets (videos, tweets etc.) across social media.</p>
                <h2>Free support 🌱</h2>
                <h3><strong>1.</strong> Share our community internally</h3>
                <p>If there are any groups in your company that you think would benefit from being part of Ladies in DevOps - please do share!</p>

                <h3><strong>2.</strong> Share our community on social media</h3>
                <p>We share posts across our social media accounts - <a href="https://twitter.com/ladiesindevops" >Twitter</a>, <a href="https://instagram.com/ladiesindevops" >Instagram</a> and <a href="https://www.linkedin.com/company/ladies-in-devops/" >LinkedIn</a> - spreading the word and sharing our posts is a good way to reach people who may not even know of the exciting career opportunities that are available in the DevOps space. Sharing will help us a lot!</p>

                <p>Interested in supporting us? <a href="mailto:pauline@paulinenarvas.com" >Let's talk!</a> 😊</p>
                <p className={styles.smalltext}>Version 1.0 | Written by Pauline</p>
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
