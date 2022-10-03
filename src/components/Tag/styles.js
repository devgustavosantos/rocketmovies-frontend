import styled from "styled-components";

export const Container = styled.span`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;

  padding: 0.5rem 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BLACK_600};

  border-radius: 0.8rem;

  /* margin-right: 0.8rem; */
`;
