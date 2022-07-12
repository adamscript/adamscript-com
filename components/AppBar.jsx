import styled from "styled-components";
import Typography from "./Typography";
import Button from "./Button";

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

  padding: 0 60px 0 60px;

  max-width: 1500px;
`;

const AppBarNavigation = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  flex: 0 0 450px;

  gap: 6px;
`;

export default function AppBar(){
    return(
        <StyledAppBar>
          <AppBarContainer>
            <Typography size="h5" weight="bold" uppercase color="secondary">Adam Darmawan</Typography>
            <AppBarNavigation>
              <Typography weight="black" color="secondary">Home</Typography>
              <Typography>About</Typography>
              <Typography>Projects</Typography>
              <Typography>Contact</Typography>
              <Button width="98px"><Typography color="black" weight="bold">Resume</Typography></Button>
            </AppBarNavigation>
          </AppBarContainer>
        </StyledAppBar>
    )
}