import { ElementType, ReactNode } from "react";

type HeadingLevelType = keyof typeof levels;

const levels = {
  1: "text-3xl",
  2: "text-2xl",
  3: "text-xl",
};
const levelKeys = Object.keys(levels).map((item) => parseInt(item, 10));

type PropsType = {
  children: ReactNode;
  level: keyof typeof levels;
};

function Heading({ children, level }: PropsType) {
  const HeadingTag: ElementType = `h${level}`;
  return (
    <HeadingTag
      className={`mb-2 text-balance font-italiana font-bold text-typography-title-light dark:text-typography-title-dark ${levels[level]}`}
    >
      {children}
    </HeadingTag>
  );
}

export default Heading;
export { levelKeys };
export type { HeadingLevelType };
