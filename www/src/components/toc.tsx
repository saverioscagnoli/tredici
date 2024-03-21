import React, {
  Children,
  ReactNode,
  isValidElement,
  useEffect,
  useState
} from "react";
import { Heading } from "./heading";
import { toKebabCase } from "@lib";

type TocProps = {
  children: ReactNode;
};

type THeading = {
  label: string;
  type: string;
};

const pTable = {
  h1: 1,
  h2: 2,
  h3: 3,
  h4: 4,
  h5: 5,
  h6: 6
};

const Toc: React.FC<TocProps> = ({ children }) => {
  const [headings, setHeadings] = useState<THeading[]>([]);

  useEffect(() => {
    const hs: THeading[] = [];
    Children.forEach(children, child => {
      if (isValidElement(child) && child.type === Heading) {
        hs.push({ label: child.props.children, type: child.props.as });
      }
    });
    setHeadings(hs);
  }, []);

  useEffect(() => {
    console.log(headings);
  }, [headings]);

  return (
    <div className="w-screen h-screen lg:pl-[300px] pt-16 flex">
      <div className="xl:w-3/4 w-full overflow-y-auto py-12 xl:px-32  lg:px-20 px-12">
        {children}
      </div>
      <div className="xl:w-1/4 w-full py-12 px-7 hidden xl:block">
        <h2 className="text-lg font-bold">On this page</h2>
        <ul className="mt-2">
          {headings.map(heading => (
            <li key={heading.label}>
              <a
                className="hover:underline underline-offset-2"
                href={`#${toKebabCase(heading.label)}`}
                style={{ paddingLeft: `${pTable[heading.type]}rem` }}
              >
                {heading.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Toc };
