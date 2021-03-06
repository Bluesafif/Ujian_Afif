import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import AllReducers from "./index";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, AllReducers) // create a persisted reducer

const store = createStore(
    persistedReducer,
    applyMiddleware()
)

const persistor = persistStore(store)

export{store, persistor}