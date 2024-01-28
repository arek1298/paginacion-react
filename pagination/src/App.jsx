import { useState } from 'react'
import { Pagination } from './components/Pagination';
import { ProductList } from './components/ProductList';



function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='App'>
      <h1>FakeStore</h1>
     

      <ProductList />
    </div>
  );
}

export default App;