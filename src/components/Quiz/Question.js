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
    if (selectedOption === null) {
      alert("Por favor, selecione uma opção antes de continuar.");
      return;
    }
    const isCorrect = selectedOption === data.correct;
    onAnswer(isCorrect);
    setShowFeedback(true);
  };

  return (
    <div className="question">
      <div className="question__panel">
        <div className="question__left-panel">
          <img
            className="question__image"
            src={data.image}
            alt="Ilustração da questão"
            aria-hidden="true"
          />
        </div>
        <div className="question__right-panel">
          <p className="question__text"><span>{data.id < 10 ? `0${data.id}` : data.id}</span> {data.text}</p>
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
          <button
            className="question__submit-button"
            onClick={handleSubmit}
            aria-label="Confirmar resposta"
          >
            Confirmar
          </button>
        </div>
      </div>
      {showFeedback && (
        <Feedback
          isCorrect={selectedOption === data.correct}
          onNext={onNext}
          nextButtonText={isLastQuestion ? 'Finalizar quiz' : 'Próximo'}
        />
      )}
    </div>
  );
};

export default Question;