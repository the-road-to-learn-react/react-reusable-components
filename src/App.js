import React from 'react';

const App = () => {
  const handleClick = () => console.log('Clicked!');

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Click me!
      </button>
    </div>
  );
};

export default App;
