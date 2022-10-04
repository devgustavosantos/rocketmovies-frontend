import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem 1fr;
  grid-template-areas:
    "header"
    "content";

  @media (max-width: 768px) {
    grid-template-rows: 7rem 1fr;
  }

  > main {
    grid-area: content;
    width: 100%;
    padding: 3rem 0;

    overflow-y: hidden;
    > .wrapper {
      height: 100%;
      overflow-y: auto;
      padding: 0 2rem;
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
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;

      @media (max-width: 768px) {
        justify-content: center;
      }
    }

    .description {
      text-align: justify;
      word-wrap: break-word;
    }
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (max-width: 768px) {
    align-items: center;

    > a {
      font-size: 2rem;
    }
  }

  > .highlight {
    display: flex;
    align-items: center;
    gap: 1.9rem;

    @media (max-width: 768px) {
      display: block;
      text-align: center;
    }

    > h1 {
      word-wrap: normal;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      @media (max-width: 768px) {
        font-size: 4rem;
        margin-bottom: 1.5rem;
      }
    }
  }
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  .user-infos,
  .note-infos {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    justify-content: center;
  }

  @media (max-width: 768px) {
    display: block;
  }

  img {
    width: 1.6rem;
    height: 1.6rem;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_900};
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK_800};
  }
`;

export const Buttons = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 5.6rem;

  > button {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;

    > button {
      margin-top: 0;
    }
  }
`;
