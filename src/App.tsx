import './App.css'
import List from './components/List'

function App() {
  const elements = [
    {id : 1, name : 'Teste', price : 100, isAvailable : true},
    {id : 2, name : 'Teste 2', price : 200, isAvailable : false},
    {id : 3, name : 'Teste 3', price : 300, isAvailable : true}
  ];

  return (
    <>
      <List items={elements} hideNotAvailable={true} />
    </>
  )
}

export default App
