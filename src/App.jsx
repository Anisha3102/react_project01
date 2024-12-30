import React from 'react'
import ListComponent from './Components/ListComponent';
import products from './utility/data';

const App = () => {
  return (
    <div className="flex flex-wrap bg-gray-900 h-screen">
      <ListComponent products={products} />
    </div>
  );
}

export default App
