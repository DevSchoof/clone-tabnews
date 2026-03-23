import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <img
        src="/images/under-construction.jpg"
        alt="Um rato usando colete e bone amarelos, com o 
        braço apoiado sobre uma pá e a cabeça apoiada sobre 
        um cavalete onde está escrito under construction."
        className={styles.image}
      />
      <h1>Colaborem</h1>
      <h2>Um espaço colaborativo  para alunos do IFSP Bragança Paulista.</h2>
      <p>Precisa  combinar carona, ajuda com alguma atividade, procura 
        aulas aprticulares, grupos de estudo, quer divulgar uma vaga de emprego, 
        ou só bater papo? Venha!</p>
      <p>Quer ajudar? Venha também!</p>
    </div>
  );
}

export default Home;
