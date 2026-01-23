import './App.css'
import Product from './types/Product';

import ProductList from './components/Catalog/Product/ProductList';

function App() {
  const elements = [
    new Product(1, 100, 'Teste', true),
    new Product(2, 200, 'Teste 2', false),
    new Product(3, 300, 'Teste 3', true)
  ];

  return (
    <>
      <ProductList products={elements} />
    </>
  )
}

export default App
