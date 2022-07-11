import axios from 'axios';
const SERVER_URL = 'http://localhost:3000/api/stopwatches';

export const FETCH_STOPWATCH_PENDING = 'FETCH_STOPWATCH_PENDING';
export const FETCH_STOPWATCH_SUCCESS = 'FETCH_STOPWATCH_SUCCESS';
export const FETCH_STOPWATCH_ERROR = 'FETCH_STOPWATCH_ERROR';

export const fetchStopwatch = (id) => async (dispatch) => {
    dispatch(fetchStopwatchPending());

    await axios.get(`${SERVER_URL}/${id}`)
    .then(({ status, data }) => {
        if (status !== 200) throw new Error('Error');
        dispatch(fetchStopwatchSuccess(data));
    })
    .catch(({ message }) => {
        dispatch(fetchStopwatchError(message));
    });
};

function fetchStopwatchPending() {
    return {
        type: FETCH_STOPWATCH_PENDING,
    };
}

function fetchStopwatchSuccess(stopwatch) {
    return {
        type: FETCH_STOPWATCH_SUCCESS,
        payload: stopwatch,
    };
}

function fetchStopwatchError(error) {
    return {
        type: FETCH_STOPWATCH_ERROR,
        error,
    };
}
