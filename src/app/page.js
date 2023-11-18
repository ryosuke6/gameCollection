import Link from 'next/link';
import styles from './page.module.css'
import Image from 'next/image';

function GameCard({ href, src, alt, title, description }) {
  return (
    <div className={styles.card}>
      <Link href={href} className={styles.HomeIconLink}>
        <img src={src} alt={alt} className={styles.HomeIconImg}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
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
          src="images/MemoryGameHomeIcon.webp"
          alt="MemoryGameIcon"
          title="神経衰弱"
          description="記憶力を鍛えるゲーム"
        />
        <GameCard
          href="/flashMentalArithmetic"
          src="images/flashMentalArithmeticGameHomeIcon.webp"
          alt="flashMentalArithmeticGameIcon"
          title="フラッシュ暗算"
          description="計算できる?"
        />
        <GameCard
          href="/ticTacToe"
          src="images/TicTacToeGameHomeIcon.webp"
          alt="TicTacToeGameIcon"
          title="三目並べ"
          description="ルールは簡単、三つ並べるだけ！"
        />
        <GameCard
          href="/blockBreak"
          src="images/BlockBreakGameHomeIcon.webp"
          alt="BlockBreakGameIcon"
          title="ブロック崩し"
          description="ブロックを崩していこう！"
        />
        {/* <GameCard
          href="/comingSoon"
          src="images/ReverseGameHomeIcon.webp"
          alt="ReverseGameIcon"
          title="オセロ"
          description="白黒、一瞬で逆転！"
        /> */}
        {/* <GameCard
          href="/comingSoon"
          src="images/make10GameHomeIcon.webp"
          alt="make10GameIcon"
          title="数字重ね"
          description="数字を重ねて10を作ろう！"
        /> */}
        {/* <GameCard
          href="/comingSoon"
          src="images/solitaireGameHomeIcon.webp"
          alt="solitaireGameIcon"
          title="ソリティア"
          description="心静かに、一手一手を重ねて"
        /> */}
      </div>
    </main>
  )
}
