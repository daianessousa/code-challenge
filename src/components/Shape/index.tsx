import React from "react";
import { Content } from "./styles";

interface IProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
}

export const Shape = ({ children, width, height }: IProps) => {
  return (
    <Content width={width} height={height}>
      {children}
    </Content>
  );
};
