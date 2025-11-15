import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './style/main.css';

import { Provider } from 'react-redux';
import store from './redux/store';

localStorage.removeItem('token'); //nettoyage du token (tests des données user et évite les boucles de redirection)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)