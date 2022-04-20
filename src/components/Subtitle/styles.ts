import styled from "styled-components";
import { theme } from "../../theme";

export const Content = styled.h2`
  font-size: ${theme.font.size.md.value};
  line-height: ${theme.line.height.medium.value};
  font-family: ${theme.font.family.highlight.value};
  font-weight: ${theme.font.weight.medium.value};
  color: ${theme.neutral.color[4].value};
`;
