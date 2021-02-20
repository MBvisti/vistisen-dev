import React, { useState } from "react";
import styled from "styled-components";
import { TitleMedium } from "../components/headings";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline/ArrowIosForwardOutline/ArrowIosForwardOutline";
import Link from "next/link";

const Container = styled.div`
  p {
    color: ${(props) => props.theme.primary};
  }
`;

export const ExperienceContainer = styled.div`
  max-height: 33rem;
`;

export const Experience = styled.div`
  background: ${(props) => props.theme.accentOne};

  h2, p {
    color: ${(props) => props.theme.accentTwo};
  }
`;

const TitleContainer = styled.div`
  @media (min-width: 1024px) {
    flex: 0 1 35%;
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
    <Container className='flex flex-col sm:m-auto'>
      <TitleContainer className='flex flex-col justify-center mb-8'>
        <TitleMedium className='mb-2 font-bold'>Work</TitleMedium>
        <p className='text-xl'>Here is a list of my previous work experience.</p>
      </TitleContainer>
      <ExperienceContainer className='flex flex-col overflow-y-auto flex-initial'>
        <Link href="/work/[slug]" as="/work/legal-monster">
          <Experience
            className='flex flex-col mb-8 rounded p-4 h-40 w-11/12 cursor-pointer justify-around shadow sm:w-full'
            onMouseEnter={() => setState({ ...state, hoveredElement: 1 })}
            onMouseLeave={() => setState({ ...state, hoveredElement: 0 })}
          >
            <p className='mb-2 text-xl font-medium'>Legal Monster Aps</p>
            <TitleMedium>Full-Stack developer</TitleMedium>
            <p className='mb-2 text-xl font-medium'>1 September 2019 - 1 november 2020</p>
            {state.hoveredElement === 1 && <ArrowIosForwardOutline />}
          </Experience>
        </Link>
        <Link href="/work/[slug]" as="/work/hs-moeller">
          <Experience
            className='flex flex-col mb-8 rounded p-4 h-40 w-11/12 cursor-pointer justify-around shadow sm:w-full'
            onMouseEnter={() => setState({ ...state, hoveredElement: 2 })}
            onMouseLeave={() => setState({ ...state, hoveredElement: 0 })}
          >
            <p className='mb-2 text-xl font-medium'>HS Moeller ApS</p>
            <TitleMedium>IT consultant/Developer</TitleMedium>
            <p className='mb-2 text-xl font-medium'>1 June 2018 - 1 May 2019</p>
            {state.hoveredElement === 2 && <ArrowIosForwardOutline />}
          </Experience>
        </Link>
        <Link href="/work/[slug]" as="/work/easy-skat">
          <Experience
            className='flex flex-col mb-8 rounded p-4 h-40 w-11/12 cursor-pointer justify-around shadow sm:w-full'
            onMouseEnter={() => setState({ ...state, hoveredElement: 3 })}
            onMouseLeave={() => setState({ ...state, hoveredElement: 0 })}
          >
            <p className='mb-2 text-xl font-medium'>Easy Skat ApS</p>
            <TitleMedium>Front-end developer</TitleMedium>
            <p className='mb-2 text-xl font-medium'>1 April 2018 - 1 June 2018</p>
            {state.hoveredElement === 3 && <ArrowIosForwardOutline />}
          </Experience>
        </Link>                      
      </ExperienceContainer>
    </Container>
  );
};
