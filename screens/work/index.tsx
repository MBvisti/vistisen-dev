import React, { useState } from "react";
import styled from "styled-components";
import { TitleMedium } from "../components/headings";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline/ArrowIosForwardOutline/ArrowIosForwardOutline";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-top: 5rem;

  h2 {
    margin-bottom: 0.7rem;
  }

  p {
    color: ${(props) => props.theme.primary};
    font-size: 1.2rem;
    font-weight: 300;
  }

  @media (min-width: 640px) {
    margin: auto 20%;
  }

  @media (min-width: 1024px) {
    margin: 0 15%;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20rem;
  }
`;

export const ExperienceContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;
`;

export const Experience = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 2rem;
  cursor: pointer;
  background: ${(props) => props.theme.accentOne};
  border-radius: 0.4rem;
  padding: 1rem;
  height: 10rem;
  justify-content: space-around;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  h2,
  p {
    color: ${(props) => props.theme.accentTwo};
  }

  p {
    margin-bottom: 0.6rem;
    font-size: 1.35rem;
    font-weight: 500;
  }

  svg {
    position: absolute;
    color: ${(props) => props.theme.accentTwo};
    width: 3rem;
    height: 3rem;
    right: 1rem;
    top: 3.5rem;
  }
`;

export const ImageContainer = styled.div`
  flex: 0 1 25%;
  margin-right: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;

  img {
    max-width: 70%;
    max-height: 70%;
  }
`;

export const ShortDescContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem 0;

  p {
    color: ${(props) => props.theme.primary};
    font-size: 1.25rem;
    font-weight: 300;
    margin-top: 0.3rem;
    margin-bottom: 0.1rem;
  }
`;

export const Description = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  // white-space: nowrap;
  color: white;
  max-width: 20rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    flex: 0 1 35%;
    margin-bottom: 0;
    margin-right: 5rem;

    h2 {
      font-size: 2.4rem;
    }

    p {
      font-size: 1.563rem;
      line-height: 1.3;
    }
  }
`;

export const Work = () => {
  const [state, setState] = useState({
    hoveredElement: 0,
  });
  return (
    <Container>
      <TitleContainer>
        <TitleMedium>Work</TitleMedium>
        <p>Here is a list of my previous work experience.</p>
      </TitleContainer>
      <ExperienceContainer>
        <Link href="/work/[slug]" as="/work/legal-monster">
          <Experience
            onMouseEnter={() => setState({ ...state, hoveredElement: 1 })}
            onMouseLeave={() => setState({ ...state, hoveredElement: 0 })}
          >
            <p>Legal Monster Aps</p>
            <TitleMedium>Full-Stack developer</TitleMedium>
            <p>1 September 2019 - 1 november 2020</p>
            {state.hoveredElement === 1 && <ArrowIosForwardOutline />}
          </Experience>
        </Link>
        <Link href="/work/[slug]" as="/work/hs-moeller">
          <Experience
            onMouseEnter={() => setState({ ...state, hoveredElement: 2 })}
            onMouseLeave={() => setState({ ...state, hoveredElement: 0 })}
          >
            <p>HS Moeller ApS</p>
            <TitleMedium>IT consultant/Developer</TitleMedium>
            <p>1 June 2018 - 1 May 2019</p>
            {state.hoveredElement === 2 && <ArrowIosForwardOutline />}
          </Experience>
        </Link>
        <Link href="/work/[slug]" as="/work/easy-skat">
          <Experience
            onMouseEnter={() => setState({ ...state, hoveredElement: 3 })}
            onMouseLeave={() => setState({ ...state, hoveredElement: 0 })}
          >
            <p>Easy Skat ApS</p>
            <TitleMedium>Front-end developer</TitleMedium>
            <p>1 April 2018 - 1 June 2018</p>
            {state.hoveredElement === 3 && <ArrowIosForwardOutline />}
          </Experience>
        </Link>
      </ExperienceContainer>
    </Container>
  );
};
