import React, {
  ReactNode,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ForwardRefExoticComponent,
  useEffect,
  useRef,
  useState
} from "react";
import * as RxSelect from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "@radix-ui/react-icons";
import { useBool } from "@hooks/use-bool";
import "./select.css";
import { useCounter } from "@hooks/use-counter";

const Select: React.FC<ComponentPropsWithoutRef<"div">> = ({
  children,
  ...props
}) => {
  const [isOpen, { setTrue: open, setFalse: close }] = useBool(false);
  const [value, setValue] = useState<string>("default");
  const ref = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    if (isOpen) {
      ref.current?.focus();
    }
  }, [isOpen]);

  const onOptionClick = (newValue: string) => {
    setValue(newValue);
    close();
  };

  return (
    <div id="wrapper" {...props} className={["select-13-wrapper"].join(" ")}>
      <div
        tabIndex={0}
        ref={ref}
        onClick={open}
        onBlur={close}
        id="handler"
        className="select-13-handler"
      >
        <span>{value}</span>
        <span className={`select-13-arrow`}>↓</span>
      </div>
      <div className="select-13-options-wrapper">
        {React.Children.map(children, child => {
          if (
            React.isValidElement<{ onClick: (newValue: string) => void }>(child)
          ) {
            return React.cloneElement(child, { onClick: onOptionClick });
          }
          return child;
        })}
      </div>
    </div>
  );
};

interface SelectOptionProps {
  children: ReactNode;
  onClick: (value: string) => void;
}

export const SelectOption: React.FC<SelectOptionProps> = ({
  children,
  onClick
}) => {
  return (
    <div
      className="select-13-option"
      onClick={() => onClick(children!.toString())}
    >
      {children}
    </div>
  );
};
export { Select };
