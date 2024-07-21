import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import CartCard from './Component/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <h1 className="site">Mobiles Shopping site</h1>
      <div className="container my-5">
        <CartCard />
      </div>
    </Provider>
  );
}

export default App;
