import { Container } from "./styles";

interface IButtonProps {
  label: string;
  url: string;
}

const Button = ({ label, url }: IButtonProps) => {
  return (
    <Container href={url} role="button">
      {label}
    </Container>
  );
};

export { Button };
