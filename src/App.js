import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/productos' element={<ItemListContainer/>}/>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/item/:id' element={<ItemDetailContainer/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
