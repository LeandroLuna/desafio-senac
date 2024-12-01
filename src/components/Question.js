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
      <h3>{data.text}</h3>
      <img src={data.image} alt="Ilustração da questão" />
      <div className="options">
        {data.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name="option"
              value={index}
              checked={selectedOption === index}
              onChange={() => setSelectedOption(index)}
            />
            {option}
          </label>
        ))}
      </div>
      {!showFeedback ? (
        <button onClick={handleSubmit}>Confirmar resposta</button>
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
