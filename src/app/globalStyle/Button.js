import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from './colors';

const marginProps = ({ small, margin }) => {
    if (small && margin) return `
        margin: ${margin}px 0;
    `
    if (small) return `
        margin: 0;
    `
    else return `
        margin: 50px 0;
    `
};

const buttonProps = ({ warning, green, text, small, isFetching }) => css`
    width: ${small ? '14px' : '50px'};
    padding: ${small ? '14px' : '50px'};
    font-size: ${small ? '12px' : '24px'};
    opacity: ${isFetching ? 0.2 : 1};
    background-color: ${warning ? `${colors.lightRed}` : `${colors.grey}`};
    background-color: ${green && `${colors.lightGreen}`};

    &:after {
        content: '${text ? text : ''}';
        color: ${warning ? `${colors.red}` : `${colors.white}`};
        color: ${green && `${colors.green}`};
    }
`

const Button = styled.button`
    ${buttonProps}
    ${marginProps}
    cursor: grab;
    position: relative;
    border: 5px solid ${colors.grey};
    border-radius: 60px;
    transition: transform .2s;

    &:after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:hover {
        transform: scale(1.05);
    }
`

export default Button;
