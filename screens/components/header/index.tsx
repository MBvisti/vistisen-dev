import React, { useState } from 'react';
import styled from 'styled-components';
import { ThreeBars } from '@styled-icons/octicons/ThreeBars';
import { CloseCircle } from '@styled-icons/ionicons-outline/CloseCircle';
import Link from 'next/link';
import { TitleMedium } from '../headings';

interface StyleProps {
    readonly fontWeight: number;
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    p {
        color: ${(props) => props.theme.primary};
    }
`;

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;
const Paragraph = styled.p<StyleProps>`
    color: ${({ theme }) => theme.primary};
    font-size: 1.4rem;
    font-weight: ${(props) => props.fontWeight};
`;

const Nav = styled.nav`
    svg {
        color: ${({ theme }) => theme.primary};
        width: 2rem;
        height: 2rem;
        cursor: pointer;
    }

    @media (min-width: 640px) {
        svg {
            display: none;
        }
    }
`;

const LargeScreenNav = styled.div`
    display: none;
    justify-content: space-between;

    @media (min-width: 640px) {
        display: flex;
    }
`;

const AnchorElementSmall = styled.a`
    color: ${(props) => props.theme.secondary};
    font-weight: 500;
    cursor: pointer;
    margin: 0 1rem 0 1rem;
    font-size: 1.2rem;

    :hover {
        color: ${(props) => props.theme.primary};
    }
`;

const AnchorElementBig = styled.a`
    color: ${(props) => props.theme.secondary};
    font-weight: 500;
    cursor: pointer;
    font-size: 1.95rem;
`;

const NavModal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    background: ${(props) => props.theme.primary};
    padding: 2.5rem;
    z-index: 500;

    svg {
        color: ${(props) => props.theme.accentTwo};
        width: 3rem;
        height: 3rem;
        right: 0;
        position: absolute;
        margin-right: 20px;
        cursor: pointer;
    }

    h2 {
        color: ${(props) => props.theme.accentTwo};
        margin-bottom: 2rem;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 13rem;

        a {
            color: ${(props) => props.theme.accentTwo};
        }
    }

    @media (min-width: 640px) {
        display: none;
    }
`;

const Header = () => {
    const [state, setState] = useState(false);

    return (
        <Container className='h-14'>
            <Logo>
                <Link href="/">
                    <Paragraph fontWeight={600}>vis-ti-sen</Paragraph>
                </Link>
            </Logo>

            <Nav>
                {!state && <ThreeBars onClick={() => setState(!state)} />}
                <LargeScreenNav>
                    <Link href="/">
                        <AnchorElementSmall>Home</AnchorElementSmall>
                    </Link>
                    <Link href="/work">
                        <AnchorElementSmall>Work</AnchorElementSmall>
                    </Link>
                    <Link href="/blog">
                        <AnchorElementSmall>Blog</AnchorElementSmall>
                    </Link>
                    <Link href="/contact">
                        <AnchorElementSmall>Contact</AnchorElementSmall>
                    </Link>
                    <Link href="/about">
                        <AnchorElementSmall>About</AnchorElementSmall>
                    </Link>
                </LargeScreenNav>
            </Nav>
            {state && (
                <NavModal>
                    <CloseCircle onClick={() => setState(!state)} />
                    <TitleMedium>Navigation</TitleMedium>
                    <div>
                        <Link href="/">
                            <AnchorElementBig onClick={() => setState(false)}>
                                Home
                            </AnchorElementBig>
                        </Link>
                        <Link href="/work">
                            <AnchorElementBig onClick={() => setState(false)}>
                                Work
                            </AnchorElementBig>
                        </Link>
                        <Link href="/blog">
                            <AnchorElementBig onClick={() => setState(false)}>
                                Blog
                            </AnchorElementBig>
                        </Link>                        
                        <Link href="/contact">
                            <AnchorElementBig onClick={() => setState(false)}>
                                Contact
                            </AnchorElementBig>
                        </Link>
                        <Link href="/about">
                            <AnchorElementBig onClick={() => setState(false)}>
                                About
                            </AnchorElementBig>
                        </Link>
                    </div>
                </NavModal>
            )}
        </Container>
    );
};

export default Header;
