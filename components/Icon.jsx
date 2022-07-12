import styled from 'styled-components';
import Typography from './Typography';

const StyledIcon = styled.div`
    color: ${props => props.noFill ? '' : 'white'};

    width: ${props => props.size}em;
    height: ${props => props.size}em;
`;

const StyledIconButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
        filter: brightness(80%);
    }
`;

const StyledIconWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export default function Icon(props){
    return(
        <StyledIconWrapper size={props.size}>
            {
                props.onClick ?
                <StyledIconButton onClick={props.onClick}>
                    <StyledIcon title={props.label} size={props.size} noFill={props.noFill}>
                        {props.children}
                    </StyledIcon>
                </StyledIconButton> :
                <StyledIcon title={props.label} size={props.size} noFill={props.noFill}>
                    {props.children}
                </StyledIcon>
            }
            {
                !props.hideLabel &&
                <Typography weight="medium">{props.label}</Typography>
            }
        </StyledIconWrapper>
    )
}