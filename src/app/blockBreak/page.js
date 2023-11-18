"use client";
import { useEffect, useRef, useState } from 'react';
import styles from '../page.module.css';

// ブロックとパドルのサイズを定義
const blockWidth = 75;
const blockHeight = 20;
const paddleWidth = 100;
const paddleHeight = 10;

export default function BlockBreak() {
  const canvasRef = useRef(null);
  const [paddleX, setPaddleX] = useState(350);
  const [blocks, setBlocks] = useState(createBlocks());
  const ballPosition = useRef({ x: 400, y: 350 });
  const ballVelocity = useRef({
    // Math.random() は 0 から 1 の間の値を生成するので、
    // それを -1 から 1 の範囲に変換し、さらに 0 を避けるために 1 または -1 を加えます。
    dx: (Math.random() * 2 - 1) || 1,
    dy: 2
  });
  const [gameOver, setGameOver] = useState(false);
  const [isGameClear, setIsGameClear] = useState(false);
  const [isGameReady, setIsGameReady] = useState(true); // ゲーム開始前の状態

  function createBlocks() {
    const blocks = [];
    const rowCount = 6;
    const columnCount = 9;
    const padding = 10;
    const offsetTop = 30;

    // キャンバスの幅を取得（この例では 800px と仮定）
    const canvasWidth = 800;
    // 全ブロックの総幅を計算
    const totalBlocksWidth = columnCount * blockWidth + (columnCount - 1) * padding;
    // キャンバスの中央に配置するための左端のオフセットを計算
    const offsetLeft = (canvasWidth - totalBlocksWidth) / 2;

    for (let c = 0; c < columnCount; c++) {
      blocks[c] = [];
      for (let r = 0; r < rowCount; r++) {
        const x = c * (blockWidth + padding) + offsetLeft;
        const y = r * (blockHeight + padding) + offsetTop;
        blocks[c][r] = { x, y, status: 1 };
      }
    }
    return blocks;
  }

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      setPaddleX((prev) => Math.min(prev + 20, canvasRef.current.width - paddleWidth));
    } else if (e.key === "ArrowLeft") {
      setPaddleX((prev) => Math.max(prev - 20, 0));
    }
  };

  // 矢印ボタンの操作関数
  const movePaddle = (direction) => {
    if (direction === 'left') {
      setPaddleX((prev) => Math.max(prev - 20, 0));
    } else if (direction === 'right') {
      setPaddleX((prev) => Math.min(prev + 20, canvasRef.current.width - paddleWidth));
    }
  };

  // 矢印ボタンの停止関数
  const stopPaddle = () => {
    // 停止処理（もしあれば）
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const startGame = () => {
    setIsGameReady(false); // ゲーム開始状態に設定
    setBlocks(createBlocks()); // ブロックをリセット
    // ボールの位置や速度の初期化など、ゲーム開始に必要な処理をここに記述
  };

  useEffect(() => {
      if (!isGameReady) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      let animationFrameId;

      const drawBlocks = () => {
        blocks.forEach(column => {
          column.forEach(block => {
            if (block.status === 1) {
              context.beginPath();
              context.rect(block.x, block.y, blockWidth, blockHeight);
              context.fillStyle = "#0095DD";
              context.fill();
              context.closePath();
            }
          });
        });
      };

      const collisionDetection = () => {
        let hitBlock = false;
        let remainingBlocks = 0; // 残っているブロックの数を数える

        blocks.forEach(column => {
          column.forEach(block => {
            if (block.status === 1) {
              remainingBlocks++; // 残っているブロックを数える
              if (
                ballPosition.current.x > block.x &&
                ballPosition.current.x < block.x + blockWidth &&
                ballPosition.current.y > block.y &&
                ballPosition.current.y < block.y + blockHeight
              ) {
                hitBlock = true;
                block.status = 0;
                remainingBlocks--; // ブロックを消したので減らす
              }
            }
          });
        });

        if (hitBlock) {
          ballVelocity.current.dy = -ballVelocity.current.dy;
        }

        // 全てのブロックが消えたらゲームクリア
        if (remainingBlocks === 0) {
          setIsGameClear(true);
          cancelAnimationFrame(animationFrameId);
        }
      };

      const gameLoop = () => {
        if (isGameClear) {
          // ゲームクリア時はゲームループを終了
          return;
        }
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.beginPath();
        context.arc(ballPosition.current.x, ballPosition.current.y, 10, 0, Math.PI * 2);
        context.fillStyle = '#0095DD';
        context.fill();
        context.closePath();

        let newDx = ballVelocity.current.dx;
        let newDy = ballVelocity.current.dy;

        if (ballPosition.current.x + newDx < 10 || ballPosition.current.x + newDx > canvas.width - 10) {
          newDx = -newDx;
        }
        if (ballPosition.current.y + newDy < 10) {
          newDy = -newDy;
        }

        if (ballPosition.current.y + newDy > canvas.height - paddleHeight - 10 && ballPosition.current.x > paddleX && ballPosition.current.x < paddleX + paddleWidth) {
          newDy = -newDy;
        }

        if (ballPosition.current.y + newDy > canvas.height - paddleHeight - 10 &&
          ballPosition.current.x > paddleX &&
          ballPosition.current.x < paddleX + paddleWidth) {

        // パドルにボールが当たった
        // ボールがパドルに接触した位置を計算（パドルの左端からの距離）
        const hitPoint = ballPosition.current.x - (paddleX + paddleWidth / 2);

        // パドルの中心からの距離に基づいてdxの値を調整
        const hitRatio = hitPoint / (paddleWidth / 2);
        const newDx = hitRatio * 5; // 5は変化させる強さを調整するための係数

        // ボールの速度を更新
        ballVelocity.current.dx = newDx;

        // dyの値を反転
        newDy = -ballVelocity.current.dy;
      }

        // ボールがキャンバスの底に触れたかどうかをチェック
        if (ballPosition.current.y + ballVelocity.current.dy > canvasRef.current.height - 10) {
          // ボールがパドルの上にあるかどうかをチェック
          if (!(ballPosition.current.x > paddleX && ballPosition.current.x < paddleX + paddleWidth)) {
            // パドルの上にない場合はゲームオーバー
            setGameOver(true);
            cancelAnimationFrame(animationFrameId);
            return;
          }
        }

        ballPosition.current.x += newDx;
        ballPosition.current.y += newDy;
        ballVelocity.current.dx = newDx;
        ballVelocity.current.dy = newDy;

        drawBlocks();
        collisionDetection();

        context.beginPath();
        context.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
        context.fillStyle = "#0095DD";
        context.fill();
        context.closePath();

        animationFrameId = requestAnimationFrame(gameLoop);
      };

      gameLoop();

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [paddleX, blocks, isGameClear]);

  const resetGame = () => {
    setBlocks(createBlocks());
    ballPosition.current = { x: 400, y: 350 };
    ballVelocity.current = { dx: 1, dy: 2 };
    setGameOver(false);
  };



  return (
    <main className={styles.main}>
      <canvas ref={canvasRef} width="800" height="800" className={styles.mainCanvas}/>
      {isGameReady && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <p>Ready?</p>
            <button onClick={startGame}>Start</button>
          </div>
        </div>
      )}
      {isGameClear && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <p>Game Clear!</p>
            <button onClick={resetGame}>Play Again</button>
          </div>
        </div>
      )}
      {gameOver && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <p>Game Over!</p>
            <button onClick={resetGame}>Restart</button>
          </div>
        </div>
      )}
    <div className={styles.arrowButtons}>
      <button className={styles.leftArrow} onTouchStart={() => movePaddle('left')} onTouchEnd={() => stopPaddle()}>←</button>
      <button className={styles.rightArrow} onTouchStart={() => movePaddle('right')} onTouchEnd={() => stopPaddle()}>→</button>
    </div>
    </main>
  );
}
