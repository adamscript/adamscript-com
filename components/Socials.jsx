import { Container, Icon } from '../components'
import styled from "styled-components"

import TomatetoIcon from '../public/icons/logos/tomatetolight-icon.svg'
import GitHubIcon from '../public/icons/logos/github-logo.svg'
import LinkedinIcon from '../public/icons/logos/linkedin-logo.svg'
import EmailIcon from '../public/icons/email-icon.svg'

const StyledAnchor = styled.div`
    position: fixed;
    bottom: 0;
    right: 30px;

    @media (max-width: 1350px){
        display: none;
    }
`
const StyledLine = styled.div`
    width: 1px;
    height: 110px;
    background-color: white;
`

const SocialsVert = () => {
    return(
        <StyledAnchor>
            <Container spacing={18} alignItems="center">
                <Icon size={2} label="Tomateto" href="https://tomateto.com/adamscript" hideLabel><TomatetoIcon /></Icon>
                <Icon size={2} label="GitHub" href="https://github.com/adamscript" hideLabel><GitHubIcon /></Icon>
                <Icon size={2} label="LinkedIn" href="https://www.linkedin.com/in/adamscript" hideLabel><LinkedinIcon /></Icon>
                <Icon size={2} label="Email" href="mailto:adam@adamscript.com" hideLabel><EmailIcon /></Icon>
                <StyledLine />
            </Container>
        </StyledAnchor>
    )
}

const SocialsHoriz = () => {
    return(
        <Container direction="row" spacing={18} justifyContent="center" flex="0">
            <Icon size={1.5} label="Tomateto" href="https://tomateto.com/adamscript" hideLabel><TomatetoIcon /></Icon>
            <Icon size={1.5} label="GitHub" href="https://github.com/adamscript" hideLabel><GitHubIcon /></Icon>
            <Icon size={1.5} label="LinkedIn" href="https://www.linkedin.com/in/adamscript" hideLabel><LinkedinIcon /></Icon>
            <Icon size={1.5} label="Email" href="mailto:adam@adamscript.com" hideLabel><EmailIcon /></Icon>
        </Container>
    )
}

export { SocialsVert, SocialsHoriz }