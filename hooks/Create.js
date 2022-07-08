import styles from "../styles/Home.module.css";

function Create(url, nombre, total) {
  return (
    <a href={url} className={styles.card}>
      <h2>{nombre} &rarr;</h2>
      <p className={styles.dato}>Total: ${total}</p>
    </a>
  );
}

module.exports = Create;
