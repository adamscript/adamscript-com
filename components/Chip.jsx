import styled from "styled-components";
import { Typography } from "./Typography";

const StyledChip = styled.div`
    display: inline-flex;

    border: 1px solid grey;
    border-radius: 6px;
    
    background: rgba(60, 60, 60, 0.6);

    padding: 6px;
`;

export default function Chip(props){
    return(
        <StyledChip>
            <Typography size="caption">{props.children}</Typography>
        </StyledChip>
    )    
}