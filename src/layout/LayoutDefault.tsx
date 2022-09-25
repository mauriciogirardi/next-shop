import Image from "next/future/image";
import Link from "next/link";
import logoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/layout/layoutDefault";

interface LayoutDefaultProps {
  children: React.ReactNode;
}

export const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <Container>
      <Header>
        <Link href="/" prefetch={false}>
          <Image src={logoImg} alt="" />
        </Link>
      </Header>

      {children}
    </Container>
  );
};
