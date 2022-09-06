import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 11.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_900};

  > .wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 6.4rem;

    h2 {
      font-size: 2.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.PINK_800};
    }

    > div:nth-child(2) {
      margin-bottom: 0;
    }
  }
`;

export const Profile = styled.div`
  max-width: 20rem;

  display: flex;
  align-items: center;
  gap: 0.9rem;

  > div {
    flex-grow: 1;

    p {
      font-size: 1.4rem;
      font-weight: 700;

      max-width: 15rem;
      word-wrap: normal;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  img {
    width: 6.4rem;
    height: 6.4rem;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_900};
  }
`;

export const Logout = styled.button`
  display: block;
  width: 100%;

  border: none;
  background-color: transparent;

  text-align: right;
`;
