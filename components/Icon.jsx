import styled from 'styled-components';
import Typography from './Typography';

const StyledIcon = styled.div`
    color: ${props => props.noFill ? '' :
            props.color === 'secondary' ? props.theme.palette.secondary : props.theme.palette.primary};

    width: ${ props => props.size ? props.size : '1' }em;
    height: ${ props => props.size ? props.size : '1' }em;

    animation-name: ${props => props.animation};
    animation-duration: ${props => props.animationDuration ? props.animationDuration : 0}s;

    z-index: ${props => props.zIndex ? props.zIndex : 'auto'};
`;

const StyledIconLink = styled.a`
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: 0.2s;

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

    ${props => props.style}
`;

export default function Icon(props){
    return(
        <StyledIconWrapper size={props.size} hideLabel={props.hideLabel} label={props.label} style={props.style}>
            {
                props.href ?
                <StyledIconLink href={props.href}>
                    <StyledIcon title={props.label} size={props.size} noFill={props.noFill} color={props.color}>
                        {props.children}
                    </StyledIcon>
                </StyledIconLink> :

                <StyledIcon title={props.label} size={props.size} noFill={props.noFill} color={props.color} animation={props.animation} animationDuration={props.animationDuration} key={props.open}>
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