import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { fetchStopwatches } from '../redux/actions/fetchStopwatches';
import { addNewStopwatch } from '../redux/actions/actionsStopwatch';
import StopwatchesList from './StopwatchesList'
import Button from '../globalStyle/Button';
import { Dashboard } from './StopwatchesDashboard.styled';

const StopwatchesDashboard = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [page, setPage] = useState(2)
    const stopwatchesList = useSelector((state) => state.stopwatches);
    const requestCode = stopwatchesList.request.code;
    const totalPages = stopwatchesList.stopwatches.meta?.totalPages;

    useEffect(() => {
        requestCode === 200 && history.push(`/stopwatch/${stopwatchesList.request.id}`)
    }, [requestCode])

    const handleAddNewStopwatch = () => {
        dispatch(addNewStopwatch())
        dispatch(fetchStopwatches());
    };

    const fetchMoreStopwatches = () => {
        if (page <= totalPages) setPage(prevPage => prevPage + 1);
        dispatch(fetchStopwatches(page));
    };

    return (
        <Dashboard>
            <Button text="New" onClick={handleAddNewStopwatch} />
            <StopwatchesList />  
            <Button text="More" onClick={fetchMoreStopwatches} />     
        </Dashboard>
    );
};

export default StopwatchesDashboard;
