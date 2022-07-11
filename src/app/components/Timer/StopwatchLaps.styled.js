import styled from '@emotion/styled'
import { colors } from '../../globalStyle/colors';

export const LapsListStyled = styled.div`
    display: flex;
    justify-content: space-between;
`

export const LapMaxValue = styled.span`
    color: ${colors.red};
`

export const LapMinValue = styled.span`
    color: ${colors.green};
`
