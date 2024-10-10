import { FC, ReactNode } from "react"
import Header from "./Header"

interface ContainerProps {
    children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default Container
