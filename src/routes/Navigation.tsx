import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>loading...</span>}>

    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {routes.map((r) => (
              <li key={r.path}>
                <NavLink to={r.path} activeClassName="nav-active" exact>
                  {r.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Switch>
          {routes.map((r) => (
            <Route key={r.path} path={r.path} exact component={r.Component} />
          ))}

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>

    </Suspense>
  );
};
