import {
    FETCH_STOPWATCH_PENDING,
    FETCH_STOPWATCH_SUCCESS,
    FETCH_STOPWATCH_ERROR,
} from '../actions/fetchStopwatch';

import {
    ADD_TOGGLE_STOPWATCH_PENDING,
    ADD_TOGGLE_STOPWATCH,
    ADD_TOGGLE_STOPWATCH_ERROR,
    ADD_LAP_STOPWATCH_PENDING,
    ADD_LAP_STOPWATCH,
    ADD_LAP_STOPWATCH_ERROR,
    RESET_STOPWATCH_PENDING,
    RESET_STOPWATCH,
    RESET_STOPWATCH_ERROR,
} from '../actions/actionsStopwatch';
  
const initialState = {
    isFetching: false,
    isFetchingToggle: false,
    isFetchingLap: false,
    stopwatch: {
        meta: {
            currentPage: 1,
            totalPages: 1
        },
        result: {
            laps: [0],
            started: 0,
            toggles: [0],
            __id: 1
        }
    },
    error: null,
};
  
export default function stopwatch(state = initialState, { type, payload, error }) {
    switch (type) {
        case FETCH_STOPWATCH_PENDING:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case FETCH_STOPWATCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                stopwatch: payload,
                error: null,
            };
        case FETCH_STOPWATCH_ERROR:
            return {
                ...state,
                isFetching: false,
                error,
            };
        case ADD_TOGGLE_STOPWATCH_PENDING:
            return {
                ...state,
                isFetching: false,
                isFetchingToggle: true,
                error: null,
            };
        case ADD_TOGGLE_STOPWATCH:
            return {
                ...state,
                isFetching: false,
                isFetchingToggle: false,
                stopwatch: payload,
                error: null,
            };
        case ADD_TOGGLE_STOPWATCH_ERROR:
            return {
                ...state,
                isFetching: false,
                isFetchingToggle: false,
                error,
            };
        case ADD_LAP_STOPWATCH_PENDING:
            return {
                ...state,
                isFetching: false,
                isFetchingLap: true,
                error: null,
            };
        case ADD_LAP_STOPWATCH:
            return {
                ...state,
                isFetching: false,
                isFetchingLap: false,
                stopwatch: payload,
                error: null,
            };
        case ADD_LAP_STOPWATCH_ERROR:
            return {
                ...state,
                isFetching: false,
                isFetchingLap: false,
                error,
            };
        case RESET_STOPWATCH_PENDING:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case RESET_STOPWATCH:
            return {
                ...state,
                stopwatch: payload,
                isFetching: false,
                error: null,
            };
        case RESET_STOPWATCH_ERROR:
            return {
                ...state,
                isFetching: false,
                error,
            };
        default:
            return state;
    };
};
