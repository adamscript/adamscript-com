import styled from "styled-components";

const StyledButton = styled.button`
    border: ${props => props.outlined ? `2px solid ${props.theme.palette.secondary }` : 'none'};
    border-radius: 6px;
    display: inline-block;
    cursor: pointer;

    color: ${props => props.theme.palette.common.black};
    background-color: ${props => props.theme.palette.secondary}${props => props.outlined && '00'};

    width: ${props => props.width ? props.width : '80px'};
    height: ${props => props.height ? props.height : '40px'};

    &:hover{
        background-color: ${props => props.outlined ? props.theme.palette.secondary + '10' : props.theme.palette.secondary};
        filter: brightness(${props => props.outlined ? '100%' : '90%'});
    }
`;

export default function Button(props){
    return(
        <StyledButton width={props.width} height={props.height} outlined={props.outlined}>{props.children}</StyledButton>
    )
}