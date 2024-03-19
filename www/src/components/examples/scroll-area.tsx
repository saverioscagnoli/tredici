import { ColorSchemeSelect } from "@components";
import { ScrollArea, ScrollAreaScrollbarColorScheme } from "@tredici";
import { useState } from "react";

const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu"
];

const ScrollAreaDemo = () => {
  const [colorScheme, setColorScheme] =
    useState<ScrollAreaScrollbarColorScheme>("plum");

  return (
    <div>
      <ScrollArea className="h-[190px] border border-[--gray-7] rounded p-4 shadow">
        <div className="flex flex-col gap-2">
          {pokemons.map((pokemon, index) => (
            <p className="border-b border-b-[--gray-7] pb-2">
              <strong>{index + 1}.</strong> {pokemon}
            </p>
          ))}
        </div>

        <ScrollArea.Scrollbar colorScheme={colorScheme} />
      </ScrollArea>
      <ColorSchemeSelect
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
        className="absolute top-4 right-4 w-[175px]"
        colors={[
          "plum",
          "teal",
          "grass",
          "red",
          "amber",
          "blue",
          "gray",
          "b/w"
        ]}
      />
    </div>
  );
};

export { ScrollAreaDemo };
