import React from 'react';

import step1 from '../assets/number-1.png'; 
import step2 from '../assets/number-2.png'; 
import step3 from '../assets/number-3.png'; 
import step4 from '../assets/number-4.png'; 
import step5 from '../assets/number-5.png'; 
import step6 from '../assets/number-6.png'; 
import step7 from '../assets/number-7.png'; 
import step8 from '../assets/number-8.png'; 

 export const InlineStep = ({ stepNumber }) => {
  const steps = {
    1: step1,
    2: step2,
    3: step3,
    4: step4,
    5: step5,
    6: step6,
    7: step7,
    8: step8,
  };

  return (
    <img 
      src={steps[stepNumber]} 
      alt={`Passo ${stepNumber}`} 
      style={{
        display: 'inline-block',
        width: '27px',
        height: '27px',
        verticalAlign: 'middle',
        marginRight: '8px',
        // marginTop: '5px',
      }}    
    />
  );
};