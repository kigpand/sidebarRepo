import styled from "styled-components";

export default function Footer() {
  return <FooterWrapper>푸터</FooterWrapper>;
}

const FooterWrapper = styled.footer`
  width: 100%;
  height: 64px;
  border-top: 1px solid lightblue;
  bottom: 0px;
  position: sticky;
  background-color: white;
`;
