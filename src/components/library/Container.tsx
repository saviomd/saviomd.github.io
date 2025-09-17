import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

function Container({ children }: IProps) {
  return <div className="container mx-auto max-w-5xl px-4">{children}</div>;
}

export default Container;
