import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchStopwatch } from '../redux/actions/fetchStopwatch';
import StopwatchTimer from './Timer/StopwatchTimer';
import { calculateAllTime } from '../utils/helper';

const StopwatchDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const onFetchStopwatch = useCallback(
        (id) => dispatch(fetchStopwatch(id)),
        [dispatch],
    );

    useEffect(() => {
        onFetchStopwatch(id)
    }, [id]);

    const stopwatchDetails = useSelector((state) => state.stopwatch);
    const { result } = stopwatchDetails.stopwatch
    const getCurrentTimer = calculateAllTime(result.toggles)

    return (
        <StopwatchTimer stopwatch={stopwatchDetails} getCurrentTimer={getCurrentTimer} />
    );
};

export default StopwatchDetails;
