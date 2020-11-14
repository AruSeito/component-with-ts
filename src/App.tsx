import React from "react";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import { MenuProps } from "./components/Menu/menu";
import SubMenu from "./components/Menu/subMenu";
function App() {
  const testProps: MenuProps = {
    className: "test",
    mode: "vertivcal",
    defaultOpenMenus: ["2"],
  };
  return (
    <div className="App">
      <header className="App-header">
        <Menu {...testProps}>
          <MenuItem>active</MenuItem>
          <MenuItem disabled>disabled</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>active1</MenuItem>
            <MenuItem>active2</MenuItem>
            <MenuItem>active3</MenuItem>
            <MenuItem>active4</MenuItem>
          </SubMenu>
          <MenuItem>xyz</MenuItem>
        </Menu>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
