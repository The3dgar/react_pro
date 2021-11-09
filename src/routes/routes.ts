import { lazy, LazyExoticComponent } from 'react';
import NoLazy from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

export const routes: Route[] = [
  {
    path: '/lazyload',
    Component: lazy(
      () =>
        import(
          /* webpackChunkName: "LazyPage1"*/ '../01-lazyload/layout/LazyLayout'
        )
    ),
    name: 'LazyLoading Nested',
  },
  {
    path: '/no-lazy',
    Component: NoLazy,
    name: 'No Lazy loading',
  },
];
