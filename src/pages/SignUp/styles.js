import styled from "styled-components";

import bgImg from "../../assets/background.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  width: 63.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 34rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 4.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK_800};
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE_900};
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE_800};

    margin: 4.8rem 0;
  }

  > a:last-child {
    margin-top: 4rem;
  }
`;

export const BackgroundImg = styled.div`
  flex-grow: 1;
  background: url(${bgImg}) no-repeat center center;
  background-size: cover;
`;