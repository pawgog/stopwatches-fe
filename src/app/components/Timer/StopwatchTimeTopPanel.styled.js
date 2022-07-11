import styled from '@emotion/styled'
import backArrowIcon from '../../icon/back-arrow.png'

export const ButtonIcon = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
`

export const ArrowIcon = styled.span`
    background-image: url(${backArrowIcon});
    width: 55px;
    height: 55px;
    display: block;
    background-size: cover;
`
