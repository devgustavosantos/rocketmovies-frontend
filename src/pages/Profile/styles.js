import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.header`
  width: 100%;
  height: 14.4rem;

  padding-left: 14.4rem;

  background-color: ${({ theme }) => theme.COLORS.PINK_900};

  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  width: 34rem;

  margin: auto;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`;

export const Avatar = styled.div`
  position: relative;

  margin: -9.3rem auto 6.4rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 100%;
    height: 100%;

    border-radius: 50%;

    display: block;
  }

  > label {
    position: absolute;
    bottom: 0;
    right: 0;

    cursor: pointer;

    width: 4.8rem;
    height: 4.8rem;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.PINK_800};

    > svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.BLACK_900};
    }

    > input {
      display: none;
    }
  }
`;
