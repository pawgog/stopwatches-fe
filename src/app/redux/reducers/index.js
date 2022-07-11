import { combineReducers } from 'redux';
import stopwatch from './stopwatch';
import stopwatches from './stopwatches';

const rootReducer = combineReducers({
    stopwatch,
    stopwatches,
});

export default rootReducer;
