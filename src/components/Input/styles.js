import styled from "styled-components";

export const Container = styled.div`
  flex-grow: 1;

  padding: 2rem;
  margin-bottom: 1rem;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.COLORS.BLACK_700};

  display: flex;
  align-items: center;
  gap: 1.5rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_800};
    width: 2rem;
    height: 2rem;
  }

  > input {
    flex-grow: 1;

    border: none;
    outline: none;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
  }
`;
