import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Typography from "./Typography";

const StyledButton = styled.button`
    border: ${props => props.outlined ? `1px solid ${props.theme.palette.secondary }` : 'none'};
    border-radius: 6px;
    display: inline-block;
    cursor: pointer;

    color: ${props => props.theme.palette.common.black};
    background-color: ${props => props.theme.palette.secondary}${props => (props.outlined) && '00'};

    width: ${props => props.width ? props.width : '80px'};
    height: ${props => props.height ? props.height : '40px'};
`;

export default function Button(props){
    return(
        <StyledButton width={props.width} height={props.height} outlined={props.outlined} onClick={props.onClick}><Typography color={props.outlined ? 'secondary' : 'black'} weight='bold'>{props.children}</Typography></StyledButton>
    )
}