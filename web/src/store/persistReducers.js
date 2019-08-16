import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default rootReducer => {
  const persistConfig = {
    key: 'gobarber',
    storage,
    whitelist: ['auth', 'user'],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  return persistedReducer;
};
