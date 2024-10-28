import React from 'react';
import './Dictionary.css';

const Dictionary = () => {
  const signs = [
    { letter: 'A', imgSrc: './src/assets/A.png' },
    { letter: 'B', imgSrc: './src/assets/B.png' },
    { letter: 'C', imgSrc: './src/assets/C.png' },
    { letter: 'D', imgSrc: './src/assets/D.png' },
    { letter: 'E', imgSrc: './src/assets/E.png' },
    { letter: 'F', imgSrc: './src/assets/F.png' },
    { letter: 'G', imgSrc: './src/assets/G.png' },
    { letter: 'H', imgSrc: './src/assets/H.png' },
    { letter: 'I', imgSrc: './src/assets/I.png' },
    { letter: 'J', imgSrc: './src/assets/J.png' },
    { letter: 'K', imgSrc: './src/assets/K.png' },
    { letter: 'L', imgSrc: './src/assets/L.png' },
    { letter: 'M', imgSrc: './src/assets/M.png' },
    { letter: 'N', imgSrc: './src/assets/N.png' },
    { letter: 'O', imgSrc: './src/assets/O.png' },
    { letter: 'P', imgSrc: './src/assets/P.png' },
    { letter: 'Q', imgSrc: './src/assets/Q.png' },
    { letter: 'R', imgSrc: './src/assets/R.png' },
    { letter: 'S', imgSrc: './src/assets/S.png' },
    { letter: 'T', imgSrc: './src/assets/T.png' },
    { letter: 'U', imgSrc: './src/assets/U.png' },
    { letter: 'V', imgSrc: './src/assets/V.png' },
    { letter: 'W', imgSrc: './src/assets/W.png' },
    { letter: 'X', imgSrc: './src/assets/X.png' },
    { letter: 'Y', imgSrc: './src/assets/Y.png' },
    { letter: 'Z', imgSrc: './src/assets/Z.png' }
  ];

  return (
    <>
    <div className='alignment'>
      <div className="dictionary-container">
        <h1>Dictionary</h1>
        <div className="dictionary-grid">
          {signs.map((sign, index) => (
            <div key={index} className="dictionary-item">
              <h2>{sign.letter}</h2>
              <img src={sign.imgSrc} alt={`Sign for ${sign.letter}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Dictionary;
