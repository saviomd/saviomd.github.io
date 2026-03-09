import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Container({ children }: Props) {
  return <div className="container mx-auto max-w-5xl px-4">{children}</div>;
}

export default Container;
