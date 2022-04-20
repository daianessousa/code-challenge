import { Heading } from "./styles";

interface ITitleProps {
  title: string;
  primary: boolean;
}

export const HeadingSM = ({ title, primary }: ITitleProps) => {
  return <Heading primary={primary}>{title}</Heading>;
};
