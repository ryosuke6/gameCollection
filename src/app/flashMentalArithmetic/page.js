"use client";
import React, { useState, useEffect } from 'react';
import styles from '../page.module.css'

const FlashMentalArithmetic = () => {
    const [numbers, setNumbers] = useState([]);
    const [sum, setSum] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isGameStarted, setIsGameStarted] = useState(false);

    const generateRandomNumbers = () => {
      const newNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1);
      setNumbers(newNumbers);
      setSum(newNumbers.reduce((acc, number) => acc + number, 0));
      setCurrentIndex(0);
      setResult('');
    };

    const startGame = () => {
      setIsGameStarted(true);
      generateRandomNumbers();
    };

    const handleInput = (event) => {
      setUserInput(event.target.value);
    };

    const checkAnswer = () => {
        // userInput が空文字列でないことを確認
        if (userInput.trim() === '') {
          alert('答えを入力してください。');
          return;
        }

        // parseInt を使ってユーザー入力を数値に変換し、sum と比較
        if (parseInt(userInput, 10) === sum) {
          setResult('正解です！');
        } else {
          setResult(`不正解です。正解は ${sum} です。`);
        }
    };

      const nextQuestion = () => {
        setIsGameStarted(false);
        setUserInput('');
        setNumbers([]);
        setCurrentIndex(0);
        setSum(0);
        setResult('');
      };

      const showNextNumber = () => {
        // 最後の数字が表示された後に、ゲームの状態を終了にせず、
        // 数字を非表示にして、ユーザーが答えを入力できるようにします。
        console.log(currentIndex, numbers.length);
        if (currentIndex < numbers.length - 1) {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          console.log('最後の数字');
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      };
      useEffect(() => {
        let timer;

        // ゲームが始まっているが、まだ全ての数字を表示していない場合
        if (isGameStarted && currentIndex < numbers.length) {
          // 500ms後に次の数字を表示するか、ゲームを終了する
          timer = setTimeout(() => {
            showNextNumber(); // 次の数字を表示、または入力欄を表示
          }, 1000);
        }

        return () => {
          if (timer) clearTimeout(timer); // useEffectのクリーンアップ
        };
      }, [currentIndex, isGameStarted, numbers.length]);




    return (
      <main className={styles.main}>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>フラッシュ暗算ゲーム</h1>
          {!isGameStarted ? (
            <button onClick={startGame}>スタート</button>
          ) : currentIndex < numbers.length ? (
            <div>
              <p>この数字を記憶してください:</p>
              <strong style={{ fontSize: '24px' }}>{numbers[currentIndex]}</strong>
            </div>
          ) : (
            <div>
              <p>記憶した数字の合計を入力してください:</p>
              <br/>
              <input
                type="number"
                value={userInput}
                onChange={handleInput}
                onKeyPress={(event) => {
                    if (event.key === 'Enter' && currentIndex >= numbers.length) {
                    checkAnswer();
                    }
                }}
                style={{ fontSize: '24px' }}
              />
              <br/><br/>
              <button onClick={checkAnswer}>答え合わせ</button>
              {result && (
                <div>
                  <br/>
                  <p>{result}</p>
                  <br/>
                  <button onClick={nextQuestion}>次の問題へ</button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    );
  };

  export default FlashMentalArithmetic;

