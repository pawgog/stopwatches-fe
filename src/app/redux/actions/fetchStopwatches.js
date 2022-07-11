import axios from 'axios';
const SERVER_URL = 'http://localhost:3000/api/stopwatches';

export const FETCH_STOPWATCHES_PENDING = 'FETCH_STOPWATCHES_PENDING';
export const FETCH_STOPWATCHES_SUCCESS = 'FETCH_STOPWATCHES_SUCCESS';
export const FETCH_STOPWATCHES_ERROR = 'FETCH_STOPWATCHES_ERROR';

export const fetchStopwatches = (page = 1) => async (dispatch) => {
    dispatch(fetchStopwatchesPending());

    await axios.get(`${SERVER_URL}?page=${page}`)
    .then(({ status, data }) => {
        if (status !== 200) throw new Error('Error');
        dispatch(fetchStopwatchesSuccess(data));
    })
    .catch(({ message }) => {
        dispatch(fetchStopwatchesError(message));
    });
};

function fetchStopwatchesPending() {
    return {
        type: FETCH_STOPWATCHES_PENDING,
    };
}

function fetchStopwatchesSuccess(stopwatches) {
    return {
        type: FETCH_STOPWATCHES_SUCCESS,
        payload: stopwatches,
    };
}

function fetchStopwatchesError(error) {
    return {
        type: FETCH_STOPWATCHES_ERROR,
        error,
    };
}
