import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

function Card({ children }: PropsType) {
  return (
    <div className="rounded-lg bg-gradient-to-br from-layer-2-light to-transparent p-4 shadow-md dark:from-layer-2-dark">
      {children}
    </div>
  );
}

export default Card;
