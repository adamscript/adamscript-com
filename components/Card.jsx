import styled from "styled-components"
import Chip from "./Chip";
import Typography from "./Typography";
import { Container } from ".";

import Image from "next/image";

const StyledCardContainer = styled.div`
    display: flex;
    position: relative;

    width: ${props => props.width ? props.width : '360px'};
    height: ${props => props.height ? props.height : '360px'};

    border-radius: 12px;

    background-color: black;
`;

const StyledContentContainer = styled.div`
    display: inherit;
    flex-wrap: wrap;
    flex-direction: column;

    justify-content: end;

    width: 100%;
    height: 100%;

    border-radius: inherit;

    gap: 12px;    
    padding: 24px;

    z-index: 1;
    cursor: pointer;

    background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
    transition: 0.3s;

    &:hover{
        background-color: #00000060;
    }
`;

const StyledTagsContainer = styled.div`
    display: inline-flex;
    gap: 3px;
`;

const StyledMediaContainer = styled.div`
    position: absolute;

    width: 100%;
    height: 100%;

    border-radius: inherit;

    top: 0;
    left: 0;
`;

const StyledImage = styled(Image)`
    border-radius: 12px;
`

export default function Card(props){
    return(
        <a href={props.href}>
            <StyledCardContainer width={props.width} height={props.height}>
                <StyledContentContainer>
                    <StyledTagsContainer>
                        {props.children[2]}
                    </StyledTagsContainer>
                    <Typography size="h4" weight="bold">
                        {props.children[0].props.children}
                    </Typography>
                    <Typography>
                        {props.children[1].props.children}
                    </Typography>
                </StyledContentContainer>
                <StyledMediaContainer>
                    <StyledImage layout="fill" src={props.src} alt={`Screenshot of ${props.children[0]}`} priority />
                </StyledMediaContainer>
            </StyledCardContainer>
        </a>
    )
}