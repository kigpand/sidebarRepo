import styled from "styled-components";
import SiderBar from "./SiderBar";
import Lists from "./Lists";

export default function Main() {
  return (
    <MainWrapper>
      <SiderBar />
      <Lists />
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  flex-grow: 1;
  height: 100%;
  background-color: pink;
  overflow: auto;
  display: flex;
`;
