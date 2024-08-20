import React from 'react';

const KeyComponent = ({ group, keyLabel, nextKey }) => {
  const colorClasses = {
    red: 'text-betatypeKeyRedShadow bg-betatypeKeyRed border-betatypeKeyRedShadow',
    blue: 'text-betatypeKeyBlueShadow bg-betatypeKeyBlue border-betatypeKeyBlueShadow',
    green: 'text-betatypeKeyGreenShadow bg-betatypeKeyGreen border-betatypeKeyGreenShadow',
    purple: 'text-betatypeKeyPurpleShadow bg-betatypeKeyPurple border-betatypeKeyPurpleShadow',
    yellow: 'text-betatypeKeyYellowShadow bg-betatypeKeyYellow border-betatypeKeyYellowShadow',
    orange: 'text-betatypeKeyOrangeShadow bg-betatypeKeyOrange border-betatypeKeyOrangeShadow',
    gray: 'text-gray-600 bg-gray-300 border-gray-600',
  };

  const shadowClasses = {
    red: 'shadow-keyRed',
    blue: 'shadow-keyBlue',
    green: 'shadow-keyGreen',
    purple: 'shadow-keyPurple',
    yellow: 'shadow-keyYellow',
    orange: 'shadow-keyOrange',
    gray: 'shadow-keyGray',
  };

  const widthClasses = {
    TAB: 'w-16',
    '<-': 'w-16', // Assuming this is for the Backspace key
    SHIFT: 'w-24',
    CAPS: 'w-20',
    ENTER: 'w-20',
    '\u00A0': 'w-96', // Non-breaking space for the spacebar
    default: 'w-10',
  };

  const baseClasses = colorClasses[group] || '';
  const dynamicShadowClass = nextKey && nextKey.toUpperCase() === keyLabel ? shadowClasses[group] : '';
  const widthClass = widthClasses[keyLabel] || widthClasses.default;

  const classes = `${baseClasses} ${dynamicShadowClass} ${widthClass}`;

  return (
    <div className='inline-block mx-0.5 md:mx-0.5 my-0.5'>
      <p
        className={`h-10 font-medium flex items-center justify-center rounded-lg ${classes} inline-block
        ${nextKey && nextKey.toUpperCase() === keyLabel ? 'border-2' : ''}`}
      >
        {keyLabel}
      </p>
    </div>
  );
};

export default KeyComponent;
