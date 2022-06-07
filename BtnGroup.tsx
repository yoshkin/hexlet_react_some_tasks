// @ts-check

import cn from 'classnames';
import React, { useState } from 'react';

const BtnGroup = () => {
  // BEGIN (write your solution here)
  const [activeButton, setActiveButton] = useState(null);

  const getClassName = (position) => cn('btn btn-secondary', position, { active: activeButton === position });

  return (
    <div className="btn-group" role="group">
      <button type="button" className={getClassName('left')} onClick={() => setActiveButton('left')}>Left</button>
      <button type="button" className={getClassName('right')} onClick={() => setActiveButton('right')}>Right</button>
    </div>
  );
  // END
};

export default BtnGroup;
