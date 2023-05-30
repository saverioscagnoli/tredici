import { ComponentPropsWithoutRef, forwardRef } from "react";
import {
  StyledSelectHandler as Handler,
  StyledSelectOption as Option,
  StyledSelectOptionWrapper as OptionWrapper,
  StyledSelectWrapper as Wrapper
} from "../styled";
import { useBool } from "../../hooks";

export interface SelectProps
  extends Omit<ComponentPropsWithoutRef<"div">, "onChange"> {
  /**
   * The options to display
   */
  options: string[];
  /**
   * The callback to call when the user selects an option
   */
  onChange?: (val: string) => void;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ options, onChange, ...props }, ref) => {
    const [open, { toggle, setFalse }] = useBool();
    const onSelect = (opt: string) => {
      setFalse();
      onChange?.(opt);

      let i = options.findIndex(o => o === opt);
      [options[0], options[i]] = [options[i], options[0]];
    };

    return (
      <Wrapper {...props} ref={ref}>
        <Handler onClick={toggle}>
          <span>{options[0]}</span>
          <span>↓</span>
        </Handler>
        {open ? (
          <OptionWrapper>
            {options.map(opt => (
              <Option key={opt} onClick={() => onSelect(opt)}>
                {opt}
              </Option>
            ))}
          </OptionWrapper>
        ) : null}
      </Wrapper>
    );
  }
);
