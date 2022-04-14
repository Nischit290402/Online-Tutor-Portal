import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { UsersProvider } from "./pages/messages/context/usersContext";
import { SocketProvider } from "./pages/messages/context/socketContext";
import "./assets/css/common.css"
import { reducers } from './reducers';

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <SocketProvider>
      <UsersProvider>
        <App />
      </UsersProvider>
    </SocketProvider>
  </Provider>,
  document.getElementById('root'),
);