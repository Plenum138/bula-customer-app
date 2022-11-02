import {createStore, combineReducers,applyMiddleware , compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';



const middleware = [ReduxThunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export default store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));