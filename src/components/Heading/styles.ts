import styled from "styled-components";
import { theme } from "../../theme";

export const Heading = styled.h1<{ primary: boolean }>`
  font-size: ${(props) =>
    props.primary ? theme.font.size.lg.value : theme.font.size.xxl.value};
  line-height: ${theme.line.height.distant.value};
  font-family: ${theme.font.family.highlight.value};
  font-weight: ${theme.font.weight.bold.value};
  color: ${theme.neutral.color[5].value};
  margin-bottom: ${theme.spacing_squish.size.xs.v.value};
  text-align: ${(props) => (props.primary ? "" : "center")};
`;
