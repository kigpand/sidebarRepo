import styled from "styled-components";

export default function Header() {
  return <HeaderWrapper>ㅎ헤더</HeaderWrapper>;
}

const HeaderWrapper = styled.header`
  width: 100%;
  height: 64px;
  border-bottom: 1px solid lightblue;
  position: sticky;
  top: 0px;
  background-color: white;
`;
