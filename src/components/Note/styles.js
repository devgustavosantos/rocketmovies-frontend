import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 22.3rem;

  margin-bottom: 2.4rem;
  padding: 3.2rem;

  border-radius: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.PINK_900};

  display: grid;

  > h3 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;

    margin-bottom: 0.8rem;
  }

  > p {
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};

    margin: 1.5rem 0;

    word-wrap: normal;
    overflow: hidden;
    /* white-space: nowrap; */
    text-overflow: ellipsis;

    height: 40px;
  }

  > footer:last-child {
    align-self: end;
  }
`;
