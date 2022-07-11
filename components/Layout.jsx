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
    height: 100vh;

    justifyContent: center;
    alignItems: center;

    background-color: grey;
`;

const MainSection = styled.div`
  flex: 0 0 1230px;
  background-color: green;

  @media (max-width: 1230px){
    flex: 1;
  }
`;

const LeftMargin = styled.div`
  flex: 1;
  background-color: red;

  @media (max-width: 1230px){
    display: none;
  }
`;

const RightMargin = styled.div`
  flex: 1;
  background-color: blue;

  @media (max-width: 1230px){
    display: none;
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

export { Layout, Section };
