import styled from "styled-components";

interface StyleProps {
  readonly marginTop?: number;
  readonly marginRight?: number;
  readonly marginBottom?: number;
  readonly marginLeft?: number;
}

export const TitleBig = styled.h1<StyleProps>`
  margin-top: ${(props) => props.marginTop}%;
  margin-right: ${(props) => props.marginRight}%;
  margin-bottom: ${(props) => props.marginBottom}%;
  margin-left: ${(props) => props.marginLeft}%;
  color: ${(props) => props.theme.primary};
  font-size: 2.4rem;
`;

export const TitleMedium = styled.h2<StyleProps>`
  margin-top: ${(props) => props.marginTop}%;
  margin-right: ${(props) => props.marginRight}%;
  margin-bottom: ${(props) => props.marginBottom}%;
  margin-left: ${(props) => props.marginLeft}%;
  color: ${(props) => props.theme.primary};
  font-size: 1.75rem;
`;

export const TitleSmall = styled.h3<StyleProps>`
  margin-top: ${(props) => props.marginTop}%;
  margin-right: ${(props) => props.marginRight}%;
  margin-bottom: ${(props) => props.marginBottom}%;
  margin-left: ${(props) => props.marginLeft}%;
  color: ${(props) => props.theme.primary};
  font-size: 1.563rem;
`;
