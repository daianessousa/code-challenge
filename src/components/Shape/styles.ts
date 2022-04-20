import styled from "styled-components";
import { theme } from "../../theme";

interface IProps {
  width?: string;
  height?: string;
}

export const Content = styled.div<IProps>`
  border-radius: ${theme.radius.size.none.value};
  padding: ${theme.spacing.size.sm.value};
  border: ${theme.border.size.thin.value} solid ${theme.neutral.color[2].value};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: 300px;
`;
