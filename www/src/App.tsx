import { Navbar, TabElement, TabLabel } from "@components";
import { Introduction } from "@mdx";
import { ScrollArea } from "@tredici";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="w-full h-full flex justify-between overflow-auto">
        <ScrollArea>
          <div className="h-full flex flex-col py-8 px-12 gap-[2px]">
            <TabLabel>Overview</TabLabel>
            <TabElement to="/docs">Introduction</TabElement>
            <TabElement to="/docs/installation">Installation</TabElement>
            <TabElement to="/docs/usage">Usage</TabElement>
            <TabLabel>Components</TabLabel>
            <TabElement to="/docs/alert-dialog">Alert Dialog</TabElement>
            <TabElement to="/docs/aspect-ratio">Aspect Ratio</TabElement>
            <TabElement to="/docs/avatar">Avatar</TabElement>
            <TabElement to="/docs/button">Button</TabElement>
            <TabElement to="/docs/checkbox">Checkbox</TabElement>
            <TabElement to="/docs/collapsible">Collapsible</TabElement>
            <TabElement to="/docs/context-menu">Context Menu</TabElement>
            <TabElement to="/docs/dialog">Dialog</TabElement>
            <TabElement to="/docs/dropdown-menu">Dropdown Menu</TabElement>
            <TabElement to="/docs/icon-button">Icon Button</TabElement>
            <TabElement to="/docs/input">Input</TabElement>
            <TabElement to="/docs/menubar">Menubar</TabElement>
            <TabElement to="/docs/popover">Popover</TabElement>
            <TabElement to="/docs/progress">Progress</TabElement>
            <TabElement to="/docs/radio-group">Radio Group</TabElement>
            <TabElement to="/docs/scroll-area">Scroll Area</TabElement>
            <TabElement to="/docs/select">Select</TabElement>
            <TabElement to="/docs/slider">Slider</TabElement>
            <TabElement to="/docs/switch">Switch</TabElement>
            <TabElement to="/docs/tabs">Tabs</TabElement>
            <TabElement to="/docs/toast">Toast</TabElement>
            <TabElement to="/docs/tooltip">Tooltip</TabElement>
          </div>

          <ScrollArea.Scrollbar colorScheme="gray" />
        </ScrollArea>
        <div className="w-1/2">
          <Router>
            <Routes>
              <Route path="/docs" element={<Introduction />} />
            </Routes>
          </Router>
        </div>
        <div className="w-1/4">sidebar</div>
      </div>
    </div>
  );
}

export default App;
