import {combineReducers, createStore } from 'redux';
import {counterReducer} from '../Components/counter/reducer'


export default function configureStore(){

    const reducers = {
        counter:counterReducer
    };

    const rootReducer = combineReducers({
        ...reducers //спред оператор
    });

    return createStore(rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
