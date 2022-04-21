import styled from "styled-components";
import { theme } from "../../theme";

export const Content = styled.p`
  font-size: ${theme.font.size.xs.value};
  line-height: ${theme.line.height.distant.value};
  font-family: ${theme.font.family.highlight.value};
  font-weight: ${theme.font.weight.regular.value};
  color: ${theme.neutral.color[4].value};
  margin-bottom: ${theme.spacing_squish.size.sm.h.value};
`;
