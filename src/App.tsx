import React from 'react';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import { MenuProps } from './components/Menu/menu';
function App() {
  const testProps:MenuProps = {
    defaultIndex:0,
    className:'test'
}
  return (
    <div className="App">
      <header className="App-header">
      <Menu {...testProps}>
            <MenuItem >
                active
            </MenuItem>
            <MenuItem disabled >
                disabled
            </MenuItem>
            <MenuItem >
                xyz
            </MenuItem>
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
