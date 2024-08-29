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
      <h2>Um espaço onde todos podem aprender e ensinar.</h2>
      <p>Está com dificuldades? Venha!</p>
      <p>Quer ajudar? Venha!</p>
    </div>
  );
}

export default Home;
