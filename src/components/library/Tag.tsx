import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

function Tag({ children }: PropsType) {
  return (
    <span className="inline-block rounded-lg border bg-white py-1 px-2 text-sm">
      {children}
    </span>
  );
}

export default Tag;
