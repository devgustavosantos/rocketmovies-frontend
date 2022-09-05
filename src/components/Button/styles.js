import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  background-color: ${({ theme, highlighted }) =>
    highlighted ? theme.COLORS.PINK_800 : theme.COLORS.BLACK_900};

  padding: 1.5rem 0;
  margin-top: 2rem;

  border-radius: 1rem;

  font-weight: 500;
  color: ${({ theme, highlighted }) =>
    highlighted ? theme.COLORS.BLACK_900 : theme.COLORS.PINK_800};
  &:disabled {
    filter: brightness(0.5);
    cursor: not-allowed;
  }
`;
