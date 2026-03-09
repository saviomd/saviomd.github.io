import type { ElementType, ReactNode } from "react";

type HeadingLevel = keyof typeof levels;

interface Props {
  children: ReactNode;
  level: HeadingLevel;
}

const levels = {
  1: "text-3xl",
  2: "text-2xl",
  3: "text-xl",
};
const levelKeys = Object.keys(levels).map((item) => Number.parseInt(item, 10));

function Heading({ children, level }: Props) {
  const HeadingTag = `h${String(level)}` as ElementType;
  return (
    <HeadingTag
      className={`font-italiana text-typography-title-light dark:text-typography-title-dark mb-2 font-bold text-balance ${levels[level]}`}
    >
      {children}
    </HeadingTag>
  );
}

export default Heading;
export { levelKeys };
export type { HeadingLevel };
