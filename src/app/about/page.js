import styles from '../page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        このサイトについて
      </h1>
      <br/>
      <p>ようこそ！当サイトは、最新のWeb技術を活用し、ゲーム愛好家に向けたユニークな体験を提供することを目指しています。<br/>
      ここでは、Next.jsという先進的なフレームワークを使用して、様々なゲームを作成して特別な場所を作り上げていければいいなと思っています。</p>
      <br/>
      <h2>最先端の技術</h2>
      <br/>
        <p>Next.jsは、Reactのフレームワークとして広く認識されており、このサイトの構築においても中心的な役割を果たしています。<br/>
          この技術により、迅速でスムーズなユーザー体験を実現し、サイトのパフォーマンスを最大限に引き出しています。</p>
      <br/>
        <h2>多彩なゲームのラインナップ</h2>
      <br/>
        <p>当サイトでは、パズル、アドベンチャー、ストラテジーなど、多岐にわたるジャンルのゲームを作っていきたいと思っています。<br/>
        あらゆる年齢層/男女問わずに楽しんでいただけるよう、頑張ってゲーム制作をしていきますのでよろしくお願いいたします。</p>
      <br/>
        <h2>ユーザーフレンドリーなデザイン</h2>
      <br/>
        <p>サイトのデザインは直感的で使いやすく、初めて訪れる方でも簡単にゲームを見つけて遊べるようにしていきます。
      <br/>
          高度な検索機能やカテゴリ分けによりも今後実装し、お気に入りのゲームをすぐに見つけることができるようにしたいです。</p>
      <br/>
      <p>
        Twitter:
        <a href="https://twitter.com/R_engineer69" target="_blank" rel="noopener noreferrer">
          Ryosuke@エンジニア
        </a>
      </p>
      <br/>
      <img src="../images/imageIcon.png" alt="TwitterIcon" width="150"/>
    </main>
  )
}
