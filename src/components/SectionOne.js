import React from 'react';

const SectionOne = () => {
  return (
    <div className="section-one">
      <div className="section-one__content">
        <div className="section-one__content-left">
          <img
              className="section-one__image"
              src='/assets/images/image2.jpg'
              alt="Imagem da seção 1"
              aria-hidden="true"
            />
          </div>
        <div className="section-one__content-right">
            <div>
              <h2 className="section-one__secondary-title">Exemplo de título de nível 2</h2>
              <p className="section-one__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ipsum convallis, gravida ante at, congue odio. Maecenas pulvina <span className="section_one--bold">exemplo de bold</span>, ac faucibus. Aliquam vel metus sollicitudin, viverra massa at.
              </p>
            </div>
            <div>
              <h3 className="section-one__tertiary-title">Exemplo de título de nível 3</h3>
              <div className="section_one__two-columns">
                <p className="section-one__text section-one__column-one">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget <span className="section_one--bold">exemplo de bold</span>, gravida ante at, congue odio. Maecenas pulvinar id est ac faucibus. Aliquam vel metus sollicitudin, viverra mass
                </p>
                <p className="section-one__text section-one__column-two">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ipsum convallis, gravida ante at, congue odio. Maecenas pulvinar id est ac faucibus. Aliquam vel metus sollicitudin, viverra.
                </p>
              </div>
            </div>
            <div>
              <h4 className="section-one__quarternary-title">Exemplo de título de nível 4</h4>
              <p className="section-one__text">
                Lorem ipsum dolor sit amet, consectetur <span className="section_one--bold">exemplo de bold</span>, elit. Etiam eget ipsum convallis, gravida ante at, congue odio. Maecenas <span className="section_one--bold">exemplo de bold</span>, id est ac faucibus. Aliquam vel metus sollicitudin, viverra.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;