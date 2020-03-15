import { reducer } from './reducer.js'

const createStore = (reducer) => {
  let rootState = {};

  const listenersOnDispatch = []

  const getState = () => rootState;

  const subscribe = (listener) => {
    listenersOnDispatch.push(listener)

    const lengthOfListeners = listenersOnDispatch.length;

    return () => {
      const indexToDelete = listenersOnDispatch.indexOf(listener);
      if (index > -1) listenersOnDispatch.splice(indexToDelete, 1);
    }
  }

  const dispatch = (action) => {
    rootState = reducer(rootState, action)
    listenersOnDispatch.forEach((listener) => listener())
  }

  return {
    getState,
    subscribe,
    dispatch,
  };
}

export const store = createStore(reducer);
