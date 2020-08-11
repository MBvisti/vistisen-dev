import React, {Fragment} from 'react';
import Link from "next/link";
import styled from 'styled-components'
import {Github, Linkedin} from "@styled-icons/feather";
import {Docker, ReactLogo} from "@styled-icons/fa-brands";
import {Javascript, Postgresql, Typescript} from "@styled-icons/simple-icons";

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.6rem 0 0.6rem;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 7.5rem;
`

const BigParagraph = styled.p`
    color: ${props => props.theme.darkColor};
    font-size: 1.6rem;
    font-weight: 600;
`;

const SmallParagraph = styled.p`
    color: ${props => props.theme.lightColor};
    font-size: 1.3rem;
    font-weight: 500;
`;

const AnchorElement = styled.a`
    color: ${props => props.theme.darkColor};
    font-weight: 500;
    cursor: pointer;
    font-size: 1.2rem;
`;

const Socials = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: 100%;
    max-height: 100%;
    
    svg {
        cursor: pointer;
        height: 2rem;
        width: 2rem;
        color: ${props => props.theme.darkColor};
        margin: 0 0.6rem 0 0.6rem; 
    }
`;

const IntroductionContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 5rem 0 5rem;
`;

const Introduction = styled.div`
    display: flex;
    flex-direction: column;
    // margin: 0 auto;
    margin-bottom: 2rem;
   
    h1 {
        font-weight: 300;        
        color: ${props => props.theme.lightColor};
        font-size: 7rem;
    }
        
    h2 {
        font-weight: 500;        
        color: ${props => props.theme.darkColor};
        font-size: 4rem;
    }
    
    h3 {
        font-weight: 200;        
        color: ${props => props.theme.lightColor};
        font-size: 3rem;
    }
`;

const StackIcons = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 2.5rem 3rem 2.5rem;
    
    svg {
        height: 1.6rem;
        width: 1.6rem;
        color: ${props => props.theme.darkColor};
    }
`;

const PagesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 2.5rem 3rem 2.5rem;     
    
    p {
        font-size: 1.7rem;
        font-weight: 600;
        color: ${props => props.theme.darkColor};
        cursor: pointer;
    } 
`;

export default function Home() {
  return (
      <Fragment>
          <Header>
              <Logo>
                  <BigParagraph>
                      vistisen
                  </BigParagraph>
                  <SmallParagraph>
                      .dev
                  </SmallParagraph>
              </Logo>
              <Nav>
                  <Link href="/about">
                      <AnchorElement>About</AnchorElement>
                  </Link>
                  <Link href="/blog">
                      <AnchorElement>Blog</AnchorElement>
                  </Link>
              </Nav>
          </Header>
          <IntroductionContainer>
              <Introduction>
                  <h1>Hi,</h1>
                  <h2>I am Morten.</h2>
                  <h3>Full Stack developer</h3>
              </Introduction>
              <StackIcons>
                <ReactLogo />
                <Javascript />
                <Typescript />
                <Postgresql />
                <Docker />
              </StackIcons>
              <PagesContainer>
                  <Link href="/projects">
                    <p>Projects</p>
                  </Link>
                  <Link href="/contact">
                    <p>Contact</p>
                  </Link>
                  <Link href="/technologies">
                    <p>Tech</p>
                  </Link>
              </PagesContainer>
          </IntroductionContainer>
          <Socials>
              <AnchorElement href={"https://www.linkedin.com/in/mbvisti-dev/"}>
                <Linkedin />
              </AnchorElement>
              <AnchorElement href={"https://github.com/mbvisti"}>
                <Github />
              </AnchorElement>
          </Socials>
      </Fragment>
  )
}
