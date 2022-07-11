import React from 'react';
import { StyledLink } from './Stopwatch.styled';
import { convertMilliseconds, calculateAllTime } from '../utils/helper';

const Stopwatch = ({ stopwatches }) => {
    const { __id: id, toggles } = stopwatches;

    return (
        <StyledLink to={`/stopwatch/${id}`}>
            {convertMilliseconds(calculateAllTime(toggles))}
        </StyledLink>
    );
};

export default Stopwatch;
