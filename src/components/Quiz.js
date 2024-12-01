import React, { useState } from 'react';
import Question from './Question';

const questions = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet?',
    options: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'],
    correct: 0,
    image: '/assets/images/question1.jpg',
  },
  {
    id: 2,
    text: 'Consectetur adipiscing elit?',
    options: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'],
    correct: 1,
    image: '/assets/images/question2.jpg',
  },
  {
    id: 3,
    text: 'Sed do eiusmod tempor incididunt ut labore?',
    options: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'],
    correct: 2,
    image: '/assets/images/question3.jpg',
  },
  {
    id: 4,
    text: 'Et dolore magna aliqua?',
    options: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'],
    correct: 3,
    image: '/assets/images/question4.jpg',
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
      {currentQuestion < questions.length ? (
        <Question
          data={questions[currentQuestion]}
          onAnswer={handleAnswer}
          onNext={handleNext}
          isLastQuestion={isLastQuestion}
        />
      ) : (
        <div className="results">
          <h2>Quiz finalizado!</h2>
          <p>Você acertou {score} de {questions.length} questões.</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;