"use client";
import React, { useState } from 'react';
import styles from '../page.module.css'

const TicTacToePage = () => {
    // 3x3のゲームボードを初期化
    const emptyBoard = Array(9).fill(null);

    // ゲームの状態
    const [board, setBoard] = useState(emptyBoard);
    const [currentPlayer, setCurrentPlayer] = useState('✕');
    const [winner, setWinner] = useState(null);

    // セルをクリックしたときの処理
    const handleClick = (index) => {
      if (board[index] || winner) return;

      // セルにプレイヤーの記号をセット
      const newBoard = board.slice();
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      // 勝者のチェック
      checkForWinner(newBoard);

      // プレイヤー交代
      setCurrentPlayer(currentPlayer === '✕' ? '〇' : '✕');
    };

    // 勝者のチェックロジック
    const checkForWinner = (newBoard) => {
      const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6],            // Diagonals
      ];

      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
          setWinner(newBoard[a]);
          return;
        }
      }

      // 引き分けのチェック
      if (!newBoard.includes(null)) {
        setWinner('D'); // D for Draw
      }
    };

    // ゲームをリセットする
    const resetGame = () => {
      setBoard(emptyBoard);
      setCurrentPlayer('✕');
      setWinner(null);
    };

    return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.board}>
          {board.map((cell, index) => (
            <div key={index} className={styles.cell} onClick={() => handleClick(index)}>
              {cell}
            </div>
          ))}
        </div>
        {winner && (
          <p className={styles.winnerMessage}>
            {winner === 'D' ? '引き分け!' : `勝者: ${winner}`}
          </p>
        )}
        <button className={styles.button} onClick={resetGame}>リセット</button>
      </div>
    </main>
    );
};

export default TicTacToePage;
