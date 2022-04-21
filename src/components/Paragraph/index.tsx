import { Content } from "./styles";

interface IParagraphProps {
  paragraph: string;
}

export const Paragraph = ({ paragraph }: IParagraphProps) => {
  return <Content>{paragraph}</Content>;
};
