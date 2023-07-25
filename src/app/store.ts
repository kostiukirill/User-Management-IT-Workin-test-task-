import {combineReducers} from '@reduxjs/toolkit';
import {createStore} from 'redux'
import { userRedusers, usersReducers } from './reducer';


const rootReducers = combineReducers({userRedusers, usersReducers})

export const store = createStore(
  rootReducers,
  (localStorage['users-store'])?
  JSON.parse(localStorage['users-store']):
  {}
)

store.subscribe(() => {
  localStorage['users-store'] = JSON.stringify(store.getState())
});

