// CardComponent.js
import styles from '../page.module.css';

function CardComponent({ card, index, isSelected, isMatched, handleCardClick }) {
    return (
        <div key={index} onClick={() => handleCardClick(index, card)}>
            {isSelected || isMatched ?
                <img src={card.image} alt={`Card ${card.id}`} /> :
                <img src='images/MemoryGameBackImage.png' alt='カードの背面' />
            }
        </div>
    );
}

export default CardComponent;
