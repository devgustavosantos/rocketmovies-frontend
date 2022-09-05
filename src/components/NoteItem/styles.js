import styled from "styled-components";

export const Container = styled.div`
  padding: 1.6rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BLACK_700};

  border-radius: 1rem;
  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_800}` : "none"};

  width: fit-content;

  > input {
    width: 11rem;
    flex-grow: 1;
    background-color: transparent;
    border: none;
    outline: none;

    cursor: ${({ isNew }) => !isNew && "not-allowed"};
  }

  > button {
    border: none;
    background-color: transparent;
    display: grid;
    place-content: center;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK_800};
      font-size: 2.5rem;
    }
  }
`;
