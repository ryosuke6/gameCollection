"use client";
import { useState,useEffect} from 'react';
import styles from '../page.module.css';

export default function MemoryGame() {
    const cards = [
        { id: 1, image: '../images/Card1.png' },
        { id: 2, image: '../images/Card2.png' },
        { id: 3, image: '../images/Card3.png' },
        { id: 4, image: '../images/Card4.png' },
        { id: 5, image: '../images/Card5.png' },
        { id: 6, image: '../images/Card6.png' },
        { id: 7, image: '../images/Card7.png' },
        { id: 8, image: '../images/Card8.png' },
        { id: 9, image: '../images/Card9.png' },
    ];

    const [shuffledCards, setShuffledCards] = useState([...cards, ...cards]);

    const [selectedCards, setSelectedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [isChecking, setIsChecking] = useState(false);

    useEffect(() => {
        setShuffledCards(prev => [...prev].sort(() => Math.random() - 0.5));
    }, []);

    const handleCardClick = (index, card) => {
        if (isChecking || selectedCards.length === 2 || matchedCards.includes(card.id) || selectedCards.some(selectedCard => selectedCard.index === index)) return;

        setSelectedCards([...selectedCards, { index, card }]);

        if (selectedCards.length === 1) {
            setIsChecking(true);
            setTimeout(() => {
                if (selectedCards[0].card.id === card.id && selectedCards[0].index !== index) {
                    setMatchedCards([...matchedCards, card.id]);
                }
                setSelectedCards([]);
                setIsChecking(false);
            }, 1000);
        }
    };

    const resetGame = () => {
        console.log("resetGame has been called");  // このログが表示されるか確認
        setSelectedCards([]);
        setMatchedCards([]);
        setShuffledCards([...cards, ...cards].sort(() => Math.random() - 0.5));
    };


    return (
        <main className={styles.main}>
            <div className={styles.MemoryGameCardList}>
                {shuffledCards.map((card, index) => {
                    const isSelected = selectedCards.some(selectedCard => selectedCard.index === index);
                    const isMatched = matchedCards.includes(card.id);

                    return (
                        <div key={index} onClick={() => handleCardClick(index, card)} >
                            {isSelected || isMatched ?
                                <img src={card.image} alt={`Card ${card.id}`}  className={styles.MemoryGameCard}/> :
                                <img src='../images/MemoryGameBackImage.png' alt='カードの背面' className={styles.MemoryGameCard} />
                            }
                        </div>
                    );
                })}
            </div>
            {matchedCards.length === cards.length && <p>ゲームクリア！</p>}
            <button onClick={resetGame}>リセット</button>
        </main>
    );
}

