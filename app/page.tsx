import AboutUs from "@/components/body/about";
import ContactForm from "@/pages/contact";
import styles from "./page.module.css";
import GuildContent from "@/components/body/guild-content";
import GuildRules from "@/components/body/guild-rules";
import ThroneAndLiberty from "@/components/body/throne-liberty";


export default function Home() {
  return (
    <section className={styles.page}>
      <main className={styles.main}>
        <AboutUs />
        <GuildContent />
        <ThroneAndLiberty />
        <GuildRules />

        <div id="join">
          <h2>Entre em contato:</h2>
          <p>Preencha o formulário abaixo para se inscrever na nossa guilda!</p>
        </div>

        <ContactForm />
      </main>
    </section>
  );
}
