import React, { useState, ReactNode, useEffect } from "react";
import { CheckIcon, Cross2Icon, ArrowDownIcon } from "@radix-ui/react-icons";
import { useBool } from "@hooks/use-bool";
import "./select.css";

type Value = string | number | null;

interface SelectProps {
  options?: number[] | string[];
  className?: string;
  id?: string;
  rightIcon?: ReactNode;
  defaultOpen?: boolean;
  defaultValue?: string;
  clearable?: boolean;
  numbered?: boolean;
  onValueChange?: (value: Value) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  className,
  id,
  rightIcon,
  defaultOpen,
  defaultValue,
  clearable = false,
  numbered = false,
  onValueChange,
  ...props
}) => {
  const [isOpen, { setTrue: open, setFalse: close }] = useBool(!!defaultOpen);
  const [value, setValue] = useState<Value>(defaultValue || null);

  const onSelect = (o: Value) => () => {
    if (o === value) setValue(null);
    else setValue(o);
    close();
  };

  useEffect(() => {
    onValueChange?.(value);
  }, [value]);

  return (
    <div {...props} className={["select-13-root", className].join()}>
      <div id={id} tabIndex={0} className="select-13-trigger" onClick={open}>
        <span>{value}</span>
        {clearable && value ? (
          <Button
            size="xs"
            variant="ghost"
            icon={<Cross2Icon />}
            onClick={e => {
              e.stopPropagation();
              setValue(null);
            }}
          />
        ) : (
          <span className="select-13-arrow">
            {rightIcon || <ArrowDownIcon />}
          </span>
        )}
      </div>
      {isOpen && (
        <div className="select-13-options-wrapper">
          {options?.map((o, i) => (
            <div key={o} className="select-13-option" onClick={onSelect(o)}>
              <p style={{ marginLeft: "0.25rem", fontWeight: 500 }}>
                {numbered && `${i + 1}. `} {o}
              </p>
              <span className="select-13-check">
                {o === value && <CheckIcon />}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Select };
