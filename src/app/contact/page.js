import styles from '../page.module.css';

export default function Contact() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        お問い合わせはこちらから
      </h1>
      <p className={styles.twitterLinkDescription}>
        Twitter:
        <a href="https://twitter.com/R_engineer69" target="_blank" rel="noopener noreferrer">
          Ryosuke@エンジニア
        </a>
      </p>
    </main>
  );
}
