import Image from "next/future/image";
import logoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/layout/layoutDefault";

interface LayoutDefaultProps {
  children: React.ReactNode;
}

export const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      {children}
    </Container>
  );
};
