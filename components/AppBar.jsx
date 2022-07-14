import styled from "styled-components";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import MenuIcon from "../public/icons/menu-icon.svg";
import Icon from "./Icon";

const StyledAppBar = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
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
  
  font-weight: ${props => props.active ? 700 : 400};
  font-family: 'Roboto', sans-serif;
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

export default function AppBar(){
    return(
        <StyledAppBar>
          <AppBarContainer>
            <Link href="/">
              <a>
                <Typography size="h5" weight="bold" uppercase color="secondary">Adam Darmawan</Typography>
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
              <Button width="98px" onClick={() => {console.log("resume clicked")}}>Resume</Button>
            </AppBarNavigation>
            <AppBarNavigation mdUp="display: none;" mdDown="flex: 1; justify-content: end;">
              <Icon color="secondary" size={3}>
                <MenuIcon />
              </Icon>
            </AppBarNavigation>
          </AppBarContainer>
        </StyledAppBar>
    )
}