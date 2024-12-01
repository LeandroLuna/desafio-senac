import React, { useState } from 'react';
import Question from './Question';

const questions = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet?',
    options: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'],
    correct: 0,
    image: '/assets/images/image1.jpg',
  },
  {
    id: 2,
    text: 'Consectetur adipiscing elit?',
    options: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'],
    correct: 1,
    image: '/assets/images/image2.jpg',
  },
  {
    id: 3,
    text: 'Sed do eiusmod tempor incididunt ut labore?',
    options: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'],
    correct: 2,
    image: '/assets/images/image3.jpg',
  },
  {
    id: 4,
    text: 'Et dolore magna aliqua?',
    options: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'],
    correct: 3,
    image: '/assets/images/image4.jpg',
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);
  };

  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="quiz">
      <h2>Quizz</h2>
      {currentQuestion < questions.length ? (
        <>
          <Question
            data={questions[currentQuestion]}
            onAnswer={handleAnswer}
            onNext={handleNext}
            isLastQuestion={isLastQuestion}
          />
          <div className="quiz__progress">
            <p>
              Acertos: {score < 10 ? `0${score}` : score} | Questão: {currentQuestion + 1} de {questions.length}
            </p>
          </div>
        </>
      ) : (
        <div className="quiz__results">
          <h2 className="quiz__results-title">Quiz finalizado!</h2>
          <p className="quiz__results-text">
            Você acertou {score} de {questions.length} questões.
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
