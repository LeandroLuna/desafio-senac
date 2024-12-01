import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Feedback = ({ isCorrect, onNext, nextButtonText }) => (
  <>
    <div className="feedback">
      <div className="feedback__icon" aria-live="polite">
        {isCorrect ? (
          <FaCheckCircle color="green" size={24} aria-label="Resposta correta" />
        ) : (
          <FaTimesCircle color="red" size={24} aria-label="Resposta errada" />
        )}
      </div>
      <p className="feedback__text">
        {isCorrect ? 'Correto!' : 'Errado!'}
      </p>
    </div>
    <button
      className="feedback__next-button"
      onClick={onNext}
      aria-label={nextButtonText}
    >
      {nextButtonText}
    </button>
  </>
);

export default Feedback;
