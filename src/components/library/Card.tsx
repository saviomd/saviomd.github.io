import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

function Card({ children }: IProps) {
  return (
    <div className="from-layer-2-light dark:from-layer-2-dark rounded-lg bg-linear-to-br to-transparent p-4 shadow-md">
      {children}
    </div>
  );
}

export default Card;
