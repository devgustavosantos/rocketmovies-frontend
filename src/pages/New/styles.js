import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;

    width: 100%;

    padding: 6rem 0;

    overflow: hidden;

    .wrapper {
      height: 100%;

      overflow-y: scroll;
    }

    .wrapper::-webkit-scrollbar {
      width: 0.8rem;
    }

    .wrapper::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK_800};
      border-radius: 8rem;
    }

    h1 {
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.7rem;

      margin: 2.4rem 0 4rem;
    }

    h2 {
      font-size: 20px;
      line-height: 26px;
      color: ${({ theme }) => theme.COLORS.GRAY_700};

      margin: 4rem 0 2.4rem;
    }

    .note-items {
      width: 100%;

      padding: 1.6rem;
      background-color: ${({ theme }) => theme.COLORS.BLACK_900};

      border-radius: 0.8rem;

      margin-bottom: 4rem;

      display: flex;
      gap: 4rem;
      flex-wrap: wrap;
    }
  }
`;

export const Inputs = styled.div`
  display: flex;
  gap: 5.6rem;

  > div {
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 27.5rem;

  margin-top: 4rem;

  background-color: ${({ theme }) => theme.COLORS.BLACK_700};

  border: none;
  border-radius: 1rem;
  outline: none;

  padding: 1.7rem;

  resize: none;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 5.6rem;

  > button {
    width: 100%;
  }
`;
