import { Fragment } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Meals from './component/Meals/Meals';
import Cart from './component/Cart/Cart';


function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
 