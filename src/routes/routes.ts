import { lazy } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element> | JSXComponent;
  name: string;
}

// se declara los componetes con la propiedad lazy y se le asigna el nombre al chunk
const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout"*/ '../01-lazyload/layout/LazyLayout'
    ),
);
// const Lazy1 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage1"*/ '../01-lazyload/pages/LazyPage1'),
// );
// const Lazy2 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage2"*/ '../01-lazyload/pages/LazyPage2'),
// );
// const Lazy3 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage3"*/ '../01-lazyload/pages/LazyPage3'),
// );

export const routes: Route[] = [
  {
    path: '/lazyload/*', // path para todo el lazyload
    to: '/lazyload/',
    Component: LazyLayout,
    name: 'LazyLayout - Dashboard',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy',
  },
  // {
  //   to: '/lazy3',
  //   path: 'lazy3',
  //   Component: Lazy3,
  //   name: 'Lazy-3',
  // },
];
