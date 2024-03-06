import { cn } from "@/lib/utils";
import * as RxSlider from "@radix-ui/react-slider";
import { cva } from "class-variance-authority";
import { RefAttributes, forwardRef } from "react";

type SliderColorScheme =
  | "purple"
  | "teal"
  | "green"
  | "red"
  | "yellow"
  | "blue"
  | "b/w"
  | "gray";

const sliderRangeVariants = cva(["h-full", "absolute", "rounded-full"], {
  variants: {
    colorScheme: {
      purple: ["bg-purple-500", "dark:bg-purple-400"],
      teal: ["bg-teal-500", "dark:bg-teal-400"],
      green: ["bg-green-500", "dark:bg-green-400"],
      red: ["bg-red-500", "dark:bg-red-400"],
      yellow: ["bg-yellow-500", "dark:bg-yellow-400"],
      blue: ["bg-blue-500", "dark:bg-blue-400"],
      "b/w": ["bg-dark", "dark:bg-light"],
      gray: ["bg-gray-500", "dark:bg-gray-400"]
    }
  }
});

type SliderProps = RxSlider.SliderProps & {
  colorScheme?: SliderColorScheme;
};

const Slider = forwardRef<
  HTMLSpanElement,
  SliderProps & RefAttributes<HTMLSpanElement>
>(({ className, colorScheme = "purple", ...props }, ref) => {
  return (
    <RxSlider.Root
      className={cn(
        "w-[12.5rem] h-1.5",
        "relative flex items-center",
        "select-none touch-none",
        className
      )}
      {...props}
      ref={ref}
    >
      <RxSlider.Track
        className={cn("h-full", "relative flex-1", "rounded-full", [
          "bg-gray-500/20",
          "dark:bg-gray-400/40"
        ])}
      >
        <RxSlider.Range
          className={sliderRangeVariants({ className, colorScheme })}
        />
      </RxSlider.Track>
      <RxSlider.Thumb
        className={cn("w-4 h-4", "rounded-full", "block", "shadow", "outline-none", [
          "bg-light",
          "border border-dark",
          "dark:border-none"
        ])}
      />
    </RxSlider.Root>
  );
});

export { Slider };
export type { SliderProps };
