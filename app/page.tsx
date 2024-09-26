import ContactForm from "@/pages/contact";
import styles from "./page.module.css";


export default function Home() {
  return (
    <section className={styles.page}>
      <main className={styles.main}>

        <div id="about">
          <h1>Bem-vindo à Toca do Dragão!</h1>

          <p>
            Somos uma guilda dedicada e ativa no mundo dos MMORPGs, voltada para todos os tipos de conteúdo, tanto <strong>PvE</strong> quanto <strong>PvP</strong>.
            Seja você um jogador casual ou competitivo, <strong>a Toca do Dragão é o lugar certo para você!</strong>
          </p>
          <p>
            Atualmente estamos focados no MMO Throne and Liberty! Estamos fazendo todos os tipos de conteudo, se tiver o interesse em participar da nossa guilda
            basta preencher o formulário e iremos adiciona-lo em breve.
          </p>
          <p>
            Somos também uma comunidade, não deixe de participar de nosso discord. Sempre tem uma galera online pra jogar tudo que é tipo de jogo.
          </p>
        </div>

        <div>
          <h2>O que oferecemos:</h2>
          <ul>
            <li><strong>Conteúdo PvE:</strong> Organizamos raids, dungeons, missões cooperativas e eventos de progressão.</li>
            <li><strong>Conteúdo PvP:</strong> Temos times focado em batalhas competitivas, arenas e guerras de guilda.</li>
            <li><strong>Apoio à Comunidade:</strong> Oferecemos ajuda para novatos e jogadores que buscam evoluir suas habilidades.</li>
          </ul>

          <h2>Regras da Guilda:</h2>
          <p>Para garantir uma boa convivência e um ambiente divertido para todos, contamos com algumas regras básicas:</p>
          <ol>
            <li><strong>Respeito acima de tudo:</strong> Mantenha o respeito entre os membros, seja em conversas de guilda ou em atividades.</li>
            <li><strong>Participação ativa:</strong> A Toca do Dragão é para jogadores que gostam de participar e se envolver nos eventos da guilda.</li>
            <li><strong>Colaboração em equipe:</strong> Nosso sucesso depende do trabalho em equipe, por isso esperamos que todos contribuam com a guilda e seus membros.</li>
          </ol>
        </div>

        <div id="join">
          <h2>Entre em contato:</h2>
          <p>Preencha o formulário abaixo para se inscrever na nossa guilda!</p>
        </div>


        <ContactForm />
      </main>
    </section>
  );
}
