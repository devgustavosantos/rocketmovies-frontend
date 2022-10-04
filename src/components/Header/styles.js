import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  /* height: 11.6rem; */
  padding: 3rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_900};

  position: relative;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }

  > .wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6.4rem;

    h2 {
      font-size: 2.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.PINK_800};

      @media (max-width: 768px) {
        display: none;
      }
    }

    .only-in-desktop {
      @media (max-width: 768px) {
        display: none;
      }
    }

    > div:nth-child(2) {
      margin-bottom: 0;
    }

    .mobile-search {
      display: none;
      background-color: transparent;
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.PINK_800};

      position: absolute;
      left: 2rem;

      @media (max-width: 768px) {
        display: block;
      }
    }
  }
`;

export const Profile = styled.div`
  max-width: 20rem;

  display: flex;
  align-items: center;
  gap: 0.9rem;

  @media (max-width: 768px) {
    position: absolute;
    right: 2rem;
  }

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

    @media (max-width: 768px) {
      width: 5rem;
      height: 5rem;
    }
  }
`;

export const Logout = styled.button`
  display: block;
  width: 100%;

  border: none;
  background-color: transparent;

  text-align: right;
`;
