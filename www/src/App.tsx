import { Navbar, SideTabs } from "@components";
import { cn } from "@lib";
import {
  AlertDialogPage,
  AspectRatioPage,
  AvatarPage,
  ButtonPage,
  CheckboxPage,
  CollapsiblePage,
  ContextMenuPage,
  DarkMode,
  DialogPage,
  DropdownMenuPage,
  GettingStarted,
  IconButtonPage,
  InputPage,
  Introduction,
  MenubarPage,
  PopoverPage,
  ProgressPage,
  RadioGroupPage,
  ScrollAreaPage,
  SelectPage,
  SliderPage,
  SwitchPage,
  TabsPage,
  ToastPage,
  TooltipPage
} from "@pages";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate
} from "react-router-dom";

const RouteGroup = () => (
  <Routes>
    <Route path="/docs" element={<Introduction />} />
    <Route path="/docs/introduction" element={<Navigate to="/docs" />} />
    <Route path="/docs/getting-started" element={<GettingStarted />} />
    <Route path="/docs/dark-theme" element={<DarkMode />} />
    <Route path="/docs/alert-dialog" element={<AlertDialogPage />} />
    <Route path="/docs/aspect-ratio" element={<AspectRatioPage />} />
    <Route path="/docs/avatar" element={<AvatarPage />} />
    <Route path="/docs/button" element={<ButtonPage />} />
    <Route path="/docs/checkbox" element={<CheckboxPage />} />
    <Route path="/docs/collapsible" element={<CollapsiblePage />} />
    <Route path="/docs/context-menu" element={<ContextMenuPage />} />
    <Route path="/docs/dialog" element={<DialogPage />} />
    <Route path="/docs/dropdown-menu" element={<DropdownMenuPage />} />
    <Route path="/docs/icon-button" element={<IconButtonPage />} />
    <Route path="/docs/input" element={<InputPage />} />
    <Route path="/docs/menubar" element={<MenubarPage />} />
    <Route path="/docs/popover" element={<PopoverPage />} />
    <Route path="/docs/progress" element={<ProgressPage />} />
    <Route path="/docs/radio-group" element={<RadioGroupPage />} />
    <Route path="/docs/scroll-area" element={<ScrollAreaPage />} />
    <Route path="/docs/select" element={<SelectPage />} />
    <Route path="/docs/slider" element={<SliderPage />} />
    <Route path="/docs/switch" element={<SwitchPage />} />
    <Route path="/docs/tabs" element={<TabsPage />} />
    <Route path="/docs/toast" element={<ToastPage />} />
    <Route path="/docs/tooltip" element={<TooltipPage />} />
  </Routes>
);

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <SideTabs />
        <RouteGroup />
      </div>
    </Router>
  );
}

export default App;
