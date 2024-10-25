import { FC, ReactNode } from "react"
import Header from "./Header"
import Footer from "../footwear/Footer";
import PageTransition from "./PageTransition";

interface ContainerProps {
    children: ReactNode;
    active: string;
}

const Container: FC<ContainerProps> = ({ children, active }) => {
  return (
    <div>
      <Header active={active} />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </div>
  )
}

export default Container
