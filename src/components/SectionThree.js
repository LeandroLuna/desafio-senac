import React from 'react';

const SectionThree = () => {
  return (
    <div className="section-three">
      <div className="section-three__image-container">
        <img
          className="section-three__image"
          src='/assets/images/image4.jpg'
          alt="Imagem 1 da seção 3"
          aria-hidden="true"
        />
      </div>
      <div className="section-three__image-container">
        <img
          className="section-three__image"
          src='/assets/images/image2.jpg'
          alt="Imagem 2 da seção 3"
          aria-hidden="true"
        />
      </div>
      <div className="section-three__image-container">
        <img
          className="section-three__image"
          src='/assets/images/image1.jpg'
          alt="Imagem 3 da seção 3"
          aria-hidden="true"
        />
      </div>
      <div className="section-three__image-container">
        <img
          className="section-three__image"
          src='/assets/images/image3.jpg'
          alt="Imagem 4 da seção 3"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default SectionThree;