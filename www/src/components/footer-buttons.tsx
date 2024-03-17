import { Link } from "react-router-dom";
import { Button } from "./tredici/button";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { toKebabCase } from "@lib";

type FooterButtonsProps = {
  labels: [string, string];
};

const FooterButtons: React.FC<FooterButtonsProps> = ({ labels }) => {
  const [l1, l2] = labels;
  const [k1, k2] = [toKebabCase(l1), toKebabCase(l2)];

  return (
    <div className="mt-8 flex justify-between">
      <Link to={`/docs/${k1}`}>
        <Button
          variant="secondary"
          colorScheme="b/w"
          leftIcon={<ChevronLeftIcon />}
        >
          {l1}
        </Button>
      </Link>
      <Link to={`/docs/${k2}`}>
        <Button
          variant="secondary"
          colorScheme="b/w"
          rightIcon={<ChevronRightIcon />}
        >
          {l2}
        </Button>
      </Link>
    </div>
  );
};

export { FooterButtons };
