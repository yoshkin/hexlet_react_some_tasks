//App.jsx

// @ts-check

import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Home from './Home.jsx';
import Profile from './Profile.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import ThemeContext from './contexts';

const themes = [
  {
    id: 1,
    name: 'White',
    className: 'light',
  },
  {
    id: 2,
    name: 'Black',
    className: 'dark',
  },
  {
    id: 3,
    name: 'Blue',
    className: 'dark-blue',
  },
];

const ThemeProvider = ({ children }) => {
  // BEGIN (write your solution here)
  const [theme, setTheme] = useState({
    id: 1,
    name: 'White',
    className: 'light',
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
  // END
};

const App = () => (
  <ThemeProvider>
    <Tabs className="mb-3">
      <Tab eventKey="home" title="Home">
        <Home />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <Profile />
      </Tab>
    </Tabs>
    <ThemeSwitcher />
  </ThemeProvider>
);

export default App;


//context
// @ts-check

import { createContext } from 'react';

export default createContext({
  themes: [],
  theme: {},
  setTheme: () => {},
});

//ThemeSwitcher.jsx
// @ts-check

import React, { useContext } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

const ThemeSwitcher = () => {
  // BEGIN (write your solution here)
  const { theme, themes, setTheme } = useContext(ThemeContext);
  // END

  return (
    <ButtonGroup className="mt-2">
      {themes.map((curTheme) => (
        <ToggleButton
          key={curTheme.id}
          id={`radio-${curTheme.id}`}
          type="radio"
          name="radio"
          value={curTheme.name}
          checked={curTheme.name === theme.name}
          onChange={() => setTheme(curTheme)}
        >
          {curTheme.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

export default ThemeSwitcher;

//Home.jsx
// @ts-check

import React, { useContext } from 'react';

import ThemeContext from './contexts';

const Home = () => {
  // BEGIN (write your solution here)
  const { theme: { className } } = useContext(ThemeContext);
  // END

  return (
    <article className={className}>
      Текст для вкладки Home
    </article>
  );
};

export default Home;


//Profile.jsx

// @ts-check

import React, { useContext } from 'react';

import ThemeContext from './contexts';

const Profile = () => {
  // BEGIN (write your solution here)
  const { theme: {className }} = useContext(ThemeContext);
  // END

  return (
    <article className={className}>
      Текст для вкладки Profile
    </article>
  );
};

export default Profile;

//index

// @ts-check

import ReactDOM from 'react-dom/client';
import React from 'react';

import App from './App.jsx';

const mountNode = document.getElementById('container');
const root = ReactDOM.createRoot(mountNode);
root.render(<App />);

