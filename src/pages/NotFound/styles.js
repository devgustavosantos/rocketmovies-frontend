import styled from "styled-components";

export const Container = styled.div`
  max-width: 68rem;
  padding: 0 4rem;
  text-align: center;
  margin: 20vmin auto 0;

  @media (min-width: 768px) {
    margin: 30vmin auto 0;
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK_800};
    font-size: 3rem;
    line-height: 3rem;

    @media (min-width: 768px) {
      font-size: 5rem;
      line-height: 4rem;
    }
  }

  > p {
    font-size: 1.5rem;
    margin: 1rem auto;

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  > button {
    font-size: 1.5rem;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
`;
