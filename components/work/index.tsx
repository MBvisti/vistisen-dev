import React, { useState } from "react";
import styled from "styled-components";
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
    <div className='py-6 flex flex-col flex-1'>
      <div className='flex flex-col justify-center mb-4'>
        <h2 className='mb-2 text-xl font-bold'>Work</h2>
        <p className='text-lg'>Here is a list of my previous work experience.</p>
      </div>
      <div className='flex flex-col overflow-y-auto flex-initial'>
        <Link href="/work/[slug]" as="/work/legal-monster">
          <div
            className='border border-gray-400 flex flex-col mb-8 rounded p-4 h-24 w-11/12 cursor-pointer justify-around shadow sm:w-full'
          >
            <p className='mb-2'>Everphone Gmbh</p>
            <h2 className='text-xl font-medium'>Full-Stack engineer</h2>
          </div>
        </Link>
        <Link href="/work/[slug]" as="/work/legal-monster">
          <div
            className='border border-gray-400 flex flex-col mb-8 rounded p-4 h-24 w-11/12 cursor-pointer justify-around shadow sm:w-full'
          >
            <p className='mb-2'>Legal Monster Aps</p>
            <h2 className='text-xl font-medium'>Full-Stack developer</h2>
          </div>
        </Link>
        <Link href="/work/[slug]" as="/work/hs-moeller">
          <div
            className='border border-gray-400 flex flex-col mb-8 rounded p-4 h-24 w-11/12 cursor-pointer justify-around shadow sm:w-full'
          >
            <p className='mb-2'>HS Moeller ApS</p>
            <h2 className='text-xl font-medium'>Frontend Engineer</h2>
          </div>
        </Link>
        <Link href="/work/[slug]" as="/work/easy-skat">
        <div
            className='border border-gray-400 flex flex-col mb-8 rounded p-4 h-24 w-11/12 cursor-pointer justify-around shadow sm:w-full'
          >
            <p className='mb-2'>Easy Skat ApS</p>
            <h2 className='text-xl font-medium'>Front-end developer</h2>
          </div>
        </Link>                      
      </div>
    </div>
  );
};
