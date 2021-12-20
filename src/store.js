import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

const middleware = [thunk];
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const CreateStore = () => {
    let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));
    let persistor = persistStore(store)
    return { store, persistor }
}

export default CreateStore;
