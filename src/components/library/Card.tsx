import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

function Card({ children }: PropsType) {
  return (
    <div className="rounded-lg bg-gradient-to-br from-slate-200 to-white p-4 shadow-md">
      {children}
    </div>
  );
}

export default Card;
