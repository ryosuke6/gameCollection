import styles from './page.module.css'

function GameCard({ href, src, alt, title, description }) {
  return (
    <div className={styles.card}>
      <a href={href} className={styles.HomeIconLink}>
        <img src={src} alt={alt} className={styles.HomeIconImg}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>コンテンツ</h1>
      <div className={styles.HomeIconList}>
        <GameCard
          href="/memoryGame"
          src="/images/MemoryGameHomeIcon.png"
          alt="MemoryGameIcon"
          title="神経衰弱"
          description="記憶力を鍛えるゲーム"
        />
        <GameCard
          href="/comingSoon"
          src="/images/TicTacToeGameHomeIcon.png"
          alt="TicTacToeGameIcon"
          title="三目並べ"
          description="ルールは簡単、三つ並べるだけ！"
        />
        <GameCard
          href="/comingSoon"
          src="/images/ReverseGameHomeIcon.png"
          alt="ReverseGameIcon"
          title="オセロ"
          description="白黒、一瞬で逆転！"
        />
        <GameCard
          href="/comingSoon"
          src="/images/make10GameHomeIcon.png"
          alt="make10GameIcon"
          title="数字重ね"
          description="数字を重ねて10を作ろう！"
        />
        <GameCard
          href="/comingSoon"
          src="/images/solitaireGameHomeIcon.png"
          alt="solitaireGameIcon"
          title="ソリティア"
          description="心静かに、一手一手を重ねて"
        />
      </div>
    </main>
  )
}
