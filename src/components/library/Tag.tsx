import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

function Tag({ children }: PropsType) {
  return (
    <span className="inline-block rounded-lg border border-layer-2-light bg-layer-1-light px-2 py-1 text-sm dark:border-layer-2-dark dark:bg-layer-1-dark">
      {children}
    </span>
  );
}

export default Tag;
