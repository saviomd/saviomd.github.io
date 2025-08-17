import { ReactNode } from "react";

type PropsType = {
  bg?: "light";
  children: ReactNode;
  hasPaddingY?: boolean;
  id: string;
};

function Section({ bg, children, hasPaddingY = true, id }: PropsType) {
  return (
    <section
      className={`${
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
