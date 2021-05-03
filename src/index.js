import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import { createStore, applyMiddleware } from "redux";
import {logger} from "redux-logger/src";
import theme from "./theme";

const store = createStore(rootReducer, applyMiddleware(logger))

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider theme={theme} resetCSS>
          <Provider store={store}>
              <App />
          </Provider>
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
