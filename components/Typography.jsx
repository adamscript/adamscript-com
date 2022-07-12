import styled from "styled-components";

const StyledTypography = styled.p`
    display: inline-flex;

    margin: ${props => props.margin ? props.margin : '0'};
    padding: ${props => props.padding ? props.padding : '0'};

    font-size: ${props => 
        props.size === 'h6' ? '20px' :
        props.size === 'h5' ? '24px' : 
        props.size === 'h2' ? '60px' :
        props.size === 'caption' ? '12px' : '16px'};

    font-family: ${props => props.slab ? "'Roboto Slab', serif" : "'Roboto', sans-serif"};

    font-weight: ${props =>
        props.weight === 'thin' ? '100' :
        props.weight === 'light' ? '300' :
        props.weight === 'medium' ? '500' :
        props.weight === 'bold' ? '700' :
        props.weight === 'black' ? '900' : '400'};

    color: ${(props) => 
        props.color === 'secondary' ? props.theme.palette.secondary : 
        props.color === 'black' ? props.theme.palette.common.black : props.theme.palette.primary};

    text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
`;

export default function Typography(props){
    return(
        <StyledTypography size={props.size} weight={props.weight} color={props.color} slab={props.slab} uppercase={props.uppercase} margin={props.margin} padding={props.padding}>{props.children}</StyledTypography>
    )
}