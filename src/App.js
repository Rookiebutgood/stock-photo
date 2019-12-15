import React from 'react';
//import logo from './logo.svg';
import ImageList from './ImageList';

function App() {
  return (
    <div className="App">
      <header className='p-4 text-6xl'>
        <h1 className='inline-block w-3/4'>Stock image</h1>
      </header>
      <ImageList />
    </div>
  );
}

export default App;
