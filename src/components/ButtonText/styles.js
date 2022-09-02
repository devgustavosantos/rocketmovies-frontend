import styled from "styled-components";

export const Container = styled.a`
  color: ${({ theme }) => theme.COLORS.PINK_800};

  display: inline-flex;
  align-items: center;
  gap: 0.8rem;

  > svg {
    font-size: 2.5rem;
  }
`;
