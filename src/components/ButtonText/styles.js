import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  color: ${({ theme }) => theme.COLORS.PINK_800};

  display: inline-flex;
  align-items: center;
  gap: 0.8rem;

  > svg {
    font-size: 2.5rem;
  }
`;
