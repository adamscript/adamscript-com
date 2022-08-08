import styled from "styled-components";
import { Container, SocialsHoriz, Typography } from '.';

const StyledFooter = styled.div`
  width: 100%;
  height: 60px;

  background-color: ${props => props.theme.palette.background};

  z-index: 2;

  border-top: 1px solid rgba(255, 255, 255, 0.1);
`
export default function Footer(){
    return(
        <StyledFooter>
            <Container height="100%" alignItems="center" justifyContent="center" padding="10px 30px">
            <Container direction="row" width="100%" maxWidth="900px" alignItems="center" justifyContent="space-between" mdDown="justify-content: center;" lgUp="max-width: 600px; justify-content: center;">
                <Typography size="caption" color="secondary">
                © 2022 | Designed & Built by Adam Darmawan
                </Typography>
                <Container flex="0" mdDown="display: none;" lgUp="display: none;">
                <SocialsHoriz />
                </Container>
            </Container>
            </Container>
        </StyledFooter>
    )
}