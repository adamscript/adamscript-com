import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Typography } from "./Typography";
import { Container } from '../components'

const StyledButton = styled.button`
    border: ${props => props.outlined ? `1px solid ${props.theme.palette.secondary }` : 'none'};
    border-radius: 6px;
    display: inline-block;
    cursor: pointer;

    color: ${props => props.theme.palette.common.black};
    background-color: ${props => props.theme.palette.secondary}${props => (props.outlined) && '00'};
    transition: 0.2s;

    width: ${props => props.width ? props.width : '80px'};
    height: ${props => props.height ? props.height : '40px'};

    &:hover{
        background: ${props => props.outlined ? props.theme.palette.hover.background : props.theme.palette.hover.secondary};
    }
`;

const StyledIconButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    ${props => props.style}

    &:hover {
        filter: brightness(80%);
    }
`;

const StyledLinkButton = styled.a`
    border: ${props => props.outlined ? `1px solid ${props.theme.palette.secondary }` : 'none'};
    border-radius: 6px;
    display: inline-block;
    cursor: pointer;

    color: ${props => props.theme.palette.common.black};
    background-color: ${props => props.theme.palette.secondary}${props => (props.outlined) && '00'};
    transition: 0.2s;

    width: ${props => props.width ? props.width : '80px'};
    height: ${props => props.height ? props.height : '40px'};

    &:hover{
        background: ${props => props.outlined ? props.theme.palette.hover.background : props.theme.palette.hover.secondary};
    }
`;

const Button = (props) => {
    return(
        <StyledButton width={props.width} height={props.height} outlined={props.outlined} onClick={props.onClick}><Typography color={props.outlined ? 'secondary' : 'black'} weight='bold'>{props.children}</Typography></StyledButton>
    )
}

const IconButton = (props) => {
    return(
        <StyledIconButton width={props.width} height={props.height} outlined={props.outlined} onClick={props.onClick} style={props.style}>{props.children}</StyledIconButton>
    )
}

const LinkButton = (props) => {
    return(
        !props.external ?
        <Link href={props.href} passHref>
            <StyledLinkButton width={props.width} height={props.height} outlined={props.outlined}>
                <Container alignItems="center" justifyContent="center" height="100%">
                    <Typography color={props.outlined ? 'secondary' : 'black'} weight='bold'>{props.children}</Typography>
                </Container>
            </StyledLinkButton>
        </Link> :
        <StyledLinkButton href={props.href} target="_blank" width={props.width} height={props.height} outlined={props.outlined}>
            <Container alignItems="center" justifyContent="center" height="100%">
                <Typography color={props.outlined ? 'secondary' : 'black'} weight='bold'>{props.children}</Typography>
            </Container>
        </StyledLinkButton>
    )
}

export { Button, IconButton, LinkButton }