import { Button } from "@tredici";

const Introduction = () => {
  return (
    <div className="flex flex-col">
      <div className="p-4 px-24">
        <h1 className="text-3xl font-semibold mt-12">Introduction</h1>

        <p className="text-lg mt-4">
          This is a collection of reusable components, just copy and paste the
          necessary elements in your project(s) and it's ready to go.
          <br />
          Taking a similar approach as the amazing{" "}
          <a className="hover:underline underline-offset-2 cursor-pointer font-semibold">
            shadcn/ui
          </a>
          (from which I took inspiration), this is not meant to be a component
          library. You can copy and paste / edit as you please, and it's not
          meant to be a one-size-fits-all solution.
        </p>
        <h2 className="text-2xl font-semibold mt-8">How it's made?</h2>
        <p className="text-lg mt-2">
          Tredici is made possible by radix-ui, which is a fantastic tool to
          make React component. It provides accessible and unstyled components
          to make yours.
        </p>
      </div>
      <a href="/docs/installation" className="self-end mt-4">
        <Button> {">"} Installation</Button>
      </a>
    </div>
  );
};

export { Introduction };
