import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "dark",

    brandTitle: "Tredici, a highly-customizable component library",
    brandImage: "/13.png",
    brandTarget: "_self"
  })
});
