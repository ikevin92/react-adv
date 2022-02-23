import { lazy, LazyExoticComponent } from 'react';
import NoLazy from '../01-lazyload/pages/NoLazy';
// import { LazyPage2, LazyPage3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface IRoute {
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: IRoute[];
}

const LazyLoad = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'
    ),
);

export const routes: IRoute[] = [
  {
    path: '/lazyload',
    component: LazyLoad,
    name: 'LazyLoading  -  Nested',
  },
  {
    path: '/no-lazy',
    component: NoLazy,
    name: 'No Lazy loading',
  },
];
