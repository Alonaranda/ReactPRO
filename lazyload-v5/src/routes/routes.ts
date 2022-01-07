import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../lazyload/pages/NoLazy";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string;
    children?: Route[];
}

// const LazyPage1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../lazyload/pages/LazyPage1'));
// const LazyPage2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../lazyload/pages/LazyPage2'));
// const LazyPage3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../lazyload/pages/LazyPage3'));

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../lazyload/layout/LazyLayout'));

export const routes:Route[] = [
    // {
    //     path: '/lazy1',
    //     Component: LazyPage1,
    //     name: 'LazyPage 1',
    // },
    // {
    //     path: '/lazy2',
    //     Component: LazyPage2,
    //     name: 'LazyPage 2',
    // },
    // {
    //     path: '/lazy3',
    //     Component: LazyPage3,
    //     name: 'LazyPage 3',
    // },
    // {
    {
        path: '/lazyload',
        Component: LazyLayout,
        name: 'LazyLoad Nested',
    },
    {
        path: '/nolazy',
        Component: NoLazy,
        name: 'No Lazy',
    },

]