import Head from "next/head";
import Image from "next/image";
import Header from "../components/Home/Header";
import MisDepositos from "../components/Depositos/MisDepositos";
import styles from "../styles/Home.module.css";
import ResumenLubricantesCard from "../components/Lubricantes/ResumenLubricantesCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Petrobras | Rivadavia</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://www.petrobrasdistribucion.cl/wp-content/uploads/2019/11/favicon-16x16.png"
        />
      </Head>

      <main className={styles.main}>
        <span className={styles.logo}>
          <Image
            src="/Petrobras.svg"
            alt="Vercel Logo"
            width={272}
            height={216}
          />
        </span>{" "}
        <Header />
        <div className={styles.grid}>
          <MisDepositos />
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          🎉Sergio Herrera
        </a>
      </footer>
    </div>
  );
}