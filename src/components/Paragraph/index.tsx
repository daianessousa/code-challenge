import { Content } from "./globalStyles";

interface IParagraphProps {
  paragraph: string;
}

export const Paragraph = ({ paragraph }: IParagraphProps) => {
  return <Content>{paragraph}</Content>;
};
