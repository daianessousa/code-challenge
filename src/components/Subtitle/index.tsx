import { Content } from "./styles";

interface ISubtitleProps {
  subtitle: string;
}
export const Subtitle = ({ subtitle }: ISubtitleProps) => {
  return <Content>{subtitle}</Content>;
};
