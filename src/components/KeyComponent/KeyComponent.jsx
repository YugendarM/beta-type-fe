import React from 'react';

const KeyComponent = ({group, keyLabel}) => {

    const colorClasses = {
        red: 'text-betatypeKeyRedShadow bg-betatypeKeyRed shadow-keyRed border-2 border-betatypeKeyRedShadow',
        blue: 'text-betatypeKeyBlueShadow bg-betatypeKeyBlue shadow-keyBlue border-2 border-betatypeKeyBlueShadow',
        green: 'text-betatypeKeyGreenShadow bg-betatypeKeyGreen shadow-keyGreen border-2 border-betatypeKeyGreenShadow',
        purple: 'text-betatypeKeyPurpleShadow bg-betatypeKeyPurple shadow-keyPurple border-2 border-betatypeKeyPurpleShadow',
      };
    
      const classes = colorClasses[group] || '';

  return (
   <div className='inline-block mx-0.5 md:mx-1'>
    <p className={`h-10 w-10 font-medium flex items-center justify-center rounded-lg shadow ${classes} inline-block`}>
      {keyLabel}
    </p>
   </div>
  );
};

export default KeyComponent;
