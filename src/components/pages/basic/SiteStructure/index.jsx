import { useState } from 'react';

export const SiteStructure = () => {
  const [state, setState] = useState(0);

  const handleClick = () => {
    setState(state + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>click</button>
      <div>{state}</div>
    </div>
  );
};
