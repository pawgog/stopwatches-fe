import axios from 'axios';
const SERVER_URL = 'http://localhost:3000/api/stopwatches';

export const ADD_NEW_STOPWATCH_PENDING = 'ADD_NEW_STOPWATCH_PENDING';
export const ADD_NEW_STOPWATCH = 'ADD_NEW_STOPWATCH';
export const ADD_NEW_STOPWATCH_ERROR = 'ADD_NEW_STOPWATCH_ERROR';

export const ADD_TOGGLE_STOPWATCH_PENDING = 'ADD_TOGGLE_STOPWATCH_PENDING';
export const ADD_TOGGLE_STOPWATCH = 'ADD_TOGGLE_STOPWATCH';
export const ADD_TOGGLE_STOPWATCH_ERROR = 'ADD_TOGGLE_STOPWATCH_ERROR';

export const ADD_LAP_STOPWATCH_PENDING = 'ADD_LAP_STOPWATCH_PENDING';
export const ADD_LAP_STOPWATCH = 'ADD_LAP_STOPWATCH';
export const ADD_LAP_STOPWATCH_ERROR = 'ADD_LAP_STOPWATCH_ERROR';

export const RESET_STOPWATCH_PENDING = 'DELETE_STOPWATCH_PENDING';
export const RESET_STOPWATCH = 'DELETE_STOPWATCH';
export const RESET_STOPWATCH_ERROR = 'DELETE_STOPWATCH_ERROR';

export const DELETE_STOPWATCH_PENDING = 'DELETE_STOPWATCH_PENDING';
export const DELETE_STOPWATCH = 'DELETE_STOPWATCH';
export const DELETE_STOPWATCH_ERROR = 'DELETE_STOPWATCH_ERROR';

export const addNewStopwatch = () => async (dispatch) => {
    dispatch(addNewStopwatchPending());

    await axios.post(SERVER_URL, { "started": Date.now() })
    .then((res) => {
        if (res.status !== 200) throw new Error('Error');
        dispatch(addNewStopwatchSuccess(res));
    })
    .catch(({ message }) => {
        dispatch(addNewStopwatchError(message));
    })
};

export const addToggleStopwatch = (id) => async (dispatch) => {
    dispatch(addToggleStopwatchPending());

    await axios.post(`${SERVER_URL}/${id}/toggle`, { "time": Date.now() })
    .then(({ status, data }) => {
        if (status !== 200) throw new Error('Error');
        dispatch(addToggleStopwatchSuccess(data));
    })
    .catch(({ message }) => {
        console.log('addToggleStopwatch', message);
        dispatch(addToggleStopwatchError(message));
    })
};

export const addLapStopwatch = (id) => async (dispatch) => {
    dispatch(addLapStopwatchPending());

    await axios.post(`${SERVER_URL}/${id}/lap`, { "time": Date.now() })
    .then(({ status, data }) => {
        if (status !== 200) throw new Error('Error');
        dispatch(addLapStopwatchSuccess(data));
    })
    .catch(({ message }) => {
        dispatch(addLapStopwatchError(message));
    })
};

export const resetStopwatch = (id) => async (dispatch) => {
    dispatch(resetStopwatchPending());

    await axios.post(`${SERVER_URL}/${id}`, { "started": Date.now() })
    .then(({ status, data }) => {
        if (status !== 200) throw new Error('Error');
        console.log('resetStopwatch', data);
        dispatch(resetStopwatchSuccess(data));
    })
    .catch(({ message }) => {
        console.log('reset error', message);
        dispatch(resetStopwatchError(message));
    })
};

export const deleteStopwatch = (id) => async (dispatch) => {
    dispatch(deleteStopwatchPending());

    await axios.delete(`${SERVER_URL}/${id}`)
    .then(({ status }) => {
        if (status !== 200) throw new Error('Error');
        dispatch(deleteStopwatchSuccess(id));
    })
    .catch(({ message }) => {
        dispatch(deleteStopwatchError(message));
    })
};

function addNewStopwatchPending() {
    return {
        type: ADD_NEW_STOPWATCH_PENDING,
    };
}

function addNewStopwatchSuccess(stopwatch) {
    return {
        type: ADD_NEW_STOPWATCH,
        payload: stopwatch,
    };
}

function addNewStopwatchError(error) {
    return {
        type: ADD_NEW_STOPWATCH_ERROR,
        error,
    };
}

function addToggleStopwatchPending() {
    return {
        type: ADD_TOGGLE_STOPWATCH_PENDING,
    };
}

function addToggleStopwatchSuccess(payload) {
    return {
        type: ADD_TOGGLE_STOPWATCH,
        payload,
    };
}

function addToggleStopwatchError(error) {
    return {
        type: ADD_TOGGLE_STOPWATCH_ERROR,
        error,
    };
}

function addLapStopwatchPending() {
    return {
        type: ADD_LAP_STOPWATCH_PENDING,
    };
}

function addLapStopwatchSuccess(stopwatch) {
    return {
        type: ADD_LAP_STOPWATCH,
        payload: stopwatch,
    };
}

function addLapStopwatchError(error) {
    return {
        type: ADD_LAP_STOPWATCH_ERROR,
        error,
    };
}

function resetStopwatchPending() {
    return {
        type: RESET_STOPWATCH_PENDING,
    };
}

function resetStopwatchSuccess(payload) {
    return {
        type: RESET_STOPWATCH,
        payload,
    };
}

function resetStopwatchError(error) {
    return {
        type: RESET_STOPWATCH_ERROR,
        error,
    };
}

function deleteStopwatchPending() {
    return {
        type: DELETE_STOPWATCH_PENDING,
    };
}

function deleteStopwatchSuccess(id) {
    return {
        type: DELETE_STOPWATCH,
        payload: id,
    };
}

function deleteStopwatchError(error) {
    return {
        type: DELETE_STOPWATCH_ERROR,
        error,
    };
}
