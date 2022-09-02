import styled from "styled-components";

export const Container = styled.a`
  color: ${({ theme }) => theme.COLORS.PINK_800};

  display: flex;
  align-items: center;
  gap: 1rem;

  > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
