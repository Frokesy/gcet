import { FC, ReactNode } from "react"
import Header from "./Header"
import Footer from "../footwear/Footer";

interface ContainerProps {
    children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Container
