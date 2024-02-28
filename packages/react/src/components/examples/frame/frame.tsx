import { Tredici } from "@components";
import { ThemeButton } from "..";

const Frame = () => {
  return (
    <Tredici>
      <ThemeButton />
      <div className="w-96 h-96">
        <iframe
          src="https://example.com"
          title="Virtualized Page"
          width="100%"
          height="100%"
          style={{ border: 0 }}
        />
      </div>
    </Tredici>
  );
};

export { Frame };
