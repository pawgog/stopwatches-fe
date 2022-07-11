import {
    FETCH_STOPWATCHES_PENDING,
    FETCH_STOPWATCHES_SUCCESS,
    FETCH_STOPWATCHES_ERROR,
} from '../actions/fetchStopwatches';
import {
    ADD_NEW_STOPWATCH_PENDING,
    ADD_NEW_STOPWATCH,
    ADD_NEW_STOPWATCH_ERROR,
    DELETE_STOPWATCH_PENDING,
    DELETE_STOPWATCH,
    DELETE_STOPWATCH_ERROR,
} from '../actions/actionsStopwatch';
  
const initialState = {
    isFetching: false,
    stopwatches: {
        meta: {
            currentPage: 1,
            totalPages: 1
        },
        result: [
            {
            laps: [0],
            started: 0,
            toggles: [0],
            __id: 1
            }
        ]
    },
    request: {
        code: 0,
        id: 0
    },
    error: null,
};
  
export default function stopwatches(state = initialState, { type, payload, error }) {
    switch (type) {
        case FETCH_STOPWATCHES_PENDING:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case FETCH_STOPWATCHES_SUCCESS:
            return {
                ...state,
                stopwatches: payload,
                isFetching: false,
                error: null,
            };
        case FETCH_STOPWATCHES_ERROR:
            return {
                ...state,
                isFetching: false,
                error,
            };
        case ADD_NEW_STOPWATCH_PENDING:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case ADD_NEW_STOPWATCH:
            return {
                ...state,
                stopwatches: {
                    result: [...state.stopwatches.result, payload.data],
                },
                request: {
                    code: payload.status,
                    id: payload.data.__id
                },
                isFetching: false,
                error: null,
            };
        case ADD_NEW_STOPWATCH_ERROR:
            return {
                ...state,
                isFetching: false,
                error,
            };
        case DELETE_STOPWATCH_PENDING:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case DELETE_STOPWATCH:
            return {
                ...state,
                stopwatches:  {
                    result: state.stopwatches.result.filter((stopwatch) => stopwatch.__id !== payload),
                },
                isFetching: false,
                error: null,
            };
        case DELETE_STOPWATCH_ERROR:
            return {
                ...state,
                isFetching: false,
                error,
            };
        default:
            return state;
    };
};
