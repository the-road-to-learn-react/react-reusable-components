import React from 'react';

const App = () => {
  return (
    <div>
      <Button handleClick={() => console.log('Clicked button One!')}>
        Click Button One!
      </Button>
      <Button
        type="submit"
        handleClick={() => console.log('Clicked button Two!')}
      >
        Click Button Two!
      </Button>
    </div>
  );
};

const Button = ({ type = 'button', handleClick, children }) => {
  return (
    <button type={type} onClick={handleClick}>
      {children}
    </button>
  );
};

export default App;
