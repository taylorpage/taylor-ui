// Components
import Button from "../../../lib/components/button";

import "./sidebar.scss";

interface SidebarProps {}

const Sidebar = function ({}: SidebarProps) {
  const components: { name: string; url: string }[] = [
    {
      name: "button",
      url: "",
    },
  ];
  return (
    <div className="tui-sidebar">
      <h1>Components</h1>
      {components.map((component) => {
        return <Button design="primary" label={component.name} />;
      })}
    </div>
  );
};

export default Sidebar;
