import styled from "styled-components";

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${props => props.size}px, ${props => props.size}px));
    gap: ${props => props.gap}px;

    flex: 1;

    align-items: center;
    justify-items: center;

    justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};

    @media (max-width: 1200px){
        justify-content: center;
    }
`;

export default function Grid(props){
    return(
        <StyledGrid size={props.size} gap={props.gap} justifyContent={props.justifyContent}>
            {props.children}
        </StyledGrid>
    )
}