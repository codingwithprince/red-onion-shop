import { createStore, applyMiddleware  } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers/rooReducer';
import logger from 'redux-logger'

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger),
    ))