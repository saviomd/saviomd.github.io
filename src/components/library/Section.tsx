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
        bg === "light" ? "bg-slate-200" : "border-b border-slate-200"
      } ${hasPaddingY ? "py-4" : ""}`}
      id={id}
    >
      {children}
    </section>
  );
}

export default Section;
