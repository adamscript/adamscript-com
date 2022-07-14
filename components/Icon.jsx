import styled from 'styled-components';
import Typography from './Typography';

const StyledIcon = styled.div`
    color: ${props => props.noFill ? '' :
            props.color === 'secondary' ? props.theme.palette.secondary : props.theme.palette.primary};

    width: ${ props => props.size ? props.size : '1' }em;
    height: ${ props => props.size ? props.size : '1' }em;
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
    justify-content: space-between;
    height: 100%;
    gap: ${props => props.hideLabel || !props.label ? '0' : '24px'};
`;

export default function Icon(props){
    return(
        <StyledIconWrapper size={props.size} hideLabel={props.hideLabel} label={props.label}>
            {
                props.onClick ?
                <StyledIconButton onClick={props.onClick}>
                    <StyledIcon title={props.label} size={props.size} noFill={props.noFill} color={props.color}>
                        {props.children}
                    </StyledIcon>
                </StyledIconButton> :
                <StyledIcon title={props.label} size={props.size} noFill={props.noFill} color={props.color}>
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