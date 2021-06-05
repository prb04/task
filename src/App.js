import React from 'react'
import './App.css';
import Home from './components/Home';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import Header from './components/Header';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
        <div>
          <Header />
          <Home />
        </div>
    </Provider>
  );
}

export default App;
