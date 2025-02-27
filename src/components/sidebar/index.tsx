// Components
import { useNavigate } from "react-router-dom";
import Button from "../../../lib/components/button";

import "./sidebar.scss";

interface SidebarProps {}

const Sidebar = function ({}: SidebarProps) {
  const navigate = useNavigate();
  const components: { name: string; url: string }[] = [
    {
      name: "button",
      url: "/button",
    },
    {
      name: "textbox",
      url: "/textbox",
    },
  ];
  return (
    <div className="tui-sidebar">
      <h1>Components</h1>
      {components.map((component) => {
        return (
          <Button
            design="text"
            label={component.name}
            onClick={() => navigate(component.url)}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
