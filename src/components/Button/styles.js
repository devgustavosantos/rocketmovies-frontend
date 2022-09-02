import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.PINK_800};

  padding: 1.5rem 0;
  margin-top: 2.4rem;

  border-radius: 1rem;

  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.BLACK_800};
`;