import React from 'react';
import Button from '../../globalStyle/Button';
import { ButtonBoard } from './StopwatchTimer.styled';
import { ButtonIcon, ArrowIcon } from './StopwatchTimeTopPanel.styled';

const StopwatchTimeTopPanel = ({ backToStopwatchesList, handleDeleteStopwatch, id }) => (
    <ButtonBoard>
        <ButtonIcon onClick={backToStopwatchesList}>
            <ArrowIcon />
        </ButtonIcon>
        <Button small margin={20} text="X" onClick={() => handleDeleteStopwatch(id)} /> 
    </ButtonBoard>
);

export default StopwatchTimeTopPanel;
