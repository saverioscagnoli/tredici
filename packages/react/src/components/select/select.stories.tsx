import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";

import { Select } from ".";
import React from "react";
import { Button } from "../button";
import { PersonIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof Select> = {
  component: Select
};

export default meta;
type Story = StoryObj<typeof Select>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const ThemeButton = ({ colorScheme }: { colorScheme? }) => {
  const { theme, toggle } = useTheme();

  return (
    <Button onClick={toggle} colorScheme={colorScheme}>
      {theme}
    </Button>
  );
};

export const Primary: Story = {
  render: () => {
    const foods = [
      "🍎 Apples",
      "🍌 Bananas",
      "🥦 Broccoli",
      "🥕 Carrots",
      "🍫 Chocolate"
    ];

    const animals = [
      "🐶 Dogs",
      "🐱 Cats",
      "🐭 Mice",
      "🐹 Hamsters",
      "🐰 Rabbits",
      "🐷 Pigs",
      "🐸 Frogs",
      "🐯 Tigers",
      "🐨 Koalas",
      "🐻 Bears",
      "🦁 Lions",
      "🐮 Cows",
      "🦝 Raccoons"
    ];

    const moonPhases = [
      "🌑 New Moon",
      "🌒 Waxing Crescent Moon",
      "🌓 First Quarter Moon",
      "🌔 Waxing Gibbous Moon",
      "🌕 Full Moon",
      "🌖 Waning Gibbous Moon",
      "🌗 Last Quarter Moon",
      "🌘 Waning Crescent Moon"
    ];

    return (
      <Tredici>
        <div className="flex flex-col gap-8">
          <ThemeButton />
          <div>
            <Select>
              <Select.Trigger />
              <Select.Body>
                {foods.map(food => (
                  <Select.Item key={food} value={food}>
                    {food}
                  </Select.Item>
                ))}
              </Select.Body>
            </Select>
          </div>

          <div>
            <Select>
              <Select.Trigger colorScheme="teal" />
              <Select.Body>
                {animals.map(animal => (
                  <Select.Item key={animal} value={animal}>
                    {animal}
                  </Select.Item>
                ))}
              </Select.Body>
            </Select>
          </div>

          <div>
            <Select>
              <Select.Trigger colorScheme="green" />
              <Select.Body>
                {moonPhases.map(phase => (
                  <Select.Item key={phase} value={phase}>
                    {phase}
                  </Select.Item>
                ))}
              </Select.Body>
            </Select>
          </div>

          <div>
            <Select>
              <Select.Trigger colorScheme="crimson" />
              <Select.Body>
                {foods.map(food => (
                  <Select.Item key={food} value={food}>
                    {food}
                  </Select.Item>
                ))}
              </Select.Body>
            </Select>
          </div>

          <div>
            <Select>
              <Select.Trigger colorScheme="starship" />
              <Select.Body>
                {foods.map(food => (
                  <Select.Item key={food} value={food}>
                    {food}
                  </Select.Item>
                ))}
              </Select.Body>
            </Select>
          </div>

          <div>
            <Select>
              <Select.Trigger colorScheme="blue" />
              <Select.Body>
                {foods.map(food => (
                  <Select.Item key={food} value={food}>
                    {food}
                  </Select.Item>
                ))}
              </Select.Body>
            </Select>
          </div>

          <div>
            <Select>
              <Select.Trigger colorScheme="pink" />
              <Select.Body>
                {foods.map(food => (
                  <Select.Item key={food} value={food}>
                    {food}
                  </Select.Item>
                ))}
              </Select.Body>
            </Select>
          </div>

          <div>
            <Select>
              <Select.Trigger colorScheme="gray" />
              <Select.Body>
                {foods.map(food => (
                  <Select.Item key={food} value={food}>
                    {food}
                  </Select.Item>
                ))}
              </Select.Body>
            </Select>
          </div>
        </div>
      </Tredici>
    );
  }
};
