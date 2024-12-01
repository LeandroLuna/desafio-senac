import React from 'react';

const SectionOne = () => {
  return (
    <div className="section-one">
      <div className="section__content">
        <div className="section__content-left">
          <img
              className="section__image"
              src='/assets/images/image2.jpg'
              alt="Imagem da seção 1"
              aria-hidden="true"
            />
          </div>
        <div className="section__content-right">
            <div>
              <h2>Exemplo de título de nível 2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ipsum convallis, gravida ante at, congue odio. Maecenas pulvina <span>exemplo de bold</span>, ac faucibus. Aliquam vel metus sollicitudin, viverra massa at.
              </p>
            </div>
            <div>
              <h3>Exemplo de título de nível 3</h3>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget <span>exemplo de bold</span>, gravida ante at, congue odio. Maecenas pulvinar id est ac faucibus. Aliquam vel metus sollicitudin, viverra mass
                </p>
              </div>
              <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ipsum convallis, gravida ante at, congue odio. Maecenas pulvinar id est ac faucibus. Aliquam vel metus sollicitudin, viverra.
                </p>
              </div>
            </div>
            <div>
              <h4>Exemplo de título de nível 4</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur <span>exemplo de bold</span>, elit. Etiam eget ipsum convallis, gravida ante at, congue odio. Maecenas <span>exemplo de bold</span>, id est ac faucibus. Aliquam vel metus sollicitudin, viverra.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;