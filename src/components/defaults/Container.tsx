import { FC, ReactNode } from "react"
import Header from "./Header"
import Footer from "../footwear/Footer";

interface ContainerProps {
    children: ReactNode;
    active: string;
}

const Container: FC<ContainerProps> = ({ children, active }) => {
  return (
    <div>
      <Header active={active} />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Container
