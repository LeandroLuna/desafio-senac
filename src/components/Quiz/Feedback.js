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
      <div className="feedback__text">
        {isCorrect ? (
          <>
            <h4>Parabéns!</h4>
            <p>
              Aliquam vel metus sollicitudin, viverra massa at, convallis est.
            </p>
          </>
        )
        : (
          <>
            <h4>Que pena, você errou!</h4>
            <p>
              Quisque eget ultrices metus. Vestibulum ultricies lectus nulla, sit amet maxi mus neque bibendum id. Nulla elementum consequat dapibus.
            </p>
          </>
        )}
        <button
          className="feedback__next-button"
          onClick={onNext}
          aria-label={nextButtonText}
        >
        {nextButtonText}
        </button>
      </div>
    </div>
  </>
);

export default Feedback;
