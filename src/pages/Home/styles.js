import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem 1fr;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    width: 100%;

    overflow: hidden;

    > .wrapper {
      overflow-y: auto;
      height: 100%;

      padding-top: 5rem;
      padding-bottom: 5rem;

      display: flex;
      flex-direction: column;
    }
  }
`;

export const Top = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    font-weight: 400;
    font-size: 3.2rem;
  }
`;

export const ButtonAdd = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.4rem 3.2rem;

  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.COLORS.PINK_800};
  color: ${({ theme }) => theme.COLORS.BLACK_800};

  > svg {
    font-size: 2rem;
  }
`;

export const Notes = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 3.8rem;

  overflow-y: auto;

  padding-right: 0.8rem;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK_800};
    border-radius: 8rem;
  }
`;
