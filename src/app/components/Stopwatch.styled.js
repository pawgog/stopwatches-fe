import styled from '@emotion/styled'
import { Link } from 'react-router-dom';
import { colors } from '../globalStyle/colors';

export const StyledLink = styled(Link)`
    position: relative;
    margin: 1rem;
    color: ${colors.white};
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
`
