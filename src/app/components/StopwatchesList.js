import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStopwatches } from '../redux/actions/fetchStopwatches';
import Stopwatch from './Stopwatch';
import Error from '../globalStyle/Error';
import Spinner from '../globalStyle/Spinner';
import { StopwatchesListStyled } from './StopwatchList.styled';

const StopwatchesList = () => {
    const dispatch = useDispatch();

    const onFetchStopwatches = useCallback(
        () => dispatch(fetchStopwatches()),
        [dispatch],
    );

    useEffect(() => {
        onFetchStopwatches();
    }, [dispatch]);

    const stopwatchesList = useSelector((state) => state.stopwatches);
    const { stopwatches, isFetching, error } = stopwatchesList;

    return (
        <>
            {error && !isFetching 
                ? (
                    <Error>
                        <h2>
                            {error}
                        </h2>
                    </Error>
                ) : (
            isFetching
                ? (
                    <Spinner />
                ) : (stopwatches.result.map((stopwatches) => (
                        <StopwatchesListStyled key={stopwatches.__id}>
                            <Stopwatch stopwatches={stopwatches} />
                        </StopwatchesListStyled>
                )))               
            )}
        </>
    );
};

export default StopwatchesList;
