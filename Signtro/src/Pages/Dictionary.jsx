import React from 'react';
import './Dictionary.css';
import { useNavigate } from 'react-router-dom';
import letterA from '../assets/A.png'
import letterB from '../assets/B.png'
import letterC from '../assets/C.png'
import letterD from '../assets/D.png'
import letterE from '../assets/E.png'
import letterF from '../assets/F.png'
import letterG from '../assets/G.png'
import letterH from '../assets/H.png'
import letterI from '../assets/I.png'
import letterJ from '../assets/J.png'
import letterK from '../assets/K.png'
import letterL from '../assets/L.png'
import letterM from '../assets/M.png'
import letterN from '../assets/N.png'
import letterO from '../assets/O.png'
import letterP from '../assets/P.png'
import letterQ from '../assets/Q.png'
import letterR from '../assets/R.png'
import letterS from '../assets/S.png'
import letterT from '../assets/T.png'
import letterU from '../assets/U.png'
import letterV from '../assets/V.png'
import letterW from '../assets/W.png'
import letterX from '../assets/X.png'
import letterY from '../assets/Y.png'
import letterZ from '../assets/Z.png'

const signLanguageData = [
  { letter: 'A', image: letterA },
  { letter: 'B', image: letterB },
  { letter: 'C', image: letterC },
  { letter: 'D', image: letterD },
  { letter: 'E', image: letterE },
  { letter: 'F', image: letterF },
  { letter: 'G', image: letterG },
  { letter: 'H', image: letterH },
  { letter: 'I', image: letterI },
  { letter: 'J', image: letterJ },
  { letter: 'K', image: letterK },
  { letter: 'L', image: letterL },
  { letter: 'M', image: letterM },
  { letter: 'N', image: letterN },
  { letter: 'O', image: letterO },
  { letter: 'P', image: letterP },
  { letter: 'Q', image: letterQ },
  { letter: 'R', image: letterR },
  { letter: 'S', image: letterS },
  { letter: 'T', image: letterT },
  { letter: 'U', image: letterU },
  { letter: 'V', image: letterV },
  { letter: 'W', image: letterW },
  { letter: 'X', image: letterX },
  { letter: 'Y', image: letterY },
  { letter: 'Z', image: letterZ },
];

export default function Dictionary() {
  const navigate = useNavigate();
  return (
    <div className="dictionary-container">
      {/* Button to navigate to a different page */}
      <div className="button-container">
        <button 
          className="navigate-button" 
          onClick={() => navigate('/DictionaryCamera')}
        >
          Try it yourself !
        </button>
      </div>
      {/* Render sign language cards */}
      {signLanguageData.map((item, index) => (
        <div className="card" key={index}>
          <div className="letter-overlay">{item.letter}</div>
          <img src={item.image} alt={`Sign language for ${item.letter}`} className="sign-image" />
        </div>
      ))}
    </div>
  );
}
