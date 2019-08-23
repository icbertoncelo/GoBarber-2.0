import { createStore, compose, applyMiddleware } from 'redux';

export default (rootReducer, middlewares) => {
  const enhancer = __DEV__
    ? compose(
        applyMiddleware(...middlewares),
        console.tron.createEnhancer()
      )
    : applyMiddleware(...middlewares);

  return createStore(rootReducer, enhancer);
};
