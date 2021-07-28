import { createStore, applyMiddleware } from 'redux'; //Instalamos redux para traernos createStore
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/root.reducer'; 
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
//Lo conectamos a la app por medio del store
export default store;
