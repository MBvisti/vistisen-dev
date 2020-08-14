import React from "react";
import styled from "styled-components";
import {ThreeBars} from "@styled-icons/octicons/ThreeBars";

interface StyleProps {
    readonly fontWeight: number
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`
const Paragraph = styled.p<StyleProps>`
    color: ${({ theme }) => theme.primary};
    font-size: 1.4rem;
    font-weight: ${props => props.fontWeight};
`;

const Nav = styled.nav`      
  
  svg {
    color: ${({ theme }) => theme.primary};
    width: 2rem;
    height: 2rem;
    cursor: pointer;    
  }
`

// const AnchorElement = styled.a`
//     color: ${props => props.theme.darkColor};
//     font-weight: 500;
//     cursor: pointer;
//     font-size: 1.2rem;
// `;


const Header = () => (
    <Container>
        <Logo>
            <Paragraph fontWeight={600}>
                vis-ti-sen.
            </Paragraph>
            <Paragraph fontWeight={200}>
                dev
            </Paragraph>
        </Logo>
        <Nav>
            <ThreeBars />
            {/*<Link href="/about">*/}
            {/*    <AnchorElement>About</AnchorElement>*/}
            {/*</Link>*/}
            {/*<Link href="/blog">*/}
            {/*    <AnchorElement>Blog</AnchorElement>*/}
            {/*</Link>*/}
        </Nav>
    </Container>
);

export default Header;