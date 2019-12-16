import { technologyReducer } from './technology/reducer';
import { tipsReducer } from './tips/reducer';
import { combineReducers, createStore } from 'redux';

export const store = createStore(combineReducers({ technologyReducer, tipsReducer }));
