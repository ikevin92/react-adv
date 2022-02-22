import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React Logo' />
          <ul>
            {routes.map(({ to, name }) => (
              <li>
                <NavLink
                  to={to}
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

          <Route path='/*' element={<Navigate to='/lazy1' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
