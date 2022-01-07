import { Suspense } from 'react';
import { routes } from './routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';
//import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages/';
import logo from '../logo.svg';


export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              {
                routes.map(({path,name}) => (
                  <li key={name}>
                    <NavLink 
                      to={path} 
                      activeClassName="nav-active" 
                    >{name}</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <Switch>
            {
              routes.map(({name, path, Component}) => (
                <Route 
                  key={name}
                  path={path}
                  render={() => <Component/>}
                />
              ))
            }
            <Redirect to={routes[0].path}/>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}