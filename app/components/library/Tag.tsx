import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

function Tag({ children }: IProps) {
  return (
    <span className="border-layer-2-light bg-layer-1-light dark:border-layer-2-dark dark:bg-layer-1-dark inline-block rounded-lg border px-2 py-1 text-sm">
      {children}
    </span>
  );
}

export default Tag;
