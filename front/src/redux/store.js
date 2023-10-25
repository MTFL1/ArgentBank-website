import { createStore } from 'redux';
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
 import storage from 'redux-persist/lib/storage';

 const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


 const persistConfig = {
    key: 'root', // Clé de persistance
    storage,
 };



const persistedReducer = persistReducer(persistConfig, rootReducer); //

const store = createStore(persistedReducer, reduxDevtools);
 const persistor = persistStore(store);


 export { store, persistor }; 