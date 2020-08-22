import styled from 'styled-components';

interface StyleProps {
    readonly marginTop: number;
}

export const TitleBig = styled.h1<StyleProps>`
    margin-top: ${props => props.marginTop}%;
    color: ${props => props.theme.primary};
    font-size: 2.4rem;
`;

export const TitleMedium = styled.h2<StyleProps>`
    margin-top: ${props => props.marginTop}%;
    color: ${props => props.theme.primary};
    font-size: 1.95rem;
`;

export const TitleSmall = styled.h3<StyleProps>`
    margin-top: ${props => props.marginTop}%;
    color: ${props => props.theme.primary};
    font-size: 1.563rem;
`;