import { Button } from "../Button";
import { HeadingSM } from "../Heading";
import { Paragraph } from "../Paragraph";
import { Shape } from "../Shape";
import { Subtitle } from "../Subtitle";

interface ICardProps {
  title: string;
  description: string;
  url: string;
  source: string;
}

export const Card = ({ title, description, url, source }: ICardProps) => {
  return (
    <Shape>
      <HeadingSM title={title} primary />
      <Subtitle subtitle={source} />
      <Paragraph paragraph={description} />
      <Button label="Visualizar" url={url} />
    </Shape>
  );
};
