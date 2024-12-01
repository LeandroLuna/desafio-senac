import React from 'react';
import Quiz from '../components/Quiz/Quiz';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import SectionFour from '../components/SectionFour';

const ModulePage = () => {
  return (
    <div className="module-page container">
      <h1><span>Módulo 01</span> | Exemplo de subtítulo</h1>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Quiz />
    </div>
  );
};

export default ModulePage;