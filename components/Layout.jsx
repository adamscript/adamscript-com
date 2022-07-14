import styled from "styled-components";
import AppBar from "./AppBar";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const StyledSection = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;

    justifyContent: center;
    alignItems: center;
`;

const MainSection = styled.div`
  flex: 0 0 1200px;

  @media (max-width: 1200px){
    flex: 1;
  }
`;

const LeftMargin = styled.div`
  flex: 1;

  @media (max-width: 1200px){
    display: none;
  }
`;

const RightMargin = styled.div`
  flex: 1;

  @media (max-width: 1200px){
    display: none;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};

  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};

  max-width: ${props => props.maxWidth ? props.maxWidth : 'auto'};

  gap: ${props => props.spacing ? props.spacing : '0'}px;

  align-items: ${props => props.alignItems ? props.alignItems : 'start'};
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'start'};

  flex-direction: ${props => props.direction ? props.direction : 'column'};

  padding: ${props => props.padding ? props.padding : '0'};
  margin: ${props => props.margin ? props.margin : '0'};

  /*background-color: #00000030;*/

  @media (max-width: 900px){
    ${props => props.mdDown}
  }
`;

const Layout = (props) => {
    return(
        <StyledLayout>
            <AppBar />
            {props.children}
        </StyledLayout>
    )
}

const Section = (props) => {
    return(
        <StyledSection>
            <LeftMargin />
            <MainSection>{props.children && props.children[0]}</MainSection>
            <RightMargin>{props.children && props.children[1]}</RightMargin>
        </StyledSection>
    )
}

const Container = (props) => {
    return(
        <StyledContainer width={props.width} height={props.height} maxWidth={props.maxWidth} spacing={props.spacing} alignItems={props.alignItems} justifyContent={props.justifyContent} direction={props.direction} padding={props.padding} margin={props.margin} mdDown={props.mdDown} wrap={props.wrap}>{props.children}</StyledContainer> 
    )
}

export { Layout, Section, Container };
