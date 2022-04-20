import styled from "styled-components";
import { theme } from "./theme";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.spacing.size.xs.value};
`;
