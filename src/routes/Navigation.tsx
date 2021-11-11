import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/home" activeClassName="nav-active" exact>
                home
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="nav-active" exact>
                users
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="nav-active" exact>
                about
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <h1>Home</h1>
          </Route>
          <Route path="/users">
            <h1>Users</h1>
          </Route>
          <Route path="/about">
            <h1>About</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
