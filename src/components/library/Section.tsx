import type { ReactNode } from "react";

interface IProps {
  bg?: "light";
  children: ReactNode;
  hasPaddingY?: boolean;
  id: string;
}

function Section({ bg, children, hasPaddingY = true, id }: IProps) {
  return (
    <section
      className={`overflow-hidden ${
        bg === "light"
          ? "bg-layer-2-light dark:bg-layer-2-dark"
          : "border-layer-2-light dark:border-layer-2-dark border-b"
      } ${hasPaddingY ? "py-4" : ""}`}
      id={id}
    >
      {children}
    </section>
  );
}

export default Section;
