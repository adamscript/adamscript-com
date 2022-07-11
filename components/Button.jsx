import styled from "styled-components";

const StyledButton = styled.button`
    border: none;
    border-radius: 6px;
    display: inline-block;

    color: ${props => props.theme.palette.common.black};
    background-color: ${props => props.theme.palette.secondary};

    width: ${props => props.width ? props.width : '80px'};
    height: ${props => props.height ? props.height : '40px'};
`;

export default function Button(props){
    return(
        <StyledButton width={props.width} height={props.height}>{props.children}</StyledButton>
    )
}