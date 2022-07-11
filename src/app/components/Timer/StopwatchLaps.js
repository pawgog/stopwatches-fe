import React from 'react';
import Spinner from '../../globalStyle/Spinner';
import { LapsListStyled, LapMaxValue, LapMinValue } from './StopwatchLaps.styled';
import { convertMilliseconds, calculateLap } from '../../utils/helper';

const StopwatchLaps = ({ isFetchingLap, laps, toggles }) => {
    const calculateLapTime = laps.map((_lap, index) => (calculateLap(toggles, laps, index)));
    let calculateLapTimeMax = 0
    let calculateLapTimeMin = 0
    if (laps.length >= 3) {
        calculateLapTimeMax = Math.max(...calculateLapTime)
        calculateLapTimeMin = Math.min(...calculateLapTime)        
    }

    return (
        isFetchingLap
            ? <Spinner />
            : (calculateLapTime.map((lap, index) => (
                <LapsListStyled key={lap}>
                    <h2>Lap {index + 1}</h2>
                    <h2>
                        {lap !== calculateLapTimeMax && lap !== calculateLapTimeMin && convertMilliseconds(lap)}
                        {lap === calculateLapTimeMax && <LapMaxValue>{convertMilliseconds(lap)}</LapMaxValue>}
                        {lap === calculateLapTimeMin && <LapMinValue>{convertMilliseconds(lap)}</LapMinValue>}
                    </h2>
                </LapsListStyled>
            )
        )).reverse()
    );
};

export default StopwatchLaps;
