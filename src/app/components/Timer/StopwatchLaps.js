import React from 'react';
import Spinner from '../../globalStyle/Spinner';
import { LapsListStyled, LapMaxValue, LapMinValue } from './StopwatchLaps.styled';
import { convertMilliseconds, calculateLap } from '../../utils/helper';

const StopwatchLaps = ({ isFetchingLap, laps, toggles }) => {
    const lapsTimeArray = laps.map((_lap, index) => (calculateLap(toggles, laps, index)));
    let lapTimeMax = 0
    let lapTimeMin = 0
    if (laps.length >= 3) {
        lapTimeMax = Math.max(...lapsTimeArray)
        lapTimeMin = Math.min(...lapsTimeArray)        
    }

    return (
        isFetchingLap
            ? <Spinner />
            : (lapsTimeArray.map((lap, index) => (
                <LapsListStyled key={lap}>
                    <h2>Lap {index + 1}</h2>
                    <h2>
                        {lap !== lapTimeMax && lap !== lapTimeMin && convertMilliseconds(lap)}
                        {lap === lapTimeMax && <LapMaxValue>{convertMilliseconds(lap)}</LapMaxValue>}
                        {lap === lapTimeMin && <LapMinValue>{convertMilliseconds(lap)}</LapMinValue>}
                    </h2>
                </LapsListStyled>
            )
        )).reverse()
    );
};

export default StopwatchLaps;
