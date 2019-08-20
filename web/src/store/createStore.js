import { createStore, applyMiddleware, compose } from 'redux';

export default (rootReducer, middlewares) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(
          applyMiddleware(...middlewares),
          console.tron.createEnhancer()
        )
      : applyMiddleware(...middlewares);

  return createStore(rootReducer, enhancer);
};
