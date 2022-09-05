import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem 1fr;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    width: 100%;
    padding: 6rem 0;

    overflow-y: hidden;
    > .wrapper {
      height: 100%;
      overflow-y: auto;
    }

    > .wrapper::-webkit-scrollbar {
      width: 0.8rem;
    }

    > .wrapper::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK_800};
      border-radius: 8rem;
    }

    .tags {
      margin: 4rem 0;
    }

    .description {
      text-align: justify;
    }
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > .highlight {
    display: flex;
    align-items: center;
    gap: 1.9rem;

    > h1 {
      word-wrap: normal;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > img {
    width: 1.6rem;
    height: 1.6rem;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_900};
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK_800};
  }
`;
