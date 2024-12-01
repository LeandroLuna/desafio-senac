import React, { useState, useEffect } from 'react';
import Feedback from './Feedback';

const Question = ({ data, onAnswer, onNext, isLastQuestion }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setShowFeedback(false);
  }, [data]);

  const handleSubmit = () => {
    if (selectedOption === null) return;
    const isCorrect = selectedOption === data.correct;
    onAnswer(isCorrect);
    setShowFeedback(true);
  };

  return (
    <div className="question">
      <h3 className="question__text">{data.text}</h3>
      <img
        className="question__image"
        src={data.image}
        alt="Ilustração da questão"
        aria-hidden="true"
      />
      <div className="question__options">
        {data.options.map((option, index) => (
          <label className="question__option" key={index}>
            <input
              type="radio"
              name="option"
              value={index}
              checked={selectedOption === index}
              onChange={() => setSelectedOption(index)}
              className="question__input"
              aria-checked={selectedOption === index}
            />
            {option}
          </label>
        ))}
      </div>
      {!showFeedback ? (
        <button
          className="question__submit-button"
          onClick={handleSubmit}
          aria-label="Confirmar resposta"
        >
          Confirmar resposta
        </button>
      ) : (
        <Feedback
          isCorrect={selectedOption === data.correct}
          onNext={onNext}
          nextButtonText={isLastQuestion ? 'Finalizar quiz' : 'Próxima pergunta'}
        />
      )}
    </div>
  );
};

export default Question;