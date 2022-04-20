import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.a`
  font-size: ${theme.font.size.sm.value};
  font-family: ${theme.font.family.highlight.value};
  font-weight: ${theme.font.weight.medium.value};
  line-height: ${theme.line.height.tight.value};
  border: ${theme.border.size.none.value};
  padding: ${theme.spacing_squish.size.sm.stack.value};
  color: ${theme.neutral.color[1].value};
  background-color: ${theme.brand.color.primary[3].value};
  text-decoration: none;

  &:hover {
    background-color: ${theme.brand.color.primary[5].value};
  }
`;
