import styles from '../page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        このサイトについて
      </h1>
      <p>
        このサイトは、Next.jsを使って作成したゲーム集のサイトです。
      </p>
      <p>
        Twitter:
        <a href="https://twitter.com/R_engineer69" target="_blank" rel="noopener noreferrer">
          Ryosuke@エンジニア
        </a>
      </p>
    </main>
  )
}
