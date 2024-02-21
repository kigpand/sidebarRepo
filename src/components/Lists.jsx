import styled from "styled-components";
import List from "./List";

export default function Lists() {
  return (
    <ListsWrapper>
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
    </ListsWrapper>
  );
}

const ListsWrapper = styled.div`
  flex-grow: 1;
  background-color: white;
  height: 100%;
  padding: 24px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  border-left: 1px solid blue;
  gap: 8px;
`;
