import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Feedback = ({ isCorrect, onNext, nextButtonText }) => (
  <>
    <div className="feedback">
      {isCorrect ? (
        <FaCheckCircle color="green" size={24} />
      ) : (
        <FaTimesCircle color="red" size={24} />
      )}
      <p>{isCorrect ? 'Correto!' : 'Errado!'}</p>
    </div>
    <button onClick={onNext}>{nextButtonText}</button>
  </>
);

export default Feedback;