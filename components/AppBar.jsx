import styled, { keyframes } from "styled-components";
import { Typography } from "./Typography";
import { IconButton, LinkButton } from "./Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { forwardRef, useEffect, useState } from "react";
import MenuIcon from "../public/icons/menu-icon.svg";
import CloseIcon from "../public/icons/close-icon.svg";
import Icon from "./Icon";
import { Container } from "./Layout";
import { SocialsHoriz } from ".";

const StyledAppBar = styled.div`
  position: fixed;

  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid rgba(0, 0, 0, 0);
  background-color: ${props => props.theme.palette.background};

  html:not([data-scroll='0']) &{
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  z-index: 4;
`;

const AppBarContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 30px 0 30px;

  max-width: 1500px;
`;

const AppBarNavigation = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  flex: 0 0 450px;

  gap: 6px;

  @media (max-width: 900px){
    ${props => props.mdDown}
  }

  @media (min-width: 900px){
    ${props => props.mdUp}
  }
`;

const StyledLink = styled.a`
  color: ${props => props.active ? props.theme.palette.secondary : props.theme.palette.primary};
  transition: 0.1s;
  
  font-weight: ${props => props.active ? 700 : 400};
  font-family: 'Roboto', sans-serif;

  &:hover{
    color: ${props => props.theme.palette.secondary};
  }
`;

const Navigation = forwardRef((props, ref) => {
  const router = useRouter();

  const currentRoute = () => {
    if(router.pathname === `/${props.children.toLowerCase()}` || router.pathname === '/' && props.children === 'Home'){
        return true;
    }
    else{
        return false;
    }
  }

  return(
      <StyledLink href={props.href} onClick={props.onClick} ref={ref} active={currentRoute()}>{props.children}</StyledLink>
  )
})
Navigation.displayName = "Navigation";

const StyledMenu = styled.div`
    display: ${props => props.open ? 'block' : 'none'};

    position: fixed;
    bottom: 0;
    left: 0;
    transition: 0.3s;

    width: 100%;
    height: 100%;

    background-color: ${props => props.theme.palette.background};

    z-index: 3;

    @media (min-width: 900px){
      display: none;
      
      ${props => props.mdUp}
    }
`

const rotateIn = keyframes`
    0% { opacity: 1; transform: rotate(-90deg); }
    100% { opacity: 1; transform: rotate(0deg); }
 `

export default function AppBar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [transitionDuration, setTransitionDuration] = useState(0);

    useEffect(() => {
      const debounce = (fn) => {
        // This holds the requestAnimationFrame reference, so we can cancel it if we wish
        let frame;
    
        // The debounce function returns a new function that can receive a variable number of arguments
        return (...params) => {
            // If the frame variable has been defined, clear it now, and queue for next frame
            if (frame) {
                cancelAnimationFrame(frame);
            }
    
            // Queue our function call for the next frame
            frame = requestAnimationFrame(() => {
                // Call our function and pass any params we received
                fn(...params);
            });
        };
      };
      
      // Reads out the scroll position and stores it in the data attribute
      // so we can use it in our stylesheets
      const storeScroll = () => {
          document.documentElement.dataset.scroll = window.scrollY;
      };
      
      // Listen for new scroll events, here we debounce our `storeScroll` function
      document.addEventListener('scroll', debounce(storeScroll), { passive: true });
      
      // Update scroll position for first time
      storeScroll();
    }, [])

    return(
      <>
        <StyledAppBar>
          <AppBarContainer>
            <Link href="/">
              <a>
                <Typography size="h5" weight="black" uppercase color="secondary" mdDown="font-size: 20px;">Adam Darmawan</Typography>
              </a>
            </Link>
            <AppBarNavigation mdDown="display: none;">
              <Link href="/" passHref>
                <Navigation>Home</Navigation>
              </Link>
              <Link href="/about" passHref>
                <Navigation>About</Navigation>
              </Link>
              <Link href="/projects" passHref>
                <Navigation>Projects</Navigation>
              </Link>
              <Link href="/contact" passHref>
                <Navigation>Contact</Navigation>
              </Link>
              <LinkButton width="98px" href="#" external>Resume</LinkButton>
            </AppBarNavigation>
            <AppBarNavigation mdUp="display: none;" mdDown="flex: 1; justify-content: end;">
              <IconButton onClick={() => { menuOpen ? setMenuOpen(false) : setMenuOpen(true); setTransitionDuration(0.2); }}>
                  {
                    !menuOpen ?
                    <Icon color="secondary" size={2.5} animation={rotateIn} animationDuration={transitionDuration} open={menuOpen}><MenuIcon /></Icon> :
                    <Icon color="secondary" size={2.5} animation={rotateIn} animationDuration={transitionDuration} open={menuOpen}><CloseIcon /></Icon>
                  }
              </IconButton>
            </AppBarNavigation>
          </AppBarContainer>
        </StyledAppBar>

        <StyledMenu open={menuOpen}>
          <Container width="100%" height="100%" alignItems="center" justifyContent="center">
            <Container alignItems="center" justifyContent="center" spacing={45} flex="0">
                <Link href="/" passHref>
                    <Navigation>Home</Navigation>
                </Link>
                <Link href="/about" passHref>
                    <Navigation>About</Navigation>
                </Link>
                <Link href="/projects" passHref>
                    <Navigation>Projects</Navigation>
                </Link>
                <Link href="/contact" passHref>
                    <Navigation>Contact</Navigation>
                </Link>
                <LinkButton width="98px" href="#" external>Resume</LinkButton>
            </Container>
            <Container position="fixed" bottom="30px">
              <SocialsHoriz />
            </Container>
          </Container>
        </StyledMenu>
      </>
    )
}