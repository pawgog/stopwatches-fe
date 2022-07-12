import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { addToggleStopwatch, addLapStopwatch, resetStopwatch, deleteStopwatch } from '../../redux/actions/actionsStopwatch';
import StopwatchTimeTopPanel from './StopwatchTimeTopPanel';
import StopwatchLaps from './StopwatchLaps';
import Button from '../../globalStyle/Button';
import Error from '../../globalStyle/Error';
import Spinner from '../../globalStyle/Spinner';
import { Timer, ButtonBoard } from './StopwatchTimer.styled';
import { convertMilliseconds } from '../../utils/helper';

const StopwatchTimer = ({ stopwatch, getCurrentTimer }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [time, setTime] = useState(0);

    const { stopwatch: stopwatchDetails, error, isFetching, isFetchingToggle, isFetchingLap } = stopwatch;
    const { __id: id, toggles, laps } = stopwatchDetails.result;
    const togglesLength = toggles.length;

    useMemo(() => {
        if (!isFetching && (time !== 0 || togglesLength === 1)) {
            if (togglesLength % 2 !== 0) setIsTimerActive(true);
            if (togglesLength % 2 === 0) setIsTimerActive(false);
        }
        if (error) setIsTimerActive(!isTimerActive);
    }, [time, error, isFetching, togglesLength]);

    useEffect(() => {
        setTime(getCurrentTimer);
    }, [getCurrentTimer]);

    useEffect(() => {
        let interval = null;
    
        if (isTimerActive) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isTimerActive, time]);

    const backToStopwatchesList = () => {
        history.push('/');
    };

    const handleStartStop = () => {
        dispatch(addToggleStopwatch(id))
        .then(() => setIsTimerActive(!isTimerActive));
    };

    const handleAddLap = () => {
        if (isTimerActive && time !== 0) dispatch(addLapStopwatch(id));
    };

    const handleResetStopwatch = () => {
        dispatch(resetStopwatch(id))
        .then(() => !error && setTime(0));
    };

    const handleDeleteStopwatch = () => {
        dispatch(deleteStopwatch(id))
        .then(() => (!isFetching) && history.push('/'));
    };

    const stopwatchLapsComponent = useMemo(()=>{
        return (
            <StopwatchLaps isFetchingLap={isFetchingLap} laps={laps} toggles={toggles} />
    )}, [isFetchingLap, laps, toggles]);

    return (
        error && !isFetching 
            ? (
                <Error>
                    <h2>
                        {error}
                    </h2>
                </Error>
            ) : (
        isFetching
            ? <Spinner />
            : (
                <>
                    <StopwatchTimeTopPanel
                        backToStopwatchesList={backToStopwatchesList}
                        handleDeleteStopwatch={handleDeleteStopwatch}
                        id={id}
                    />
                    <Timer>{convertMilliseconds(time)}</Timer>
                    <ButtonBoard>
                        <Button text="Lap" onClick={handleAddLap} />
                        <Button text="Reset" onClick={handleResetStopwatch} />
                        {isFetchingToggle
                            ? <Spinner />
                            : (isTimerActive
                                ? <Button warning text="Stop" onClick={handleStartStop} />
                                : <Button green text="Start" onClick={handleStartStop} />
                            )
                        }
                    </ButtonBoard>
                    {stopwatchLapsComponent}
                </>
            )
        )
    );
};

export default StopwatchTimer;
